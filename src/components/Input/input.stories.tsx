import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  disabled: true
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm'
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg'
};
