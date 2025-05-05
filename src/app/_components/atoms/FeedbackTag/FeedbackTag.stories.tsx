import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FeedbackTag, { FeedbackTagProps } from './FeedbackTag';

export default {
  title: 'Components/FeedbackTag',
  component: FeedbackTag,
  argTypes: {
    text: {
      control: 'text',
      description: '피드백 요소 내 텍스트',
      defaultValue: '피드백 태그',
    },
    isSelected: {
      control: 'boolean',
      description: '선택된 상태 여부',
      defaultValue: false,
    },
    onSelect: {
      action: 'tag selected',
      description: '태그 선택 시 콜백 함수',
    },
    className: {
      control: 'text',
      description: '컴포넌트의 추가 클래스명',
    },
  },
} as Meta<typeof FeedbackTag>;

const Template: StoryFn<FeedbackTagProps> = (args) => <FeedbackTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '피드백 태그',
  isSelected: false,
};
