import React, { ReactNode } from 'react';
import * as styles from './Footer.css';

export interface FooterProps {
  text: string;
}

const Footer = ({ text }: FooterProps) => (
  <div className={styles.wrap}>{text}</div>
);

export default Footer;
