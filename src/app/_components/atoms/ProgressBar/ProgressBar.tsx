import React from 'react';
import * as styles from './ProgressBar.css';

export interface ProgressBarProps {
  curr: number;
}

const WEIGHT = 3;

const ProgressBar = ({ curr }: ProgressBarProps) => {
  const arr = Array.from({ length: WEIGHT }, (_, index) =>
    Number(index) < Number(curr) ? 1 : 0,
  );

  return (
    <div className={styles.wrap}>
      {arr.map((value, index) => (
        <div
          key={index}
          className={
            value === 1 ? styles.node['active'] : styles.node['inactive']
          }
        />
      ))}
    </div>
  );
};

export default ProgressBar;
