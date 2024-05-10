import React from 'react';
import { CircleIcon } from '../../atoms';
import * as styles from './FeedbackListEl.css';
import FeedbackIcon from '/public/icon/feedback-white.svg';

export interface FeedbackListElProps {
  /** 각 피드백 요소 내용 */
  content: string;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 글에 남겨질 피드백 요소 컴포넌트
 */
export const FeedbackListEl = ({ content, className }: FeedbackListElProps) => {
  return (
    <div className={`${styles.wrap} ${className}`}>
      <CircleIcon type="bright">
        <FeedbackIcon />
      </CircleIcon>
      <div className={styles.title}>{content}</div>
    </div>
  );
};

export default FeedbackListEl;
