import {definePrivateEventHandler} from "~/auth-event-handler";

export default definePrivateEventHandler(async (event, {auth}) => {
    const slug = getRouterParam(event, 'slug');

    const queries = [];

    queries.push({
        author: {
            demo: true,
        },
    });

    if (auth?.id) {
        queries.push({
            author: {
                id: auth.id,
            },
        });
    }

    const comments = await usePrisma().article.findUnique({
        where: {
            slug,
        },
        include: {
            comments: {
                where: {
                    OR: queries,
                },
                select: {
                    id: true,
                    createdAt: true,
                    updatedAt: true,
                    body: true,
                    author: {
                        select: {
                            username: true,
                            bio: true,
                            image: true,
                            followedBy: true,
                        },
                    },
                },
            },
        },
    });

    const result = comments?.comments.map((comment: any) => ({
        ...comment,
        author: {
            username: comment.author.username,
            bio: comment.author.bio,
            image: comment.author.image,
            following: comment.author.followedBy.some((follow: any) => follow.id === auth.id),
        },
    }));

    return {comments: result};
}, {requireAuth: false});
