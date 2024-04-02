import * as styles from './DropdownItem.css';

export interface DropdownItemProps {
  /** 드롭다운 요소 이름 */
  title: string;
  /** 드롭다운 요소 클릭 이벤트 핸들러 */
  onClick: () => void;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 클릭 이벤트 지정이 가능한 드롭다운 요소 컴포넌트
 */
const DropdownItem = ({ title, onClick, className }: DropdownItemProps) => {
  return (
    <div className={`${styles.wrap} ${className}`} onClick={onClick}>
      {title}
    </div>
  );
};

export default DropdownItem;
