export const iconSourceDocs = ({ active, filled }: { active: boolean; filled: boolean }) => ({
  docs: {
    source: {
      dark: true,
      code: code({ active, filled }),
      language: 'html',
    },
  },
});

const code = ({ active, filled }: { active: boolean; filled: boolean }) =>
  `<img ${active ? 'class="rl-icon-active" ' : ''}src="favorite${
    filled ? '-filled' : ''
  }.svg" alt=""/>`;
