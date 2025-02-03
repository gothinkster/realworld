import articleMapper from "~/utils/article.mapper";
import {definePrivateEventHandler} from "~/auth-event-handler";

export default definePrivateEventHandler(async (event, {auth}) => {
    const query = getQuery(event);

    const andQueries = buildFindAllQuery(query, auth);
    const articlesCount = await usePrisma().article.count({
        where: {
            AND: andQueries,
        },
    });

    const articles = await usePrisma().article.findMany({
        omit: {
            body: true,
            updatedAt: true,
        },
        where: { AND: andQueries },
        orderBy: {
            createdAt: 'desc',
        },
        skip: Number(query.offset) || 0,
        take: Number(query.limit) || 10,
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
}, {requireAuth: false});

const buildFindAllQuery = (query: any, auth: {id: number} | undefined) => {
    const queries: any = [];
    const orAuthorQuery = [];
    const andAuthorQuery = [];

    orAuthorQuery.push({
        demo: {
            equals: true,
        },
    });

    if (auth?.id) {
        orAuthorQuery.push({
            id: {
                equals: auth?.id,
            },
        });
    }

    if ('author' in query) {
        andAuthorQuery.push({
            username: {
                equals: query.author,
            },
        });
    }

    const authorQuery = {
        author: {
            OR: orAuthorQuery,
            AND: andAuthorQuery,
        },
    };

    queries.push(authorQuery);

    if ('tag' in query) {
        queries.push({
            tagList: {
                some: {
                    name: query.tag,
                },
            },
        });
    }

    if ('favorited' in query) {
        queries.push({
            favoritedBy: {
                some: {
                    username: {
                        equals: query.favorited,
                    },
                },
            },
        });
    }

    return queries;
};
