import React from 'react';
import * as styles from './SelectedFeedbackTag.css';
import { FeedbackTag } from '@/app/_components/atoms';
import { FeedbackTagProps } from '@/app/_data/storydummy';

export interface SelectedFeedbackTagListProps {
  /** 선택된 피드백 태그 데이터 */
  selectedFeedbackTagList: FeedbackTagProps[];
  /** 이미 선택된 피드백 요소 판단 flag */
  isSelected?: boolean;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 선택된 피드백 태그가 나열된 컴포넌트
 */
export const SelectedFeedbackTagList = ({
  selectedFeedbackTagList,
  isSelected,
  className,
}: SelectedFeedbackTagListProps) => {
  return (
    <div className={`${styles.wrap} ${className} scroll`}>
      {selectedFeedbackTagList.map((el) => (
        <FeedbackTag key={el.id} text={el.value} isSelected={isSelected} />
      ))}
    </div>
  );
};
export default SelectedFeedbackTagList;
