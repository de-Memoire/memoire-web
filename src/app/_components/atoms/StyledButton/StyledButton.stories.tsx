import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StyledButton, { StyledButtonProps } from './StyledButton';

export default {
  title: 'Components/StyledButton',
  component: StyledButton,
  argTypes: {
    text: { control: 'text', description: '버튼에 표시될 텍스트' },
    onClick: { action: 'clicked', description: '클릭 이벤트 핸들러' },
    className: { control: 'text', description: '추가적인 클래스 이름' },
  },
} as Meta<typeof StyledButton>;

const Template: StoryFn<typeof StyledButton> = (args: StyledButtonProps) => (
  <StyledButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Default Button',
  onClick: () => console.log('Button clicked!'),
  className: '',
};
