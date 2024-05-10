import * as styles from './styledListEl.css';
import StoryIcon from '/public/icon/logo_icon.svg';
import SentenceIcon from '/public/icon/sentence_logo.svg';
import { Memo, Story, Sentence } from '@/app/userApi/common/type';
import { writeType } from '@/app/_constant/write';
import CircleIcon from '../CircleIcon';
import { ReactNode } from 'react';
import { StoryType } from '@/app/_constant/story';

export interface styledListElProps {
  type: StoryType;
  /** 제공 서비스 정보 */
  service?: {
    /** 서비스 아이콘 */
    icon: ReactNode;
    /** 서비스 클릭 핸들러 */
    onClick?: () => void;
  }[];
  /** 내용 (Sentence | Story | Memo ) */
  content: Sentence | Story | Memo;
  /** 내용 클릭 핸들러 */
  onClick?: () => void;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 기본 리스트 요소 컴포넌트
 */
const styledListEl = ({
  type,
  content,
  className,
  service,
  onClick,
}: styledListElProps) => {
  return (
    <div className={`${styles.wrap} ${className}`} onClick={onClick}>
      <CircleIcon type="bright">
        {type == StoryType.ESSAY ? <StoryIcon /> : <SentenceIcon />}
      </CircleIcon>
      <div className={styles.content}>
        <div className={`${styles.textType.title} ellipse`}>
          {content.content}
        </div>
        <div className={styles.textType.desc}>
          {'author' in content && <span>{content.author} | </span>}
          <span>{content.date}</span>
        </div>
      </div>
      <div className={styles.service}>
        {service?.map((item, index) => (
          <div key={index} onClick={item.onClick}>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default styledListEl;
