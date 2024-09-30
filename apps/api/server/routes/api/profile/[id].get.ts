export default defineEventHandler(async (event) =>  {
    const id = getRouterParam(event, 'id');

    const profile = await usePrisma().profile.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            username: true,
            bio: true,
            image: true,
        }
    })
});
