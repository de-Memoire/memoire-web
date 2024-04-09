import * as styles from './SentenceList.css';
import { Sentence } from '@/app/_data/storydummy';
import SentenceEl from '@/app/_components/atoms/Main/SentenceEl';
import { useRouter } from 'next/navigation';
import { admin_sentence } from '@/app/_data/storydummy';

export interface SentenceListProps {
  /** 문장 내용 데이터 */
  data: Sentence[];
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 메인에서 사용할 문장 리스트 컴포넌트
 */
const SentenceList = ({ data, className }: SentenceListProps) => {
  const router = useRouter();

  const handleSentenceClick = (id: number) => {
    router.push(`/sentence/${id}`);
  };

  return (
    <div className={`${styles.wrap} ${className}`}>
      <div className={styles.leftContainer}>
        {data.map((el, index) => (
          <SentenceEl
            key={index}
            sentence={el}
            bgType={index % 2 == 0 ? 'dark' : 'bright'}
            onClick={() => handleSentenceClick(el.id)}
          />
        ))}
      </div>
      <div className={styles.rightContainer}>
        <SentenceEl
          sentence={admin_sentence[0]}
          bgType={'admin'}
          onClick={() => handleSentenceClick(admin_sentence[0].id)}
        />
      </div>
    </div>
  );
};

export default SentenceList;
