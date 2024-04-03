import React from 'react';
import * as styles from './FeedbackTagList.css';
import { FeedbackTag } from '../../../atoms';

export interface FeedbackTagListProps {
  /** 피드백 태그 데이터 */
  feedbackTagList: string[];
  /** 피드백 요소 클릭 콜백 함수 */
  onSelect: (selectedTag: string) => void;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 피드백 태그가 나열된 컴포넌트
 */
export const FeedbackTagList = ({
  feedbackTagList,
  onSelect,
  className,
}: FeedbackTagListProps) => {
  return (
    <div className={`${styles.wrap} ${className}`}>
      {feedbackTagList.map((el) => (
        <FeedbackTag key={el} text={el} onSelect={() => onSelect(el)} />
      ))}
    </div>
  );
};
export default FeedbackTagList;
