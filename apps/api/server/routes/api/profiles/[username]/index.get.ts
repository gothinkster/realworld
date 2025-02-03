import HttpException from "~/models/http-exception.model";
import profileMapper from "~/utils/profile.utils";
import {definePrivateEventHandler} from "~/auth-event-handler";

export default definePrivateEventHandler(async (event, {auth}) => {
    const username = getRouterParam(event, 'username');

    const profile = await usePrisma().user.findUnique({
        where: {
            username,
        },
        include: {
            followedBy: true,
        },
    });

    if (!profile) {
        throw new HttpException(404, {});
    }

    return {profile: profileMapper(profile, auth.id)};
}, {requireAuth: false});
