'use client';

import * as styles from './StyledList.css';
import StyledListEl from '../../atoms/StyledListEl';
import { useRouter } from 'next/navigation';
import { Memo, Story, Sentence, User } from '@/app/userApi/common/type';
import { MemoResponse } from '@/app/userApi/getMemo';
import { StoryType } from '@/app/_constant/story';

export interface ServiceItem {
  icon: JSX.Element;
  onClick?: (content: string) => void;
}

export interface StyledListProps {
  /** 문장 내용 데이터 */
  data: Sentence[] | Story[] | Memo[] | User[];
  /** 제공할 서비스 아이템 배열 */
  service?: ServiceItem[];
  /** 리스트 아이템 클릭 핸들러 */
  onClick?: (content: Sentence | Story | Memo | User) => void;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 기본 리스트 컴포넌트
 */
const StyledList = ({ data, onClick, service, className }: StyledListProps) => {
  return (
    <div className={`${styles.wrap} scroll ${className}`}>
      {data.map((el, index) => (
        <StyledListEl
          key={index}
          type={'type' in el ? (el.type as StoryType) : StoryType.ESSAY}
          service={service?.map((item) => ({
            ...item,
            onClick: () => item.onClick && item.onClick(el.content),
          }))}
          content={{
            content: el.content,
            author: 'author' in el ? el.author : '',
            date: el.date,
            id: el.id,
          }}
          onClick={() => onClick && onClick(el)}
        />
      ))}
    </div>
  );
};

export default StyledList;
