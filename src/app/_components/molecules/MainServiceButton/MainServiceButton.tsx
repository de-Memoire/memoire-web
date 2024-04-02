import React, { ReactNode } from 'react';
import { CircleIcon } from '../../atoms';
import * as styles from './MainServiceButton.css';
import BlackArrow from '/public/icon/arrow-black.svg';
import WhiteArrow from '/public/icon/arrow-white.svg';
import { wrapType, titleType } from './MainServiceButton.css';
import { useRouter } from 'next/navigation';

export interface MainServiceButtonProps {
  /** 버튼 텍스트 */
  title: string;
  /** 버튼 아이콘 */
  icon: React.ReactNode;
  /** dark | bright로 정의된 버튼 스타일 타입 */
  styleType: keyof typeof styles.wrapType;
  /** 버튼 클릭 시 이동할 /${navi} 문자열 */
  navi: string;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 클릭하면 주소 이동하는 메인 서비스 버튼 컴포넌트
 */
const MainServiceButton = ({
  title,
  styleType,
  icon,
  navi,
  className,
}: MainServiceButtonProps) => {
  const router = useRouter();

  const handleClick = async () => {
    await router.push(navi);
  };

  const _type = styleType;

  return (
    <div className={`${wrapType[_type]} ${className}`} onClick={handleClick}>
      <div className={styles.top}>
        <CircleIcon type={_type}>{icon}</CircleIcon>
        <div>{_type === 'dark' ? <BlackArrow /> : <WhiteArrow />}</div>
      </div>
      <div className={titleType[_type]}>{title}</div>
    </div>
  );
};

export default MainServiceButton;
