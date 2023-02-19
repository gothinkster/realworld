import { linkCodeSample, linkSourceDocs } from './link.utils';

export default {
  title: 'Atoms/Link',
  parameters: {
    layout: 'centered',
  },
};

export const Link = {
  render: () => linkCodeSample(),
  name: 'link (default)',

  parameters: {
    ...linkSourceDocs(),
  },
};

export const LinkHover = {
  render: () => linkCodeSample(),
  name: 'link (hover)',

  parameters: {
    pseudo: { hover: true },
    ...linkSourceDocs(),
  },
};
