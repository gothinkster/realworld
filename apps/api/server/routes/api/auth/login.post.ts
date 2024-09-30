import {z} from "zod";
import {useDecrypt} from "~/utils/hash-password";

const userSchema = z.object({
    email: z.string().email("This is not a valid email"),
    password: z.string().min(8).max(20),
});

export default defineEventHandler(async (event) => {
    const {email, password} = await readValidatedBody(event, userSchema.parse);

    const user = await usePrisma().user.findUnique({
        where: {
            email,
        },
        select: {
            id: true,
            email: true,
            username: true,
            password: true,
            image: true,
        },
    });

    if (user) {
        const match = await useDecrypt(password, user.password);

        if (match) {
            setCookie(event, 'auth_token', useGenerateToken(user.id), {
                secure: true,
                httpOnly: true,
                sameSite: 'none',
            });

            return {
                email: user.email,
                username: user.username,
                bio: user.bio,
                image: user.image,
            };
        }
    }
});
