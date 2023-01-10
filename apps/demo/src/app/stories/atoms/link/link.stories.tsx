import { linkCodeSample, linkSourceDocs } from './link.utils';

export default {
  title: 'Atoms/Link',
  parameters: {
    layout: 'centered',
  },
};

export const Link = () => linkCodeSample();
Link.storyName = 'link (default)';
Link.parameters = {
  ...linkSourceDocs(),
};

export const LinkHover = () => linkCodeSample();
LinkHover.storyName = 'link (hover)';
LinkHover.parameters = {
  pseudo: { hover: true },
  ...linkSourceDocs(),
};
