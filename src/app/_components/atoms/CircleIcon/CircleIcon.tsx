import React, { ReactNode } from 'react';
import { wrap } from './CircleIcon.css';

export interface CircleIconProps {
  /** dark | bright로 원 배경 색상 지정 */
  type: keyof typeof wrap;
  /** 원 안에서 렌더링할 아이콘 컴포넌트 */
  children: ReactNode;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 배경 색상 type(bright|dark) 지정으로 원 속 아이콘 모양 렌더링 컴포넌트
 */
const CircleIcon = ({ type, children, className }: CircleIconProps) => (
  <div className={`${wrap[type]} ${className}`}>
    <div>{children}</div>
  </div>
);

export default CircleIcon;
