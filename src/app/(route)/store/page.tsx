'use client';

import FlexContainer from '@/app/_components/atoms/FlexContainer';
import * as styles from './store.css';
import StyledList from '@/app/_components/molecules/StyledList';
import FlexBox from '@/app/_components/atoms/FlexBox';
import { useRouter, useParams } from 'next/navigation';
import { ServiceItem } from '@/app/_components/molecules/StyledList/StyledList';
import GrayArrow from '/public/icon/arrow-gray.svg';
import { getTemporary } from '@/app/userApi/getTemporary';
import { useEffect, useState } from 'react';
import { Sentence, Story } from '@/app/_constant/type/model';
import { formatDate } from '@/app/_utils/algorithm';
import { Temporary } from '@/app/userApi/common/type';
import Loading from '@/app/_components/atoms/Loading';

const STORY_TEXT = '타인에게서\n자신의 이야기를\n발견하세요.';

export default function Page() {
  /*---- router ----*/
  const router = useRouter();
  /*---- loading ----*/
  const [isLoading, setIsLoading] = useState(true);
  /*---- state ----*/
  const [temporary, setTemporary] = useState<Temporary[]>([]);
  /*---- api call function ----*/
  const getData = async () => {
    try {
      const _temporary = await getTemporary();
      const transformedTemporary = _temporary.map((item: Story) => ({
        id: item.id,
        date: formatDate(item.created_at),
        content: item.content,
        author: item.pen_name,
      }));
      setTemporary(transformedTemporary);
      setIsLoading(false);
    } catch (error) {
      router.push('/login');
      console.error('Error fetching data:', error);
    }
  };
  /*---- function ----*/
  const handleClick = (data: string) => {
    router.push(`/write?id=${data}`);
  };
  function goback() {
    router.push('/write');
  }
  /*---- useEffect ----*/
  useEffect(() => {
    getData();
  }, []);
  /*---- configs ----*/
  const sentenceService: ServiceItem[] = [
    {
      icon: <GrayArrow />,
      onClick: () => handleClick,
    },
  ];
  /*---- jsx ----*/
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <FlexContainer flexDirection="row">
        <FlexBox val={3}>
          <div className={styles.title}>{STORY_TEXT}</div>
        </FlexBox>
        <FlexBox val={7}>
          <div>
            <button className={styles.desc} onClick={goback}>
              뒤로가기
            </button>
            <StyledList data={temporary} service={sentenceService} />
          </div>
        </FlexBox>
      </FlexContainer>
    </>
  );
}
