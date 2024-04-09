import { useCallback } from 'react';
import { textType } from './StoryEl.css';
import * as styles from './StoryEl.css';
import { Story } from '@/app/_data/storydummy';

export interface StoryElProps {
  /** 스토리 내용 */
  story: Story;
  /** 스토리 클릭 핸들러 */
  onClick?: () => void;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 메인에서 사용할 스토리 요소 컴포넌트
 */
const StoryEl = ({
  story: { img, title, author, content },
  onClick,
  className,
}: StoryElProps) => {
  return (
    <div className={`${styles.wrap} ${className}`} onClick={onClick}>
      <div className={styles.imgContainer}>
        <img src={img} />
      </div>
      <div className={styles.textType.title}>{title}</div>
      <div className={styles.textType.author}>{author}</div>
      <div className={`${styles.textType.content} ellipse`}>{content}</div>
    </div>
  );
};

export default StoryEl;
