'use client';

import React, { useState, useEffect } from 'react';
import { wrap } from './FeedbackTag.css';

export interface FeedbackTagProps {
  /** 피드백 요소 내 들어갈 텍스트 */
  text: string;
  /** 피드백 요소 클릭 콜백 함수 */
  onSelect?: (selectedTag: string) => void;
  /** 이미 선택된 피드백 요소 판단 flag */
  isSelected?: boolean;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 텍스트 지정 가능한 피드백 태그 요소 컴포넌트
 */
const FeedbackTag = ({
  text,
  className,
  isSelected = false,
  onSelect,
}: FeedbackTagProps) => {
  const [selected, setSelected] = useState<boolean>(isSelected);

  useEffect(() => {
    setSelected(isSelected);
  }, [isSelected]);

  const handleClick = () => {
    if (onSelect) {
      setSelected(!selected);
      onSelect(text);
    }
  };

  return (
    <div
      className={`${wrap[`${selected}`]} ${className}`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default FeedbackTag;
