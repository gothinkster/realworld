import {Tag} from "~/models/tag.model";
import {definePrivateEventHandler} from "~/auth-event-handler";

export default definePrivateEventHandler(async (event, {auth}) => {
    const queries = [];
    queries.push({demo: true});

    if (auth) {
        queries.push({
            id: {
                equals: auth.id,
            },
        });
    }

    const tags = await usePrisma().tag.findMany({
        where: {
            articles: {
                some: {
                    author: {
                        OR: queries,
                    },
                },
            },
        },
        select: {
            name: true,
        },
        orderBy: {
            articles: {
                _count: 'desc',
            },
        },
        take: 10,
    });

    return {tags: tags.map((tag: Tag) => tag.name)};
}, {requireAuth: false});
