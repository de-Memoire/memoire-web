import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tab, { TabProps } from './Tab';

export default {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {
    tab: {
      control: { type: 'object' },
      description: '탭에 표시할 문자열 배열',
    },
    className: {
      control: 'text',
      description: '추가 클래스명',
    },
  },
} as Meta<typeof Tab>;

const Template: StoryFn<TabProps> = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Tab
      {...args}
      activeTabIdx={activeIndex}
      onTabClick={(index) => {
        setActiveIndex(index);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  tab: ['탭1', '탭2', '탭3'],
};
