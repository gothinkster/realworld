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
};

// Primary button stories

export const Primary = () => primaryButton;
Primary.storyName = 'primary (default)';
Primary.parameters = {
  ...primaryButtonDocs,
};

export const PrimaryHover = () => primaryButton;
PrimaryHover.storyName = 'primary (hover)';
PrimaryHover.parameters = {
  pseudo: { hover: true },
  ...primaryButtonDocs,
};

export const PrimaryFocus = () => primaryButton;
PrimaryFocus.storyName = 'primary (focus)';
PrimaryFocus.parameters = {
  pseudo: { focus: true },
  ...primaryButtonDocs,
};

// Secondary button stories

export const Secondary = () => secondaryButton;
Secondary.storyName = 'secondary (default)';
Secondary.parameters = {
  ...secondaryButtonDocs,
};

export const SecondaryHover = () => secondaryButton;
SecondaryHover.storyName = 'secondary (hover)';
SecondaryHover.parameters = {
  pseudo: { hover: true },
  ...secondaryButtonDocs,
};

export const SecondaryFocus = () => secondaryButton;
SecondaryFocus.storyName = 'secondary (focus)';
SecondaryFocus.parameters = {
  pseudo: { focus: true },
  ...secondaryButtonDocs,
};

// Warn button stories

export const Warn = () => warnButton;
Warn.storyName = 'warn (default)';
Warn.parameters = {
  ...warnButtonDocs,
};

export const WarnHover = () => warnButton;
WarnHover.storyName = 'warn (hover)';
WarnHover.parameters = {
  pseudo: { hover: true },
  ...warnButtonDocs,
};

export const WarnFocus = () => warnButton;
WarnFocus.storyName = 'warn (focus)';
WarnFocus.parameters = {
  pseudo: { focus: true },
  ...warnButtonDocs,
};
