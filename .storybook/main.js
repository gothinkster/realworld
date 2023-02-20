module.exports = {
  stories: [],
  addons: ['@storybook/addon-interactions', 'storybook-addon-pseudo-states'],
  features: {
    interactionsDebugger: true,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
