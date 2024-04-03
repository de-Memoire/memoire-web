import React, { ReactNode } from 'react';
import * as styles from './Dropdown.css';
import { DropdownItemProps } from '../../atoms/DropdownItem';
export interface DropdownProps {
  /** 자식 노드 컴포넌트 */
  children: ReactNode;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * DropdownItem 컴포넌트를 자식 노드로 받을 드롭다운 컨테이너 컴포넌트
 */
//TODO Compound 패턴으로 리팩토링
const Dropdown = ({ children, className }: DropdownProps) => {
  return <div className={`${styles.wrap} ${className}`}>{children}</div>;
};

export default Dropdown;
