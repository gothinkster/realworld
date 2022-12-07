import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';

import prisma from '../prisma/prisma-client';
import { PrismaClient } from '@prisma/client';

jest.mock('../prisma/prisma-client', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}));

const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;

beforeEach(() => {
  mockReset(prismaMock);
});

export default prismaMock;
