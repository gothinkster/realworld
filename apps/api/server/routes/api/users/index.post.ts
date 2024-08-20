export default defineEventHandler(async (event) => {
    const {user} = await readBody(event);
    console.log({user})

    const email = user.email?.trim();
    const username = user.username?.trim();
    const password = user.password?.trim();
    const {bio, image, demo} = user;

    if (!email) {
        throw createError({
            status: 422,
            statusMessage: 'Unprocessable Content',
            data: {errors: {email: ["can't be blank"]}}
        });
    }

    if (!username) {
        throw createError({
            status: 422,
            statusMessage: 'Unprocessable Content',
            data: {errors: {username: ["can't be blank"]}}
        });
    }

    if (!password) {
        throw createError({
            status: 422,
            statusMessage: 'Unprocessable Content',
            data: {errors: {password: ["can't be blank"]}}
        });
    }

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
        return createError({
            status: 422,
            statusMessage: 'Unprocessable Content',
            data: {
                errors: {
                    ...(existingUserByEmail ? {email: ['has already been taken']} : {}),
                    ...(existingUserByUsername ? {username: ['has already been taken']} : {}),
                },
            },
        });
    }

    const hashedPassword = await useHashPassword(password);

    const newUser = await usePrisma().user.create({
        data: {
            username,
            email,
            password: hashedPassword,
            ...(image ? {image} : {}),
            ...(bio ? {bio} : {}),
            ...(demo ? {demo} : {})
        },
        select: {
            id: true,
            email: true,
            username: true,
            bio: true,
            image: true
        }
    });

    return {
        ...newUser,
        token: useGenerateToken(newUser.id)
    };
});

