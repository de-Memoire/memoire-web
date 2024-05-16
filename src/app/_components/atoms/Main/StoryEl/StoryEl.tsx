import { useCallback } from 'react';
import { Story } from '@/app/_constant/type/model';
import { textType } from './StoryEl.css';
import * as styles from './StoryEl.css';

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
  story: { cover_image_url, title, pen_name, content },
  onClick,
  className,
}: StoryElProps) => (
  <div className={`${styles.wrap} ${className}`} onClick={onClick}>
    <div className={styles.imgContainer}>
      <img
        src={
          cover_image_url ||
          `/assets/main/${[1, 2, 3, 4][Math.floor(Math.random() * 4)]}.png`
        }
      />
    </div>
    <div className={styles.textType.title}>{title}</div>
    <div className={styles.textType.author}>{pen_name}</div>
    <div className={`${styles.textType.content} ellipse`}>{content}</div>
  </div>
);

export default StoryEl;
