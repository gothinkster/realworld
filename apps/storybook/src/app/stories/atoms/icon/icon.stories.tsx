import { iconSourceDocs } from './icon.utils';
import favorite from '../../assets/favorite.svg';
import favoriteFilled from '../../assets/favorite-filled.svg';

export default {
  title: 'Atoms/Icon',
  parameters: {
    layout: 'centered',
  },
};

export const IconDefault = {
  render: () => <img src={favorite} alt="" />,
  name: 'icon',

  parameters: {
    ...iconSourceDocs({ active: false, filled: false }),
  },
};

export const IconActive = {
  render: () => <img className="rw-icon-active" src={favorite} alt="" />,
  name: 'icon (active)',

  parameters: {
    ...iconSourceDocs({ active: true, filled: false }),
  },
};

export const IconFilled = {
  render: () => <img src={favoriteFilled} alt="" />,
  name: 'icon filled',

  parameters: {
    ...iconSourceDocs({ active: false, filled: true }),
  },
};

export const IconFilledActive = {
  render: () => <img className="rw-icon-active" src={favoriteFilled} alt="" />,

  name: 'icon filled (active)',

  parameters: {
    ...iconSourceDocs({ active: true, filled: true }),
  },
};
