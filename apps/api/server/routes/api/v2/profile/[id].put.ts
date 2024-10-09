import {z} from "zod";

const profileSchema = z.object({
    image: z.string().url().optional(),
    bio: z.string().optional(),
});

export default defineEventHandler(async (event) => {
    useCheckAuth('required');

    const id = getRouterParam(event, 'id');
    const body = readValidatedBody(event, profileSchema.parse);

    const updatedProfile = await usePrisma().update({
        where: {
            id
        },
        select: {
            id: true,
            username: true,
            bio: true,
            image: true,
        }
    });

    return updatedProfile;
});
