import StoryEl from '@/app/_components/atoms/Main/StoryEl';
import { Story } from '@/app/_constant/type/model';
import { useRouter } from 'next/navigation';
import * as styles from './StoryList.css';

export interface StoryListProps {
  /** 스토리 내용 데이터 */
  data: Story[];
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 메인에서 사용할 스토리 리스트 컴포넌트
 */
const StoryList = ({ data, className }: StoryListProps) => {
  const router = useRouter();

  const handleStoryClick = (id: number) => {
    router.push(`/story/${id}`);
  };

  return (
    <div className={`${styles.wrap} ${className}`}>
      {data.map((el, index) => (
        <StoryEl
          key={el.id}
          story={el}
          onClick={() => handleStoryClick(el.id)}
        />
      ))}
    </div>
  );
};

export default StoryList;
