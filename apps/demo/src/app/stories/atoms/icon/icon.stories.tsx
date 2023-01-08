import { iconSourceDocs } from './icon.utils';
import favorite from '../../assets/favorite.svg';
import favoriteFilled from '../../assets/favorite-filled.svg';

export default {
  title: 'Atoms/Icon',
  parameters: {
    layout: 'centered',
  },
};

export const IconDefault = () => <img src={favorite} alt="" />;
IconDefault.storyName = 'icon';
IconDefault.parameters = {
  ...iconSourceDocs({ active: false, filled: false }),
};

export const IconActive = () => <img className="rl-icon-active" src={favorite} alt="" />;
IconActive.storyName = 'icon (active)';
IconActive.parameters = {
  ...iconSourceDocs({ active: true, filled: false }),
};

export const IconFilled = () => <img src={favoriteFilled} alt="" />;
IconFilled.storyName = 'icon filled';
IconFilled.parameters = {
  ...iconSourceDocs({ active: false, filled: true }),
};

export const IconFilledActive = () => (
  <img className="rl-icon-active" src={favoriteFilled} alt="" />
);
IconFilledActive.storyName = 'icon filled (active)';
IconFilledActive.parameters = {
  ...iconSourceDocs({ active: true, filled: true }),
};
