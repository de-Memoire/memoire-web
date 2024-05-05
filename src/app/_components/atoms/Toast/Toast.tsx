import React, { ReactNode, useEffect, useState } from 'react';
import { wrap } from './Toast.css';

export interface ToastProps {
  /** 토스트 내용 컴포넌트 */
  children: ReactNode;
  /** 토스트가 보여지는 시간 (밀리초) */
  duration?: number;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 우상단 고정 토스트 컨테이너 컴포넌트
 */
const Toast = ({ children, className, duration = 3000 }: ToastProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    let closeTimeout: ReturnType<typeof setTimeout>;

    if (isOpen) {
      closeTimeout = setTimeout(() => {
        close();
      }, duration);
    }

    return () => {
      clearTimeout(closeTimeout);
    };
  }, [isOpen]);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`${wrap} ${className}`}
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div>{children}</div>
    </div>
  );
};

export default Toast;
