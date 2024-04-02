import React from 'react';
import * as styles from './LoginButton.css';
import Kakao from '/public/icon/kakao.svg';
import Google from '/public/icon/google.svg';

export enum LoginType {
  KaKao = 'kakao',
  Google = 'google',
}

export interface LoginButtonProps {
  /** KaKao | Google로 정의된 로그인 타입 */
  type: LoginType;
  /** 로그인 버튼 클릭 이벤트 핸들러 */
  onClick: () => void;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * KaKao | Google로 정의된 로그인 버튼
 */
const LoginButton = ({ type, onClick, className }: LoginButtonProps) => {
  const LoginTypeConfig = {
    kakao: {
      text: '카카오',
      icon: <Kakao />,
    },
    google: {
      text: '구글',
      icon: <Google />,
    },
  } as const;

  return (
    <div className={`${styles.wrap} ${className}`} onClick={onClick}>
      <div className={styles.icon}>{LoginTypeConfig[type].icon}</div>
      <div className={styles.text}>{LoginTypeConfig[type].text}로 계속하기</div>
    </div>
  );
};

export default LoginButton;
