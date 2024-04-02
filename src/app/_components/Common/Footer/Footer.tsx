import React, { ReactNode } from 'react';
import * as styles from './Footer.css';

export interface FooterProps {
  /** footer에 들어갈 텍스트 */
  text: string;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 텍스트 지정 가능한 footer 컴포넌트
 */
const Footer = ({ text, className }: FooterProps) => (
  <div className={`${styles.wrap} ${className}`}>{text}</div>
);

export default Footer;
