import React from 'react';
import * as styles from './FeedbackList.css';
import FeedbackListEl from '@/app/_components/molecules/FeedbackListEl';

export interface FeedbackListProps {
  /** 스토리에 달린 피드백 문자열 리스트 */
  contentList?: string[];
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className: string;
}

/**
 * 각 스토리에 달린 스토리 피드백 리스트
 */
export const FeedbackList = ({ contentList, className }: FeedbackListProps) => {
  return (
    <div className={`${styles.wrap} ${className}`}>
      {contentList?.map((item, index) => (
        <FeedbackListEl key={index} content={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
