import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StoryTextInput, { StoryTextInputProps } from './StoryTextInput';

export default {
  title: 'Components/StyledTextInput',
  component: StoryTextInput,
  argTypes: {
    placeholder: { control: 'text', description: '인풋의 placeholder' },
    type: {
      options: ['title', 'content', 'author'],
      control: { type: 'radio' },
      description: '인풋의 타입을 선택 (title | content | author)',
    },
    onTextChange: { action: 'changed', description: '텍스트 체인지 핸들러' },
    className: { control: 'text', description: '추가적인 클래스 이름' },
  },
} as Meta<typeof StoryTextInput>;

const Template: StoryFn<typeof StoryTextInput> = (
  args: StoryTextInputProps,
) => <StoryTextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Default placeholder',
  onTextChange: () => console.log('changed text...'),
  type: 'title',
  className: '',
};
