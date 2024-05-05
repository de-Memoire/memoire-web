'use client';

import * as styles from './StyledList.css';
import StyledListEl from '../../atoms/StyledListEl';
import { useRouter } from 'next/navigation';
import { Memo, Sentence, Story } from '@/app/_data/storydummy';
import { MemoResponse } from '@/app/userApi/getMemo';

export interface ServiceItem {
  icon: JSX.Element;
  onClick?: (content: string) => void;
}

export interface StyledListProps {
  /** 문장 내용 데이터 */
  data: Sentence[] | Story[] | Memo[];
  /** 제공할 서비스 아이템 배열 */
  service?: ServiceItem[];
  /** 리스트 아이템 클릭 핸들러 */
  onClick?: (content: string) => void;
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
          type={'sentence'}
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
          onClick={() => onClick && onClick}
        />
      ))}
    </div>
  );
};

export default StyledList;
