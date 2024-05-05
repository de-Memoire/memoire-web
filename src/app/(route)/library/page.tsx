'use client';

import FlexContainer from '@/app/_components/atoms/FlexContainer';
import * as styles from './library.css';
import { sentence } from '@/app/_data/storydummy';
import StyledList from '@/app/_components/molecules/StyledList';
import FlexBox from '@/app/_components/atoms/FlexBox';
import { useRouter, useParams } from 'next/navigation';
import { ServiceItem } from '@/app/_components/molecules/StyledList/StyledList';
import GrayArrow from '/public/icon/arrow-gray.svg';
import { useEffect, useState } from 'react';
import { Sentence, Story } from '@/app/_constant/type/model';
import { formatDate } from '@/app/_utils/algorithm';
import { User } from '@/app/_data/storydummy';
import { getUserStory } from '@/app/userApi/getUserStory';
import Loading from '@/app/_components/atoms/Loading';
import { Footer } from '@/app/_components/Common';
const STORY_TEXT = '타인에게서\n자신의 이야기를\n발견하세요.';

export default function Page() {
  const router = useRouter();
  const [userStory, setUserStory] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = (data: string) => {
    router.push(`/write?id=${data}`);
  };

  const sentenceService: ServiceItem[] = [
    {
      icon: <GrayArrow />,
      onClick: () => handleClick,
    },
  ];

  const getData = async () => {
    try {
      const _userStory = await getUserStory();
      const transformedUserStory = _userStory.map((item: Story) => ({
        id: item.id,
        date: formatDate(item.created_at),
        content: item.content,
        author: item.pen_name,
      }));
      setUserStory(transformedUserStory);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className={styles.box}></div>
      <FlexContainer flexDirection="row">
        <FlexBox val={3}>
          <div className={styles.title}>{STORY_TEXT}</div>
        </FlexBox>
        <FlexBox val={7}>
          <StyledList data={userStory} service={sentenceService} />
        </FlexBox>
      </FlexContainer>
      <Footer />
    </>
  );
}
