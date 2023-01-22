import favorite from '../../assets/favorite.svg';
import favoriteFilled from '../../assets/favorite-filled.svg';
export const iconCodeSample = ({ active, filled }: { active: boolean; filled: boolean }) => {
  const className = `${active ? 'rl-icon-active' : ''}`;
  const src = filled ? favoriteFilled : favorite;
  return <img className={className} src={src} alt=""/>
}
export const iconSourceDocs = ({ active, filled }: { active: boolean; filled: boolean }) => ({
  docs: {
    source: {
      dark: true,
      code: iconCode({ active, filled }),
      language: 'html',
    },
  },
});

export const iconCode = ({ active, filled }: { active: boolean; filled: boolean }) =>
  `<img ${active ? 'class="rl-icon-active" ' : ''}src="favorite${
    filled ? '-filled' : ''
  }.svg" alt=""/>`;
