'use client';

import { Modal } from '@/app/_components/Common';
import React, { useEffect, useState } from 'react';
import * as styles from './tutorial.css';
import { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const imgHandler = (type: string) => {
    scrollToTop();
    if (currentImageIndex === 9) {
      router.push('/');
    } else {
      if (type == 'prev') {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 1 ? 1 : prevIndex - 1,
        );
      } else if (type == 'next') {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 9 ? 9 : prevIndex + 1,
        );
      }
    }
  };

  const scrollToTop = () => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return ReactDOM.createPortal(
    <div className={`${styles.OutSide} scroll`} ref={ref}>
      <div className={styles.ModalLayOut}>
        <div className={`${styles.imgWrap} scroll`}>
          <div className={styles.buttonContainer}>
            <button
              className={styles.buttonEl}
              onClick={() => imgHandler('prev')}
            >
              이전
            </button>
            <button
              className={styles.buttonEl}
              onClick={() => imgHandler('next')}
            >
              다음
            </button>
            <div className={styles.num}>{currentImageIndex}/9</div>
          </div>
          <img
            className={styles.imgEl}
            src={`assets/tutorial/${currentImageIndex}.png`}
            alt={`Image ${currentImageIndex}`}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
