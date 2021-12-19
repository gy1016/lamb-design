import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AutoComplete } from './autoComplete';

export default {
  title: 'Example/AutoComplete',
  component: AutoComplete,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AutoComplete>;

const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then((res) => res.json())
    .then(({ items }) => {
      console.log(items);
      return items
        .slice(0, 10)
        .map((item: any) => ({ value: item.login, ...item }));
    });
};

const Template: ComponentStory<typeof AutoComplete> = (args) => (
  <AutoComplete {...args} />
);

export const AsyncSearch = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AsyncSearch.args = {
  fetchSuggestions: handleFetch
};
