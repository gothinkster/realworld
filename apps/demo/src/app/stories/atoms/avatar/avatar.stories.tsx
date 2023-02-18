import { avatarSourceDocs } from './avatar.utils';

export default {
  title: 'Atoms/Avatar',
  parameters: {
    layout: 'centered',
  },
};

export const AvatarDefault = () => <img className="rl-avatar" src="avatar.png" alt="user avatar" />;
AvatarDefault.storyName = 'default';
AvatarDefault.parameters = {
  ...avatarSourceDocs({ size: undefined }),
};

export const AvatarSmall = () => (
  <img className="rl-avatar-sm" src="avatar.png" alt="user avatar" />
);
AvatarSmall.storyName = 'small';
AvatarSmall.parameters = {
  ...avatarSourceDocs({ size: 'sm' }),
};

export const AvatarLarge = () => (
  <img className="rl-avatar-lg" src="avatar.png" alt="user avatar" />
);
AvatarLarge.storyName = 'large';
AvatarLarge.parameters = {
  ...avatarSourceDocs({ size: 'lg' }),
};

export const AvatarXLarge = () => (
  <img className="rl-avatar-xl" src="avatar.png" alt="user avatar" />
);
AvatarXLarge.storyName = 'x large';
AvatarXLarge.parameters = {
  ...avatarSourceDocs({ size: 'xl' }),
};

export const AvatarXXLarge = () => (
  <img className="rl-avatar-xxl" src="avatar.png" alt="user avatar" />
);
AvatarXXLarge.storyName = 'xx large';
AvatarXXLarge.parameters = {
  ...avatarSourceDocs({ size: 'xxl' }),
};
