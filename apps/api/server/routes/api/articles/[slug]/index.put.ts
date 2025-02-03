import HttpException from "~/models/http-exception.model";
import articleMapper from "~/utils/article.mapper";
import slugify from 'slugify';
import {definePrivateEventHandler} from "~/auth-event-handler";

export default definePrivateEventHandler(async (event, {auth}) => {
const {article} = await readBody(event);
    const slug = getRouterParam(event, 'slug');

    let newSlug = null;

    const existingArticle = await usePrisma().article.findFirst({
        where: {
            slug,
        },
        select: {
            author: {
                select: {
                    id: true,
                    username: true,
                },
            },
        },
    });

    if (!existingArticle) {
        throw new HttpException(404, {});
    }

    if (existingArticle.author.id !== auth.id) {
        throw new HttpException(403, {
            message: 'You are not authorized to update this article',
        });
    }

    if (article.title) {
        newSlug = `${slugify(article.title)}-${auth.id}`;

        if (newSlug !== slug) {
            const existingTitle = await usePrisma().article.findFirst({
                where: {
                    slug: newSlug,
                },
                select: {
                    slug: true,
                },
            });

            if (existingTitle) {
                throw new HttpException(422, { errors: { title: ['must be unique'] } });
            }
        }
    }

    const tagList =
        Array.isArray(article.tagList) && article.tagList?.length
            ? article.tagList.map((tag: string) => ({
                create: { name: tag },
                where: { name: tag },
            }))
            : [];

    await disconnectArticlesTags(slug);

    const updatedArticle = await usePrisma().article.update({
        where: {
            slug,
        },
        data: {
            ...(article.title ? { title: article.title } : {}),
            ...(article.body ? { body: article.body } : {}),
            ...(article.description ? { description: article.description } : {}),
            ...(newSlug ? { slug: newSlug } : {}),
            updatedAt: new Date(),
            tagList: {
                connectOrCreate: tagList,
            },
        },
        include: {
            tagList: {
                select: {
                    name: true,
                },
            },
            author: {
                select: {
                    username: true,
                    bio: true,
                    image: true,
                    followedBy: true,
                },
            },
            favoritedBy: true,
            _count: {
                select: {
                    favoritedBy: true,
                },
            },
        },
    });

    return {article: articleMapper(updatedArticle, auth.id)};
});

const disconnectArticlesTags = async (slug: string) => {
    await usePrisma().article.update({
        where: {
            slug,
        },
        data: {
            tagList: {
                set: [],
            },
        },
    });
};
