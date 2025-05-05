import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Toast, { ToastProps } from './Toast';
import { TEXT_STYLES, COLORS } from '@/app/_constant';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    duration: {
      control: { type: 'number' },
      description: '토스트 표시 시간(ms)',
    },
    children: {
      control: 'text',
      description: '토스트 안에 표시될 텍스트',
    },
    className: {
      control: 'text',
      description: '추가 클래스명',
    },
  },
} as Meta<typeof Toast>;

const Template: StoryFn<ToastProps> = (args) => (
  <div
    style={{
      minHeight: '100px',
      position: 'relative',
    }}
  >
    <Toast {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  duration: 3000,
  children: (
    <div
      style={{
        display: 'flex',
        padding: '20px 40px',
        background: COLORS.grayscale.gray8,
        cursor: 'pointer',
        borderRadius: '10px',
        color: COLORS.grayscale.white,
        whiteSpace: 'pre-line',
        alignItems: 'center',
      }}
    >
      <div>컴포넌트 ELEMENT를 작성하세요</div>
    </div>
  ),
};
