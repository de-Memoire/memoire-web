import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StoryTextArea, { StoryTextAreaProps } from './StoryTextArea';

export default {
  title: 'Components/StoryTextArea',
  argTypes: {
    placeholder: { control: 'text', description: 'textarea placeholder' },
    onTextChange: { action: 'changed', description: '텍스트 체인지 핸들러' },
    className: { control: 'text', description: '추가적인 클래스 이름' },
  },
} as Meta<typeof StoryTextArea>;

const Template: StoryFn<typeof StoryTextArea> = (args: StoryTextAreaProps) => (
  <StoryTextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Default placeholder',
  onTextChange: () => console.log('changed text...'),
  className: '',
};
