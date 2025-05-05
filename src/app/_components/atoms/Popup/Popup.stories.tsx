import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Popup, { PopupProps } from './Popup';

export default {
  title: 'Components/Popup',
  component: Popup,
  argTypes: {
    onClose: {
      action: 'closed',
      description: '닫기 버튼 클릭 핸들러',
    },
    className: {
      control: 'text',
      description: '추가 클래스 이름',
    },
    children: {
      control: 'text',
      description: '팝업 내부에 들어갈 콘텐츠',
    },
  },
} as Meta<typeof Popup>;

const Template: StoryFn<PopupProps> = (args) => <Popup {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div style={{ background: '#eee', padding: '10px' }}>
      <p>
        컴포넌트 ELEMENT를 작성하세요.
        <br />
        아무것도 지정되어 있지 않아 자유롭게 구성할 수 있어요.
        <br />
        해당 영역의 높이를 지정해주세요. 팝업을 감싸고 있는 고정 높이가 없어요.
      </p>
    </div>
  ),
};
