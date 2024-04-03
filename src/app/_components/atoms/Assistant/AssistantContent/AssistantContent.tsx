import * as styles from './AssistantContent.css';

export interface AssistantContentProps {
  /** 어시스턴트 요소 내 제안할 제목 */
  title: string;
  /** 어시스턴트 요소 내 제안할 내용 */
  desc: string;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 어시스턴트 요소 안에서 제목과 설명으로 렌더링할 컴포넌트
 */
const AssistantContent = ({
  title,
  desc,
  className,
}: AssistantContentProps) => {
  return (
    <div className={`${styles.wrap} ${className}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

export default AssistantContent;
