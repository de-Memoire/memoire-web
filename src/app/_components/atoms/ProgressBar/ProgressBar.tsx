import React from 'react';
import * as styles from './ProgressBar.css';
import { WEIGHT } from '@/app/utils';

export interface ProgressBarProps {
  /** active될 현재 단계*/
  curr: number;
  /** 총 단계 수*/
  weight: number;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * WEIGHT(상수)에서 현재 단계 갯수만큼 active, 나머지를 inactive로 표현하는 프로그레스 컴포넌트
 */
const ProgressBar = ({ curr, className, weight }: ProgressBarProps) => {
  const arr = Array.from({ length: weight }, (_, index) =>
    Number(index) < Number(curr) ? 1 : 0,
  );

  return (
    <div className={`${styles.wrap} ${className}`}>
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
