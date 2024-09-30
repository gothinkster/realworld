export default defineEventHandler(async (event) => {
    deleteCookie(event, 'auth_token');

    return "Logged out";
});
