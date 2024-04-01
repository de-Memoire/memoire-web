import React, { ReactNode } from 'react';
import { wrap } from './CircleIcon.css';

export interface CircleIconProps {
  type: keyof typeof wrap;
  children: ReactNode;
}

const CircleIcon = ({ type, children }: CircleIconProps) => (
  <div className={wrap[type]}>{children}</div>
);

export default CircleIcon;
