import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import LoginButton, { LoginButtonProps } from './LoginButton';
import { AuthType } from '@/app/_constant';

export default {
  title: 'Components/LoginButton',
  component: LoginButton,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: [AuthType.KAKAO, AuthType.GOOGLE],
      description: '로그인 타입 (KAKAO 또는 GOOGLE)',
    },
    onClick: { action: 'clicked', description: '클릭 이벤트 핸들러' },
    className: { control: 'text', description: '추가 클래스 이름' },
  },
} as Meta<typeof LoginButton>;

const Template: StoryFn<LoginButtonProps> = (args) => <LoginButton {...args} />;

export const Kakao = Template.bind({});
Kakao.args = {
  type: AuthType.KAKAO,
  className: '',
};

export const Google = Template.bind({});
Google.args = {
  type: AuthType.GOOGLE,
  className: '',
};
