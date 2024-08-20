import { PrismaClient } from '@prisma/client';

let _prisma;

export const usePrisma = () => {
    if (!_prisma) {
        _prisma = new PrismaClient();
    }
    return _prisma;
}
