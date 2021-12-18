import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>按钮</Button>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  btnType: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  btnType: 'primary',
  size: 'lg'
};

export const Large = Template.bind({});
Large.args = {
  btnType: 'primary',
  size: 'sm'
};
