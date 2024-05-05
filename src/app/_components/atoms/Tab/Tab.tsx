import * as styles from './Tab.css';

export interface TabProps {
  /** 탭 요소 */
  tab: string[];
  /** 활성화된 탭의 인덱스 */
  activeTabIdx: number;
  /** 탭 클릭 핸들러 */
  onTabClick: (index: number) => void;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 요소 문자열 배열로 구성하는 탭 컴포넌트
 */
const Tab = ({ tab, activeTabIdx, className, onTabClick }: TabProps) => {
  return (
    <div className={`${styles.wrap} ${className}`}>
      {tab.map((el, index) => (
        <div
          key={index}
          className={`${styles.el} ${
            activeTabIdx === index
              ? styles.elIsActive.true
              : styles.elIsActive.false
          }`}
          onClick={() => onTabClick(index)}
        >
          {el}
        </div>
      ))}
    </div>
  );
};

export default Tab;
