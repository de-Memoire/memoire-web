import * as styles from './FlexBox.css';
import { wrap } from './FlexBox.css';

export interface FlexBoxProps {
  /** flex value option */
  val: keyof typeof styles.wrap;
  /** 자식 노드 */
  children: React.ReactNode;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

const FlexBox = ({ val, children, className }: FlexBoxProps) => {
  return <div className={`${wrap[val]} ${className}`}>{children}</div>;
};

export default FlexBox;
