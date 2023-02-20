import {
  primaryButton,
  primaryButtonDocs,
  secondaryButton,
  secondaryButtonDocs,
  warnButton,
  warnButtonDocs,
} from './button.utils';

export default {
  title: 'Atoms/Button',
  parameters: {
    layout: 'centered',
  },
};

export const Primary = {
  render: () => primaryButton,
  name: 'primary (default)',

  parameters: {
    ...primaryButtonDocs,
  },
};

export const PrimaryHover = {
  render: () => primaryButton,
  name: 'primary (hover)',

  parameters: {
    pseudo: { hover: true },
    ...primaryButtonDocs,
  },
};

export const PrimaryFocus = {
  render: () => primaryButton,
  name: 'primary (focus)',

  parameters: {
    pseudo: { focus: true },
    ...primaryButtonDocs,
  },
};

export const Secondary = {
  render: () => secondaryButton,
  name: 'secondary (default)',

  parameters: {
    ...secondaryButtonDocs,
  },
};

export const SecondaryHover = {
  render: () => secondaryButton,
  name: 'secondary (hover)',

  parameters: {
    pseudo: { hover: true },
    ...secondaryButtonDocs,
  },
};

export const SecondaryFocus = {
  render: () => secondaryButton,
  name: 'secondary (focus)',

  parameters: {
    pseudo: { focus: true },
    ...secondaryButtonDocs,
  },
};

export const Warn = {
  render: () => warnButton,
  name: 'warn (default)',

  parameters: {
    ...warnButtonDocs,
  },
};

export const WarnHover = {
  render: () => warnButton,
  name: 'warn (hover)',

  parameters: {
    pseudo: { hover: true },
    ...warnButtonDocs,
  },
};

export const WarnFocus = {
  render: () => warnButton,
  name: 'warn (focus)',

  parameters: {
    pseudo: { focus: true },
    ...warnButtonDocs,
  },
};
