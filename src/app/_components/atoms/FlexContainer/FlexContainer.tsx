import * as styles from './FlexContainer.css';
import { wrapType } from './FlexContainer.css';

export interface FlexContainerProps {
  /** col | row 로 정의된 플렉스 레이아웃 방향 */
  flexDirection: keyof typeof styles.wrapType;
  /** 자식 노드 */
  children: React.ReactNode;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 자식 노드를 2개 받아 플렉스 레이아웃 잡는 컴포넌트
 */
const FlexContainer = ({
  flexDirection,
  children,
  className,
}: FlexContainerProps) => {
  return (
    <div className={`${wrapType[flexDirection]} ${className}`}>{children}</div>
  );
};

export default FlexContainer;
