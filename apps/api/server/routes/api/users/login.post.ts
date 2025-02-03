import HttpException from "~/models/http-exception.model";
import {default as bcrypt} from 'bcryptjs';

export default defineEventHandler(async (event) => {
    const {user} = await readBody(event);

    const email = user.email?.trim();
    const password = user.password?.trim();

    if (!email) {
        throw new HttpException(422, {errors: {email: ["can't be blank"]}});
    }

    if (!password) {
        throw new HttpException(422, {errors: {password: ["can't be blank"]}});
    }

    const foundUser = await usePrisma().user.findUnique({
        where: {
            email,
        },
        select: {
            id: true,
            email: true,
            username: true,
            password: true,
            bio: true,
            image: true,
        },
    });

    if (foundUser) {
        const match = await bcrypt.compare(password, foundUser.password);

        if (match) {
            return {
                user: {
                    email: foundUser.email,
                    username: foundUser.username,
                    bio: foundUser.bio,
                    image: foundUser.image,
                    token: useGenerateToken(foundUser.id),
                }
            };
        }
    }

    throw new HttpException(403, {
        errors: {
            'email or password': ['is invalid'],
        },
    });
});
