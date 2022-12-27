import { codeSample, linkDocs } from './link.utils';

export default {
  title: 'Atoms/Link',
};

export const Link = () => codeSample();
Link.storyName = 'link (default)';
Link.parameters = {
  ...linkDocs(),
};

export const LinkHover = () => codeSample();
LinkHover.storyName = 'link (hover)';
LinkHover.parameters = {
  pseudo: { hover: true },
  ...linkDocs(),
};
