import React from 'react';
import * as styles from './WriteForm.css';
import Image from 'next/image';

export interface WriteFormProps {
  /** 이미지 관련 요소 */
  image?: {
    /** 이미지 이름 (/assets/***.***) */
    src?: string;
    /** 이미지 alt 요소 */
    alt?: string;
  };
  /** 글쓰기 내용 요소 */
  write: {
    /** 글쓰기 제목 요소 */
    title?: string;
    /** 글쓰기 저자 요소 */
    author?: string;
    /** 글쓰기 내용 요소 */
    content: string;
  };
  /** 시그니처 내용 요소 */
  sign?: {
    /** 시그니처 링크 요소 */
    url?: string;
  };
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 스토리/문장 모두 사용가능한 글쓰기 양식 컴포넌트
 */
export const WriteForm = ({
  image,
  write,
  sign,
  className,
}: WriteFormProps) => {
  return (
    <div className={styles.wrap}>
      {image && image.src && image.alt && (
        <div className={`${styles.imgContainer} ${className}`}>
          <img src={image.src} width={1280} height={300} alt={image.alt} />
        </div>
      )}
      <div className={`${styles.storyContent} ${styles.maxWidth}`}>
        <div className={styles.textType.title}>{write.title}</div>
        <div className={styles.textType.author}>{write.author}</div>
        <div className={styles.textType.content}>{write.content}</div>
      </div>
      {sign && sign.url && (
        <div className={`${styles.maxWidth}`}>
          <img
            className={`${styles.signContent}`}
            src={sign.url}
            alt="signature"
          />
        </div>
      )}
    </div>
  );
};
export default WriteForm;
