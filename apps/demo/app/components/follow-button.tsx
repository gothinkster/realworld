'use client';

import { useContext, useState } from 'react';
import { followUser, unfollowUser } from '../services/profile.service';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../auth/auth.context';

const FOLLOWING_CLASS = 'btn btn-sm action-btn btn-secondary';
const NOT_FOLLOWING_CLASS = 'btn btn-sm action-btn btn-outline-secondary';

interface FollowButtonProps {
  username: string;
  following: boolean;
}
export default function FollowButton({ username, following }: FollowButtonProps) {
  console.log('follow button', following);
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [isFollowing, setIsFollowing] = useState(following);
  const [isLoading, setIsLoading] = useState(false);

  async function handleFollow() {
    if (!user) {
      router.push('/register');
      return;
    }

    setIsLoading(true);

    const promise = isFollowing ? unfollowUser : followUser;
    const updatedProfile = await promise(username);
    setIsFollowing(updatedProfile.following);
    setIsLoading(false);
  }
  return (
    <button
      className={isFollowing ? FOLLOWING_CLASS : NOT_FOLLOWING_CLASS}
      onClick={handleFollow}
      disabled={isLoading}
    >
      <i className="ion-plus-round"></i>
      &nbsp; {isFollowing ? 'Unfollow' : 'Follow'} {username}
    </button>
  );
}
