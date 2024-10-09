import HttpException from "~/models/http-exception.model";
import {definePrivateEventHandler} from "~/auth-event-handler";

export default definePrivateEventHandler(async (event, {auth}) => {
    const id = Number(getRouterParam(event, 'id'));

    const comment = await usePrisma().comment.findFirst({
        where: {
            id,
            author: {
                id: auth.id,
            },
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

    if (!comment) {
        throw new HttpException(404, {});
    }

    if (comment.author.id !== auth.id) {
        throw new HttpException(403, {
            message: 'You are not authorized to delete this comment',
        });
    }

    await usePrisma().comment.delete({
        where: {
            id,
        },
    });
});
