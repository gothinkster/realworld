import articleMapper from "~/utils/article.mapper";
import HttpException from "~/models/http-exception.model";
import slugify from 'slugify';
import {definePrivateEventHandler} from "~/auth-event-handler";

export default definePrivateEventHandler(async (event, {auth}) => {
    const {article} = await readBody(event);

    const { title, description, body, tagList } = article;
    const tags = Array.isArray(tagList) ? tagList : [];

    if (!title) {
        throw new HttpException(422, { errors: { title: ["can't be blank"] } });
    }

    if (!description) {
        throw new HttpException(422, { errors: { description: ["can't be blank"] } });
    }

    if (!body) {
        throw new HttpException(422, { errors: { body: ["can't be blank"] } });
    }

    const slug = `${slugify(title)}-${auth.id}`;

    const existingTitle = await usePrisma().article.findUnique({
        where: {
            slug,
        },
        select: {
            slug: true,
        },
    });

    if (existingTitle) {
        throw new HttpException(422, { errors: { title: ['must be unique'] } });
    }

    const {
        authorId,
        id: articleId,
        ...createdArticle
    } = await usePrisma().article.create({
        data: {
            title,
            description,
            body,
            slug,
            tagList: {
                connectOrCreate: tags.map((tag: string) => ({
                    create: { name: tag },
                    where: { name: tag },
                })),
            },
            author: {
                connect: {
                    id: auth.id,
                },
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

    return {article: articleMapper(createdArticle, auth.id)};
});
