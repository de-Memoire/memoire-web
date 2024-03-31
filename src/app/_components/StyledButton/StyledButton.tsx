import React from 'react';
import * as styles from './StyledButton.css';

export interface ButtonProps {
  text: string;
}

const StyledButton = ({ text }: ButtonProps) => (
  <div className={styles.wrap}>{text}</div>
);

export default StyledButton;
