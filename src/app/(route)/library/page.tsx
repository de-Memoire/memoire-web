'use client';

import FlexContainer from '@/app/_components/atoms/FlexContainer';
import * as styles from './library.css';
import StyledList from '@/app/_components/molecules/StyledList';
import FlexBox from '@/app/_components/atoms/FlexBox';
import { useRouter, useParams } from 'next/navigation';
import { ServiceItem } from '@/app/_components/molecules/StyledList/StyledList';
import GrayArrow from '/public/icon/arrow-gray.svg';
import { useEffect, useState } from 'react';
import { Sentence, Story } from '@/app/_constant/type/model';
import { formatDate } from '@/app/_utils/algorithm';
import { User } from '@/app/userApi/common/type';
import { getUserStory } from '@/app/userApi/getUserStory';
import Loading from '@/app/_components/atoms/Loading';
import { Footer } from '@/app/_components/Common';
import { StoryType } from '@/app/_constant/story';

const STORY_TEXT = '내 서재';

export default function Page() {
  /*---- router ----*/
  const router = useRouter();
  /*---- loading ----*/
  const [isLoading, setIsLoading] = useState(true);
  /*---- state ----*/
  const [userStory, setUserStory] = useState<User[]>([]);
  /*---- api call function ----*/
  const getData = async () => {
    try {
      const _userStory = await getUserStory();
      console.log(_userStory);

      const transformedUserStory = _userStory.map((item: Story) => ({
        id: item.id,
        date: formatDate(item.created_at),
        content: item.content,
        author: item.pen_name,
        type: item.type,
      }));
      setUserStory(transformedUserStory);
      setIsLoading(false);
    } catch (error) {
      router.push('/login');
      console.error('Error fetching data:', error);
    }
  };
  /*---- function ----*/
  const handleClick = (content: User) => {
    let _type = '';
    if (content.type == StoryType.ESSAY) {
      _type = 'story';
    } else if (content.type == StoryType.QUOTE) {
      _type = 'sentence';
    }
    router.push(`/${_type}/${content.id}`);
  };
  /*---- useEffect ----*/
  useEffect(() => {
    getData();
  }, []);
  /*---- configs ----*/
  const sentenceService: ServiceItem[] = [
    {
      icon: <GrayArrow />,
    },
  ];
  /*---- jsx ----*/
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <FlexContainer flexDirection="row" className={styles.maxWidth}>
        <FlexBox val={2}>
          <div className={styles.title}>{STORY_TEXT}</div>
        </FlexBox>
        <FlexBox val={7}>
          <StyledList
            data={userStory}
            service={sentenceService}
            onClick={(data) => {
              handleClick(data);
            }}
          />
        </FlexBox>
      </FlexContainer>
      <Footer />
    </>
  );
}
