import React, { ReactNode } from 'react';
import * as styles from './Loading.css';
import { Ripple } from 'react-spinners-css';
/**
 * 로딩 컴포넌트
 */
const Loading = () => (
  <div className={styles.wrap}>
    <Ripple color="#000" />
  </div>
);

export default Loading;
