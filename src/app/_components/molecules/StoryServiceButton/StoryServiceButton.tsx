import React, { ReactNode } from 'react';
import { CircleIcon } from '../../atoms';
import * as styles from './StoryServiceButton.css';
import { wrapType, titleType } from './StoryServiceButton.css';

export interface StoryServiceButtonProps {
  /** 버튼 텍스트 */
  title: string;
  /** 버튼 아이콘 */
  icon: React.ReactNode;
  /** dark | bright로 정의된 버튼 스타일 타입 */
  styleType: keyof typeof styles.wrapType;
  /** icon | text로 정의된 버튼 타입 */
  buttonType: 'icon' | 'text';
  /** 버튼 클릭 핸들러 */
  onClick: () => void;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 각 스토리에 귀속되는 스토리 서비스 버튼 컴포넌트
 */
const StoryServiceButton = ({
  title,
  styleType,
  buttonType,
  icon,
  onClick,
  className,
}: StoryServiceButtonProps) => {
  const _styleType = styleType;
  const _buttonType = buttonType;

  return (
    <div className={`${wrapType[_styleType]} ${className}`} onClick={onClick}>
      <div className={styles.top}>
        <CircleIcon type={_styleType}>{icon}</CircleIcon>
      </div>
      {_buttonType == 'text' && (
        <div className={titleType[_styleType]}>{title}</div>
      )}
    </div>
  );
};

export default StoryServiceButton;
