import HttpException from "~/models/http-exception.model";
import {default as bcrypt} from 'bcryptjs';

export default defineEventHandler(async (event) => {
    const {user} = await readBody(event);

    const email = user.email?.trim();
    const username = user.username?.trim();
    const password = user.password?.trim();
    const {image, bio, demo} = user;

    if (!email) {
        throw new HttpException(422, {errors: {email: ["can't be blank"]}});
    }

    if (!username) {
        throw new HttpException(422, {errors: {username: ["can't be blank"]}});
    }

    if (!password) {
        throw new HttpException(422, {errors: {password: ["can't be blank"]}});
    }

    await checkUserUniqueness(email, username);

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await usePrisma().user.create({
        data: {
            username,
            email,
            password: hashedPassword,
            ...(image ? {image} : {}),
            ...(bio ? {bio} : {}),
            ...(demo ? {demo} : {}),
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
            ...createdUser,
            token: useGenerateToken(createdUser.id),
        }
    };
});

const checkUserUniqueness = async (email: string, username: string) => {
    const existingUserByEmail = await usePrisma().user.findUnique({
        where: {
            email,
        },
        select: {
            id: true,
        },
    });

    const existingUserByUsername = await usePrisma().user.findUnique({
        where: {
            username,
        },
        select: {
            id: true,
        },
    });

    if (existingUserByEmail || existingUserByUsername) {
        throw new HttpException(422, {
            errors: {
                ...(existingUserByEmail ? {email: ['has already been taken']} : {}),
                ...(existingUserByUsername ? {username: ['has already been taken']} : {}),
            },
        });
    }
};
