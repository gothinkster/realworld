import HttpException from "~/models/http-exception.model";
import {definePrivateEventHandler} from "~/auth-event-handler";

export default definePrivateEventHandler(async (event, {auth}) => {
const slug = getRouterParam(event, 'slug');

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
            message: 'You are not authorized to delete this article',
        });
    }
    await usePrisma().article.delete({
        where: {
            slug,
        },
    });
});
