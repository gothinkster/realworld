import {User} from "~/models/user.model";
import {definePrivateEventHandler} from "~/auth-event-handler";

export default definePrivateEventHandler(async (event, {auth}) => {
    const user = (await usePrisma().user.findUnique({
        where: {
            id: auth.id,
        },
        select: {
            id: true,
            email: true,
            username: true,
            bio: true,
            image: true,
        },
    })) as User;

    return {
        user: {
            ...user,
            token: useGenerateToken(user.id),
        }
    };
});
