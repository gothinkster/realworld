import {default as jwt} from "jsonwebtoken";

export const useCheckAuth = (mode: 'optional' | 'required') => (event) => {
    // const token = getCookie(event, 'auth_token');
    const header = getHeader(event, 'authorization');
    let token;

    if (
        (header && header.split(' ')[0] === 'Token') ||
        (header && header.split(' ')[0] === 'Bearer')
    ) {
        token = header.split(' ')[1];
    }

    if (!token && mode === 'required') {
        throw createError({
            status: 401,
            statusMessage: 'Unauthorized',
            message: 'Missing authentication token'
        });
    }


    if (token) {
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        if (!verified) {
            throw createError({
                status: 403,
                statusMessage: 'Unauthorized',
                message: 'Invalid authentication token'
            });
        }

        event.context.user = verified.user;
    }
};
