import profileMapper from "~/utils/profile.utils";
import {definePrivateEventHandler} from "~/auth-event-handler";

export default definePrivateEventHandler(async (event, {auth}) => {
const username = getRouterParam(event, 'username');

    const profile = await usePrisma().user.update({
        where: {
            username,
        },
        data: {
            followedBy: {
                disconnect: {
                    id: auth.id,
                },
            },
        },
        include: {
            followedBy: true,
        },
    });

    return {profile: profileMapper(profile, auth.id)};
});
