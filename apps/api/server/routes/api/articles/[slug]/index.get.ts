import HttpException from "~/models/http-exception.model";
import articleMapper from "~/utils/article.mapper";
import {definePrivateEventHandler} from "~/auth-event-handler";

export default definePrivateEventHandler(async (event, {auth}) => {
const slug = getRouterParam(event, 'slug');

    const article = await usePrisma().article.findUnique({
        where: {
            slug,
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

    if (!article) {
        throw new HttpException(404, { errors: { article: ['not found'] } });
    }

    return {article: articleMapper(article, auth.id)};
}, {requireAuth: false});
