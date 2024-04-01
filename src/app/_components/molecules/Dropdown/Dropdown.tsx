import React, { ReactNode } from 'react';
import * as styles from './Dropdown.css';

export interface DropdownProps {
  children: ReactNode;
}

const Dropdown = ({ children }: DropdownProps) => {
  return <div className={styles.wrap}>{children}</div>;
};

export default Dropdown;
