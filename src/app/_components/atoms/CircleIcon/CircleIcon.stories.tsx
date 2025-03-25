import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CircleIcon, { CircleIconProps } from './CircleIcon';

export default {
  title: 'Components/CircleIcon',
  component: CircleIcon,
  argTypes: {
    type: {
      options: ['dark', 'bright'],
      control: { type: 'radio' },
      description: '원 배경 색상 지정 (dark | bright)',
    },
    className: { control: 'text', description: '추가적인 클래스 이름' },
  },
} as Meta<typeof CircleIcon>;

const Template: StoryFn<typeof CircleIcon> = (args: CircleIconProps) => (
  <CircleIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'bright',
  children: <img src="/icon/logo_icon.svg" alt="icon" />,
  className: '',
};
