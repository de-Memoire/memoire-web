'use client';

import * as style from './main.css';
import Image from 'next/image';
import MainServiceButton from '@/app/_components/molecules/MainServiceButton';
import StoryServiceButton from '@/app/_components/molecules/StoryServiceButton';
import { textType } from './main.css';
import { useScroll } from '@/app/_hooks/useScroll';
import { feedback, feedbackTag, story } from '@/app/_data/storydummy';
import Write from '/public/icon/write.svg';
import Scan from '/public/icon/scan.svg';
import Sentence from '/public/icon/sentence.svg';
import Feedback from '/public/icon/feedback.svg';
import Share from '/public/icon/share.svg';
import Wave from '/public/icon/wave.svg';
import FeedbackList from '@/app/_components/organisms/FeedbackList/FeedbackList';
import useModal from '@/app/_hooks/useModal';
import Modal from '@/app/_components/Common/Modal/Modal';
import { useRouter } from 'next/navigation';
import Popup from '@/app/_components/atoms/Popup';
import FeedbackTagList from '@/app/_components/molecules/FeedbackTag/FeedbackTagList';
import { titleType } from './main.css';
import SelectedFeedbackTagList from '@/app/_components/molecules/FeedbackTag/SelectedFeedbackTagList';
import { shareHandler } from '@/app/utils';
import { MainServiceButtonProps } from '@/app/_components/molecules/MainServiceButton';
import { StoryServiceButtonProps } from '@/app/_components/molecules/StoryServiceButton';
import { useState } from 'react';

const MAIN_TEXT = '타인에게서\n자신의 이야기를\n발견하세요.';
const FEEDBACK_TEXT = '아름다운 글을 쓰는\n지고의 노력을\n같이 응원해주세요.';

export default function Page() {
  const isScroll = useScroll();
  const router = useRouter();
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

  const MainServiceButtonConfigs: MainServiceButtonProps[] = [
    {
      title: '스토리 쓰기',
      styleType: 'dark',
      icon: <Write />,
      navi: 'write',
    },
    {
      title: '스토리 스캔하기',
      styleType: 'bright',
      icon: <Scan />,
      navi: 'scan',
    },
    {
      title: '문장 보관하기',
      styleType: 'bright',
      icon: <Sentence />,
      navi: 'sentence',
    },
  ];

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
      {/* 메인 서비스 */}
      <div className={style.top}>
        <div className={titleType['main']}>{MAIN_TEXT}</div>
        <div className={style.buttonContainer}>
          {MainServiceButtonConfigs.map((btn) => (
            <MainServiceButton
              key={btn.title}
              styleType={btn.styleType}
              title={btn.title}
              icon={btn.icon}
              navi={btn.navi}
            />
          ))}
        </div>
      </div>
      {/* 스토리 */}
      <div className={`${style.scroll} ${isScroll ? style.column : style.row}`}>
        <div className={style.imgContainer}>
          <Image
            src="/assets/bg.png"
            width={1280}
            height={430}
            alt="배경이미지"
          />
        </div>
        <div
          className={`${style.contentContainer} ${isScroll && style.maxWidth}`}
        >
          <div className={textType.title}>{story[0].title}</div>
          <div className={textType.author}>{story[0].author}</div>
          <div className={textType.content}>{story[0].content}</div>
        </div>
      </div>
      {/* 스토리 서비스 */}
      {isScroll && (
        <div className={`${style.storyService} ${style.maxWidth}`}>
          <div className={style.title}>{MAIN_TEXT}</div>
          <div className={style.StoryServiceButtonContainer}>
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
      )}
      {/* 피드백 */}
      {isScroll && (
        <FeedbackList contentList={feedback} className={`${style.maxWidth}`} />
      )}
      {/* 피드백 모달 */}
      <Modal
        isShowing={isShowing}
        content={
          <Popup onClose={toggle}>
            <div className={titleType['feedback']}>{FEEDBACK_TEXT}</div>
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
