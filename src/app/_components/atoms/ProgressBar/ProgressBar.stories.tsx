import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgressBar, { ProgressBarProps } from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    curr: {
      control: { type: 'number', min: 0 },
      description: '현재 active 단계',
    },
    weight: {
      control: { type: 'number', min: 1 },
      description: '총 단계 수',
    },
    className: {
      control: 'text',
      description: '추가 클래스 이름',
    },
  },
} as Meta<typeof ProgressBar>;

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  curr: 1,
  weight: 3,
};
