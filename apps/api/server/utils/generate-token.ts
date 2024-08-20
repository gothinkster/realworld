import jwt from 'jsonwebtoken';

export const useGenerateToken = (id: number): string =>
    jwt.sign({user: {id}}, process.env.JWT_SECRET, {
        expiresIn: '60d',
    });
