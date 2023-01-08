import { inputCodeSample } from './input.utils';

export default {
  title: 'Atoms/Input',
};

export const InputDefault = () => inputCodeSample();
InputDefault.storyName = 'input';

export const InputFocus = () => inputCodeSample();
InputFocus.storyName = 'input (focus)';
InputFocus.parameters = {
  pseudo: { focus: true },
};
