import jwt from "jsonwebtoken";
import {LoginPayload} from "~/models/login-payload.model";

export const useCheckAuth = (mode: 'optional' | 'required') => (event) => {
    const {authorization} = getHeaders(event);
    const token = authorization?.split(' ')[1];

    if (!token && mode === 'required') {
        throw createError({
            status: 401,
            statusMessage: 'Unauthorized',
            message: 'Missing authentication token'
        });
    }

    if (token) {
        const verified = jwt.verify(token, process.env.JWT_SECRET) as LoginPayload;

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
