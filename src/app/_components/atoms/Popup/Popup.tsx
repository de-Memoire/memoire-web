import React, { ReactNode } from 'react';
import { wrap } from './Popup.css';
import * as styles from './Popup.css';
import Close from '/public/icon/close.svg';

export interface PopupProps {
  /** 팝업 컴포넌트에서 자식 노드로 들어갈 컴포넌트  */
  children: ReactNode;
  /** 팝업 컴포넌트 닫기 클릭 이벤트 핸들러   */
  onClose?: () => void;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 모달 레이아웃 내 content로 들어갈 팝업 컴포넌트
 */
const Popup = ({ children, onClose, className }: PopupProps) => (
  <div className={`${styles.wrap} ${className}`}>
    <Close onClick={onClose} className={styles.icon} />
    {children}
  </div>
);

export default Popup;
