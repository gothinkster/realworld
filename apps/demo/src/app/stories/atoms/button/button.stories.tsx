import {
  primaryButton,
  primaryButtonDocs,
  secondaryButton,
  secondaryButtonDocs,
  warnButton,
  warnButtonDocs,
} from './button.utils';
import { Meta } from '@storybook/react';

export default {
  title: 'Atoms/Button',
  parameters: {
    layout: 'centered',
    previewTabs: {
      'realworld/usage/panel': {
        hidden: true,
      },
    },
  },
} as Meta;

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

export const SecondaryIcon = {
  render: () => (
    <button className="rw-btn-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
        <path d="M720 912H264V432l288-288 32 22q17 12 26 30.5t5 38.5l-1 5-38 192h264q30 0 51 21t21 51v57q0 8-1.5 14.5T906 589L786.93 868.199Q778 888 760 900t-40 12Zm-384-72h384l120-279v-57H488l49-243-201 201v378Zm0-378v378-378Zm-72-30v72H120v336h144v72H48V432h216Z" />
      </svg>{' '}
      <span>Like me</span>
    </button>
  ),
  name: 'secondary (icon)',

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
