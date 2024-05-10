import React, { ReactNode } from 'react';
import { wrap } from './Confirm.css';
import * as styles from './Confirm.css';
import Close from '/public/icon/close.svg';
import FlexContainer from '../FlexContainer';
import FlexBox from '../FlexBox';

export interface ConfirmProps {
  /** 팝업 컴포넌트에서 자식 노드로 들어갈 컴포넌트  */
  children: ReactNode;
  /** 옵션1 이벤트 핸들러   */
  onLeft?: {
    onClick: () => void;
    text: string;
  };
  /** 옵션2 이벤트 핸들러   */
  onRight?: {
    onClick: () => void;
    text: string;
  };
  /** 팝업 컴포넌트 닫기 클릭 이벤트 핸들러   */
  onClose?: () => void;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 두 가지 옵션 선택 팝업 컴포넌트
 */
const Confirm = ({
  children,
  onLeft,
  onRight,
  onClose,
  className,
}: ConfirmProps) => (
  <div className={`${styles.wrap} ${className}`}>
    <Close onClick={onClose} className={styles.icon} />
    {children}
    <div className={styles.optionContainer}>
      <div className={styles.options.left} onClick={onLeft?.onClick}>
        {onLeft?.text}
      </div>
      <div className={styles.options.right} onClick={onRight?.onClick}>
        {onRight?.text}
      </div>
    </div>
  </div>
);

export default Confirm;
