import {default as jwt} from "jsonwebtoken";

export interface PrivateContext {
    auth: {
        id: number;
    }
}

export function definePrivateEventHandler<T>(
    handler: (event: H3Event, cxt: PrivateContext) => T,
    options: { requireAuth: boolean } = {requireAuth: true}
) {
    return defineEventHandler(async (event) => {
        // you can check request hmac, user, token, etc..
        const header = getHeader(event, 'authorization');
        let token;

        if (
            (header && header.split(' ')[0] === 'Token') ||
            (header && header.split(' ')[0] === 'Bearer')
        ) {
            token = header.split(' ')[1];
        }

        if (options.requireAuth && !token) {
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

            return handler(event, {
                auth: {
                    id: Number(verified.user.id)
                },
            })
        } else {
            return handler(event, {
                auth: null,
            })
        }


    })
}
