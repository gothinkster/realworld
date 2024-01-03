import prisma from '../../prisma/prisma-client';
import profileMapper from '../utils/profile.utils';
import HttpException from '../models/http-exception.model';

export const getProfile = async (usernamePayload: string, id?: number) => {
  const profile = await prisma.user.findUnique({
    where: {
      username: usernamePayload,
    },
    include: {
      followedBy: true,
    },
  });

  if (!profile) {
    throw new HttpException(404, {});
  }

  return profileMapper(profile, id);
};

export const followUser = async (usernamePayload: string, id: number) => {
  const profile = await prisma.user.update({
    where: {
      username: usernamePayload,
    },
    data: {
      followedBy: {
        connect: {
          id,
        },
      },
    },
    include: {
      followedBy: true,
    },
  });

  return profileMapper(profile, id);
};

export const unfollowUser = async (usernamePayload: string, id: number) => {
  const profile = await prisma.user.update({
    where: {
      username: usernamePayload,
    },
    data: {
      followedBy: {
        disconnect: {
          id,
        },
      },
    },
    include: {
      followedBy: true,
    },
  });

  return profileMapper(profile, id);
};
