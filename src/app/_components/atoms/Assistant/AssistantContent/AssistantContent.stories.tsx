import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import AssistantContent, { AssistantContentProps } from './AssistantContent';

export default {
  title: 'Components/Assistant/Content',
  component: AssistantContent,
  argTypes: {
    title: {
      control: 'text',
      description: '어시스턴트 요소 내 제안할 제목',
    },
    desc: {
      control: 'text',
      description: '어시스턴트 요소 내 제안할 내용',
    },
    className: {
      control: 'text',
      description: '컴포넌트로 생성할 요소의 클래스명',
    },
  },
} as Meta<typeof AssistantContent>;

const Template: StoryFn<typeof AssistantContent> = (
  args: AssistantContentProps,
) => <AssistantContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '제안할 한 컨텍스트의 제목',
  desc: '제안할 한 컨텍스트의 상세 설명',
  className: '',
};
