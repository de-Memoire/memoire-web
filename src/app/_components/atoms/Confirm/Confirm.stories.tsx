import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Confirm, { ConfirmProps } from './Confirm';

export default {
  title: 'Components/Confirm',
  component: Confirm,
  argTypes: {
    onLeft: {
      description: '옵션1 이벤트 핸들러',
    },
    onRight: {
      description: '옵션2 이벤트 핸들러',
    },
    onClose: {
      description: '닫기 버튼 클릭 핸들러',
    },
    children: {
      control: 'text',
      description: '팝업 안에 렌더링할 자식 콘텐츠',
    },
    className: {
      control: 'text',
      description: '컴포넌트의 추가 클래스명',
    },
  },
} as Meta<typeof Confirm>;

const Template: StoryFn<typeof Confirm> = (args: ConfirmProps) => (
  <Confirm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <span>컴포넌트 ELEMENT를 작성하세요</span>,
  onLeft: {
    text: '좌측 옵션 텍스트',
    onClick: () => console.log('왼쪽 버튼 클릭'),
  },
  onRight: {
    text: '우측 옵션 텍스트',
    onClick: () => console.log('오른쪽 버튼 클릭'),
  },
  onClose: () => console.log('닫기 버튼 클릭'),
  className: '',
};
