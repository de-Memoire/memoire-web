'use client';

import * as style from './page.css';
import { useMemo } from 'react';
import Image from 'next/image';
import StoryServiceButton from '@/app/_components/molecules/StoryServiceButton';
import { textType } from './page.css';
import { feedback, feedbackTag, story } from '@/app/_data/storydummy';
import Feedback from '/public/icon/feedback.svg';
import Share from '/public/icon/share.svg';
import Wave from '/public/icon/wave.svg';
import FeedbackList from '@/app/_components/organisms/FeedbackList/FeedbackList';
import useModal from '@/app/_hooks/useModal';
import Modal from '@/app/_components/Common/Modal/Modal';
import { useRouter, useParams } from 'next/navigation';
import Popup from '@/app/_components/atoms/Popup';
import FeedbackTagList from '@/app/_components/molecules/FeedbackTag/FeedbackTagList';
import { titleType } from './page.css';
import SelectedFeedbackTagList from '@/app/_components/molecules/FeedbackTag/SelectedFeedbackTagList';
import { shareHandler } from '@/app/utils';
import { StoryServiceButtonProps } from '@/app/_components/molecules/StoryServiceButton';
import { useState } from 'react';

const MAIN_TEXT = '타인에게서\n자신의 이야기를\n발견하세요.';
const FEEDBACK_TEXT = '아름다운 글을 쓰는\n지고의 노력을\n같이 응원해주세요.';

export default function Page() {
  const router = useRouter();
  const params = useParams();

  const _sId = Number(params.id);

  const { title, author, content } = useMemo(() => {
    const { title, author, content } = story[_sId];
    return { title, author, content };
  }, [_sId]);

  const feedbackData = useMemo(() => {
    return feedback[_sId].content;
  }, [_sId]);

  const { isShowing, toggle } = useModal();

  // feedback tag list state
  const [selectedTagList, setSelectedTagList] = useState<string[]>([]);
  const handleTagSelect = (selectedTag: string) => {
    if (selectedTagList.includes(selectedTag)) {
      setSelectedTagList((prev) => prev.filter((tag) => tag !== selectedTag));
    } else {
      setSelectedTagList((prev) => [...prev, selectedTag]);
    }
  };

  const StoryServiceButtonConfigs: StoryServiceButtonProps[] = [
    {
      title: '영감받아 글을 작성할게요',
      styleType: 'dark',
      buttonType: 'text',
      icon: <Wave />,
      onClick: () => router.push(`/write`),
    },
    {
      title: '피드백 하기',
      styleType: 'dark',
      buttonType: 'icon',
      icon: <Feedback />,
      onClick: toggle,
    },
    {
      title: '모든 사람에게 공유하고 싶어요',
      styleType: 'bright',
      buttonType: 'text',
      icon: <Share />,
      onClick: shareHandler,
    },
  ];

  return (
    <div className={style.wrap}>
      {/* 스토리 내용 */}
      <div className={style.imgContainer}>
        <Image
          src="/assets/bg.png"
          width={1280}
          height={300}
          alt="배경이미지"
        />
      </div>
      <div className={`${style.storyContent} ${style.maxWidth}`}>
        <div className={textType.title}>{title}</div>
        <div className={textType.author}>{author}</div>
        <div className={textType.content}>{content}</div>
      </div>
      {/* 스토리 서비스 */}
      <div className={`${style.storyService} ${style.maxWidth} `}>
        <div className={style.title}>{MAIN_TEXT}</div>
        <div className={style.storyServiceButtonContainer}>
          {StoryServiceButtonConfigs.map((btn) => (
            <StoryServiceButton
              key={btn.title}
              styleType={btn.styleType}
              buttonType={btn.buttonType}
              title={btn.title}
              icon={btn.icon}
              onClick={btn.onClick}
            />
          ))}
        </div>
      </div>
      {/* 스토리 피드백 */}
      <FeedbackList
        contentList={feedbackData}
        className={`${style.maxWidth}`}
      />
      {/* 피드백 모달 */}
      <Modal
        isShowing={isShowing}
        content={
          <Popup onClose={toggle}>
            <div className={titleType.feedback}>{FEEDBACK_TEXT}</div>
            <FeedbackTagList
              feedbackTagList={feedbackTag}
              onSelect={handleTagSelect}
            />
            <SelectedFeedbackTagList
              selectedFeedbackTagList={selectedTagList}
              isSelected={true}
            />
          </Popup>
        }
      />
    </div>
  );
}
