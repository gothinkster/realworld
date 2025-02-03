import {z} from "zod";

const userSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email("This is not a valid email"),
    password: z.string().min(8).max(20),
});

export default defineEventHandler(async (event) => {
    const {username, email, password} = await readValidatedBody(event, userSchema.parse);

    const existingUser = await usePrisma().user.findUnique({
        where: {
            OR: [
                { email },
                { username },
            ]
        },
        select: {
            id: true,
        },
    });

    if (existingUser) {
        return createError({
            status: 422,
            statusMessage: 'Unprocessable Content',
            data: "User already exists"
        });
    }

    const hashedPassword = await useHashPassword(password);

    const newUser = await usePrisma().user.create({
        data: {
            username,
            email,
            password: hashedPassword
        },
        select: {
            id: true,
            email: true,
            username: true,
            image: true
        }
    });

    setCookie(event, 'auth_token', useGenerateToken(newUser.id));
    setResponseStatus(event, 201);

    return {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        image: newUser.image,
    }
});

