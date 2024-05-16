import React, { ReactNode, useState } from 'react';
import * as styles from './WriteUtilEl.css';
import { CircleIcon } from '@/app/_components/atoms';
import { writeUtilElType } from '@/app/_constant/write';

export interface WriteUtilElProps {
  /** 대표 아이콘  */
  icon: ReactNode;
  /** 서브타이틀 텍스트*/
  subtitle: string;
  /** 타이틀 텍스트*/
  title: string;
  /** 드롭다운 관련 정보 */
  dropDown: {
    /** 드롭다운 아이콘 */
    icon: ReactNode;
    /** 타이틀 텍스트*/
    title: string;
    /** 드롭다운 자식 노드 컴포넌트 */
    childrenType?: 'full' | 'mini';
    /** 드롭다운 자식 노드 컴포넌트 */
    children?: ReactNode;
    /** 드롭다운 클릭 핸들러 */
    onClick?: (isOpened: boolean) => void;
  };
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 글쓰기 유틸 요소로 드롭다운(children)과 클릭 핸들러 지정 가능한 컴포넌트
 */
const WriteUtilEl = ({
  icon,
  subtitle,
  title,
  dropDown,
  className,
}: WriteUtilElProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function isClickHandler() {
    const newState = !isOpen;
    setIsOpen(newState);
    dropDown.onClick?.(newState);
  }

  return (
    <>
      <div className={`${styles.wrap} ${className}`}>
        <div className={styles.InfoIcon}>
          <CircleIcon type="dark">{icon}</CircleIcon>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoSubTitle}>{subtitle}</div>
          <div className={styles.infoTitle}>{title}</div>
        </div>
        <div className={styles.DropdownContainer} onClick={isClickHandler}>
          <div className={styles.DropdownContent}>
            <div className={styles.DropdownIitle}>{dropDown.title}</div>
            <div className={styles.DropdownIcon}>{dropDown.icon}</div>
          </div>
        </div>
      </div>
      {!isOpen && <div className={styles.lineBoxType.short}></div>}
      {isOpen && dropDown.childrenType == 'mini' && (
        <div className={`${styles.wrap}`}>
          <div className={styles.lineBoxType.short}></div>
          <div className={styles.childrenBox}> {dropDown.children}</div>
        </div>
      )}
      {isOpen && dropDown.childrenType == 'full' && (
        <>
          <div className={`${styles.wrap}`}>
            <div className={styles.lineBoxType.short}></div>
            <div className={styles.childrenBox}> </div>
          </div>
          {dropDown.children}
        </>
      )}
    </>
  );
};

export default WriteUtilEl;
