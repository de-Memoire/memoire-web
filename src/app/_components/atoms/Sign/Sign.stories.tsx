import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Sign from './Sign';

export default {
  title: 'Components/Sign',
  component: Sign,
  argTypes: {
    className: {
      control: 'text',
      description: '추가 클래스 이름',
    },
  },
} as Meta<typeof Sign>;

const Template: StoryFn = (args) => {
  const [imageURL, setImageURL] = useState<string>('');

  return (
    <div style={{ display: 'flex' }}>
      <Sign {...args} setImageURL={setImageURL} />
      {imageURL && (
        <div>
          <p>사용 예시</p>
          <img
            src={imageURL}
            alt="signature"
            style={{ border: '1px solid #ccc' }}
          />
        </div>
      )}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: '',
};
