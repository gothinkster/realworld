import { ComponentMeta, ComponentStory } from '@storybook/react';
import NxWelcome from '../nx-welcome';
import { ComponentProps } from 'react';

export default {
  title: 'Demo',
  component: NxWelcome,
} as ComponentMeta<typeof NxWelcome>;

const Template: ComponentStory<typeof NxWelcome> = (args: ComponentProps<typeof NxWelcome>) => (
  <NxWelcome {...args} />
);
export const basic = Template.bind({});
