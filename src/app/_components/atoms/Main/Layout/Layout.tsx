import * as styles from './Layout.css';
import { textType } from './Layout.css';

export interface LayoutProps {
  /** 레아아웃 타이틀 문구 */
  title: string;
  /** 레아아웃 타이틀 스타일링 타입 */
  type: keyof typeof textType;
  /** 레이아웃 내 요소 */
  children?: React.ReactNode;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 메인 페이지 각 섹션에서 사용할 레이아웃
 */
const Layout = ({ title, type, children, className }: LayoutProps) => {
  return (
    <div className={`${styles.wrap} ${className}`}>
      <div className={`${styles.textType[type]}`}>{title}</div>
      {children}
    </div>
  );
};

export default Layout;
