'use client';

import * as style from './save.css';
import { useEffect, useState } from 'react';
import StyledButton from '@/app/_components/atoms/StyledButton';
import StyledList from '@/app/_components/molecules/StyledList';
import * as styles from './save.css';
import { Memo } from '@/app/userApi/common/type';
import { useRouter, useParams } from 'next/navigation';
import { ServiceItem } from '@/app/_components/molecules/StyledList/StyledList';
import PlusFile from '/public/icon/plusFile.svg';
import Copy from '/public/icon/Copy.svg';
import Tab from '@/app/_components/atoms/Tab';
import { postMemo } from '@/app/userApi/postMemo';
import { getMemo, MemoResponse } from '@/app/userApi/getMemo';
import { formatDate } from '@/app/_utils/algorithm';
import Loading from '@/app/_components/atoms/Loading';

const INTRO_TEXT = '작은 문장 조각을\n보관해보세요.';
const PH =
  '문득 떠오르는 문장을 기록해두세요. 작은 조각들이 모여 하나의 완성된 글을 만들 수 있어요.';

export default function Page() {
  const [step, setStep] = useState<number>(0);
  const [saveContent, setSaveContent] = useState<string>('');
  const [memo, setMemo] = useState<Memo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setSaveContent(event.target.value);
  };

  const handleSentenceClick = (data: string) => {
    router.push(`/write?type=sentence?content=${data}`);
  };

  const copyHandler = async (data: string) => {
    try {
      await navigator.clipboard.writeText(data);
      alert('Copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy:', error);
      alert('Failed to copy to clipboard');
    }
  };

  const sentenceService: ServiceItem[] = [
    {
      icon: <PlusFile />,
      onClick: (content: string) => handleSentenceClick(content),
    },
    {
      icon: <Copy />,
      onClick: (content: string) => copyHandler(content),
    },
  ];

  const getData = async () => {
    try {
      const _memo = await getMemo();
      const transformedMemo = _memo.map((item: MemoResponse) => ({
        id: item.id,
        date: formatDate(item.created_at),
        content: item.content,
      }));
      setMemo(transformedMemo);

      console.log(_memo);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [step]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={style.wrap}>
      <div className={style.title}>{INTRO_TEXT}</div>
      <Tab
        tab={['보관하기', '보관함']}
        activeTabIdx={step}
        onTabClick={(index) => setStep(index)}
      />
      {step == 0 && (
        <div className={style.content}>
          <textarea
            className={styles.styledTextArea}
            placeholder={PH}
            value={saveContent}
            onChange={handleTextareaChange}
          />
          <StyledButton
            text="보관하기"
            onClick={() => {
              postMemo({
                content: saveContent,
              });
              setStep(1);
            }}
          />
        </div>
      )}
      {step == 1 && (
        <div className={style.content}>
          <StyledList data={memo} service={sentenceService} />
        </div>
      )}
    </div>
  );
}
