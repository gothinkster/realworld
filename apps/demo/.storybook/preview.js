export const parameters = {
  // storybook background color
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#000000',
      },
      {
        name: 'realworld',
        value: 'radial-gradient(#cf68ca,#9c479c)',
      },
    ],
  },
  previewTabs: {
    'storybook/story/panel': {
      hidden: true,
    },
    'storybook/canvas/panel': {
      hidden: true,
    },
    'realworld/usage/panel': {
      hidden: false,
    },
  },
};
