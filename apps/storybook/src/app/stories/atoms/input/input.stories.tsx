import { inputCodeSample } from './input.utils';

export default {
  title: 'Atoms/Input',
};

export const InputDefault = {
  render: () => inputCodeSample(),
  name: 'input',
};

export const InputFocus = {
  render: () => inputCodeSample(),
  name: 'input (focus)',

  parameters: {
    pseudo: { focus: true },
  },
};
