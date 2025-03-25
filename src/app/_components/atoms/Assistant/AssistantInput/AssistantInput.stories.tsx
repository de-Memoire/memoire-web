import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import AssistantInput, { AssistantInputProps } from './AssistantInput';

export default {
  title: 'Components/Assistant/Input',
  component: AssistantInput,
  argTypes: {
    placeholder: {
      control: 'text',
      description: '어시스턴트 요소 내 인풋 placeholder',
    },
    onTextChange: {
      action: 'text changed',
      description: '어시스턴트 요소 내 인풋 체인지 핸들러',
    },
    className: {
      control: 'text',
      description: '컴포넌트로 생성할 요소의 클래스명',
    },
  },
} as Meta<typeof AssistantInput>;

const Template: StoryFn<typeof AssistantInput> = (
  args: AssistantInputProps,
) => <AssistantInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Default placeholder',
  onTextChange: (text) => console.log(text),
  className: '',
};
