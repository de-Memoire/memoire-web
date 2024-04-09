'use client';

import React, { useState } from 'react';
import * as styles from './Sign.css';

export interface SignProps {
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 텍스트 지정 가능한 피드백 태그 요소 컴포넌트
 */
const Sign = ({ className }: SignProps) => {
  return <div className={`${styles.wrap} ${className}`}></div>;
};

export default Sign;
