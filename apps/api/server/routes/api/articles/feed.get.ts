import articleMapper from "~/utils/article.mapper";
import {definePrivateEventHandler} from "~/auth-event-handler";

export default definePrivateEventHandler(async (event, {auth}) => {
    const query = getQuery(event);
    const articlesCount = await usePrisma().article.count({
        where: {
            author: {
                followedBy: { some: { id: auth.id } },
            },
        },
    });

    // TODO fix query
    const articles = await usePrisma().article.findMany({
        where: {
            author: {
                followedBy: { some: { id: auth.id } },
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
        skip: Number(query.offset) || 0,
        take: Number(query.limit) || 10,
        omit: {
            body: true,
            updatedAt: true,
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

    return {
        articles: articles.map((article: any) => articleMapper(article, auth.id)),
        articlesCount,
    };
});
