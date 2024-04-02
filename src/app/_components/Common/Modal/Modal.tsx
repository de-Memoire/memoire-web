'use client';

import { useRef } from 'react';
import ReactDOM from 'react-dom';
import * as styles from './modal.css';

export type ModalProps = {
  /** (비)노출을 나타내는 불리언 */
  isShowing: boolean;
  /** 모달 내 자식 노드로 Popup컴포넌트가 들어옴 */
  content: React.ReactNode;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
};

/**
 * Popup 컴포넌트를 노드로 받는 모달 레이아웃 컴포넌트
 */
const Modal = ({ isShowing, content, className }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return isShowing
    ? ReactDOM.createPortal(
        <div className={`${styles.OutSide} ${className}`}>
          <div className={styles.ModalLayOut} ref={ref}>
            {content}
          </div>
        </div>,
        document.body,
      )
    : null;
};

export default Modal;
