import * as bcrypt from 'bcryptjs';
import {definePrivateEventHandler} from "~/auth-event-handler";

export default definePrivateEventHandler(async (event, {auth}) => {
    const {user} = await readBody(event);

    const {email, username, password, image, bio} = user;
    let hashedPassword;

    if (password) {
        hashedPassword = await bcrypt.hash(password, 10);
    }

    const updatedUser = await usePrisma().user.update({
        where: {
            id: auth.id,
        },
        data: {
            ...(email ? {email} : {}),
            ...(username ? {username} : {}),
            ...(password ? {password: hashedPassword} : {}),
            ...(image ? {image} : {}),
            ...(bio ? {bio} : {}),
        },
        select: {
            id: true,
            email: true,
            username: true,
            bio: true,
            image: true,
        },
    });

    return {
        user: {
            ...updatedUser,
            token: useGenerateToken(updatedUser.id),
        }
    };
});
