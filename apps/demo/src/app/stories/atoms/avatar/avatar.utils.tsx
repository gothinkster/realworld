type Size = 'sm' | 'lg' | 'xl' | 'xxl';

export const avatarSourceDocs = ({ size }: { size: Size | undefined }) => ({
  docs: {
    source: {
      dark: true,
      code: code({ size }),
      language: 'html',
    },
  },
});

const code = ({ size }: { size: Size | undefined }) => {
  const classes = size ? `rl-avatar-${size}` : 'rl-avatar';
  return `<img class="${classes}" src="" alt="user avatar"/>`;
};
