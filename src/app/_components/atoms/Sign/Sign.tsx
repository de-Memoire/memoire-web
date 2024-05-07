'use client';

import React, { useState, useRef, useEffect } from 'react';
import * as styles from './Sign.css';
import SignatureCanvas from 'react-signature-canvas';

export interface SignProps {
  setImageURL: (url: string) => void;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 시그니처 서명 컴포넌트
 */

const Sign = ({ setImageURL, className }: SignProps) => {
  const signCanvas = useRef() as React.MutableRefObject<any>;

  const clear = () => {
    signCanvas.current.clear();
  };

  const linkSave = () => {
    const imageData = signCanvas.current
      .getTrimmedCanvas()
      .toDataURL('image/png');
    setImageURL(imageData);
  };

  return (
    <div className={`${styles.wrap} ${className}`}>
      <div className={styles.signWrap}>
        <SignatureCanvas
          ref={signCanvas}
          canvasProps={{
            className: 'signature-canvas',
            height: '140px',
            width: '380px',
          }}
        />
      </div>
      <div className={styles.buttonUl}>
        <div onClick={clear} className={styles.buttonEl}>
          지우기
        </div>
        <div onClick={linkSave} className={styles.buttonEl}>
          저장하기
        </div>
      </div>
    </div>
  );
};

export default Sign;
