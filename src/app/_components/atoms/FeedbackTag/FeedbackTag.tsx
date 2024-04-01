'use client';

import React, { useState } from 'react';
import { wrap } from './FeedbackTag.css';

export interface FeedbackTagProps {
  text: string;
  onClick?: () => void;
}

const FeedbackTag = ({ text, onClick }: FeedbackTagProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={wrap[`${selected}`]}
      onClick={() => {
        setSelected(!selected), onClick;
      }}
    >
      {text}
    </div>
  );
};

export default FeedbackTag;
