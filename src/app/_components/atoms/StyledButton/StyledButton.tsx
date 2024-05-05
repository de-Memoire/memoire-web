import { useCallback } from 'react';
import * as styles from './StyledButton.css';

export interface StyledButtonProps {
  /** 버튼 텍스트 */
  text: string;
  /** 클릭 이벤트 핸들러 */
  onClick: () => void;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 기본 스타일 버튼 컴포넌트
 */
const StyledButton = ({ onClick, text, className }: StyledButtonProps) => {
  return (
    <button className={`${styles.wrap} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default StyledButton;
