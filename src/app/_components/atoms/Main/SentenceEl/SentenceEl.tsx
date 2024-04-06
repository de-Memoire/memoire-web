import * as styles from './SentenceEl.css';
import Logo from '/public/icon/logo_icon.svg';
import { Sentence } from '@/app/_data/storydummy';

export interface SentenceElProps {
  /** 문장 내용 */
  sentence: Sentence;
  /** dark | bright | admin 으로 정의된 스타일링 분기점 */
  bgType: keyof typeof styles.wrapType;
  /** 문장 클릭 핸들러 */
  onClick?: () => void;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 메인에서 사용할 문장 요소 컴포넌트
 */
const SentenceEl = ({
  sentence: { author, content },
  className,
  bgType,
  onClick,
}: SentenceElProps) => {
  return (
    <div
      className={`${styles.wrapType[bgType]} ${className}`}
      onClick={onClick}
    >
      <div>{bgType == 'admin' && <Logo />}</div>
      <div className={styles.textType.content}>{content}</div>
      <div className={styles.line} />
      <div className={styles.textType.author}>{author}</div>
    </div>
  );
};

export default SentenceEl;
