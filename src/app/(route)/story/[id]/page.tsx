'use client';

import * as style from './page.css';
import { useEffect, useMemo } from 'react';
import StoryServiceButton from '@/app/_components/molecules/StoryServiceButton';
import { FeedbackTagProps } from '@/app/_data/storydummy';
import FeedbackBlackIcon from '/public/icon/feedback-black.svg';
import Share from '/public/icon/share.svg';
import Wave from '/public/icon/wave.svg';
import FeedbackList from '@/app/_components/organisms/FeedbackList/FeedbackList';
import useModal from '@/app/_hooks/useModal';
import Modal from '@/app/_components/Common/Modal/Modal';
import { useRouter, usePathname } from 'next/navigation';
import Popup from '@/app/_components/atoms/Popup';
import FeedbackTagList from '@/app/_components/molecules/FeedbackTag/FeedbackTagList';
import { titleType } from './page.css';
import SelectedFeedbackTagList from '@/app/_components/molecules/FeedbackTag/SelectedFeedbackTagList';
import { shareHandler } from '@/app/utils';
import { StoryServiceButtonProps } from '@/app/_components/molecules/StoryServiceButton';
import { useState } from 'react';
import type { Story } from '@/app/_constant/type/model';
import { getStoryId } from '@/app/userApi/getStoryId';
import { getStoryFeed } from '@/app/userApi/getStoryFeed';
import { getStoryFeedback } from '@/app/userApi/getStoryFeedback';
import { extractTagValues } from '@/app/_utils/algorithm';
import { postFeedbackClient } from '@/app/userApi/postFeedback';
import { Footer } from '@/app/_components/Common';
import { defaultfeedbackTag } from '@/app/_data/storydummy';
import Loading from '@/app/_components/atoms/Loading';
import Sentence from '/public/icon/logo_icon.svg';
import Confirm from '@/app/_components/atoms/Confirm';
import { CircleIcon } from '@/app/_components/atoms';
import WriteForm from '@/app/_components/molecules/WriteForm';


const MAIN_TEXT = '타인에게서\n자신의 이야기를\n발견하세요.';
const FEEDBACK_TEXT = '아름다운 글을 쓰는\n지고의 노력을\n같이 응원해주세요.';

const Page = () => {
  const router = useRouter();
  const path = usePathname();
  const id = path.split('/')[2];


  const [isLoading, setIsLoading] = useState(true);

  const { isShowing: isFeedbackModalShowing, toggle: toggleFeedbackModal } =
    useModal();
  const { isShowing: isConfirmModalShowing, toggle: toggleConfirmModal } =
    useModal();

  const [story, setStory] = useState<Story>();
  // const [feedbackTag, setFeedbackTag] = useState<FeedbackTagResponse>();
  const [feedbackTagList, setFeedbackTagList] =
    useState<FeedbackTagProps[]>(defaultfeedbackTag);
  const [feedbackList, setFeedbackList] = useState<string[]>([]);

  const getData = async () => {
    try {
      const _story = await getStoryId(id);
      // const _feedbackTag = await getStoryFeedbackTag();
      const _feedbackList = await getStoryFeedback(id);
      const transformedFeedbackList = await extractTagValues(_feedbackList);

      setStory(_story);
      // setFeedbackTag(_feedbackTag);
      setFeedbackList(transformedFeedbackList);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // feedback tag list state
  const [selectedTagList, setSelectedTagList] = useState<FeedbackTagProps[]>(
    [],
  );

  const handleTagSelect = (selectedTag: FeedbackTagProps) => {
    if (selectedTagList.includes(selectedTag)) {
      setSelectedTagList((prev) => prev.filter((tag) => tag !== selectedTag));
    } else {
      setSelectedTagList((prev) => [...prev, selectedTag]);
    }
  };

  useEffect(() => {
    if (selectedTagList.length != 0) {
      setSelectedTagList([]);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const StoryServiceButtonConfigs: StoryServiceButtonProps[] = [
    {
      title: '영감받아 글을 작성할게요',
      styleType: 'dark',
      buttonType: 'text',
      icon: <Wave />,
      onClick: toggleConfirmModal,
    },
    {
      title: '피드백 하기',
      styleType: 'dark',
      buttonType: 'icon',
      icon: <FeedbackBlackIcon />,
      onClick: toggleFeedbackModal,
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
      <WriteForm
        image={{
          src: story?.cover_image_url || '',
          alt: '배경이미지',
        }}
        write={{
          title: story?.title || '',
          author: story?.pen_name || '',
          content: story?.content || '',
        }}
        sign={{
          url: story?.signature_image_url || '',
        }}
      />
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
        contentList={feedbackList}
        className={`${style.maxWidth}`}
      />
      <Footer />
      {/* 피드백 모달 */}
      <Modal
        isShowing={isFeedbackModalShowing}
        content={
          <Popup
            onClose={() => {
              toggleFeedbackModal();
              setSelectedTagList([]);
            }}
          >
            <div className={titleType.feedback}>{FEEDBACK_TEXT}</div>
            <FeedbackTagList
              feedbackTagList={feedbackTagList}
              onSelect={handleTagSelect}
            />
            <SelectedFeedbackTagList
              selectedFeedbackTagList={selectedTagList}
              isSelected={true}
            />
            {selectedTagList.length < 1 ? (
              <div className={titleType.desc}>
                *2개 이상의 어절을 선택해주세요
              </div>
            ) : (
              <div
                className={titleType.desc}
                onClick={() => {
                  toggleFeedbackModal();
                  setSelectedTagList([]);
                  postFeedbackClient({
                    story_id: Number(id),
                    tags: selectedTagList.map((tag) => tag.id),
                  });
                }}
              >
                응원하기
              </div>
            )}
          </Popup>
        }
      />
      <Modal
        isShowing={isConfirmModalShowing}
        content={
          <Confirm
            onClose={() => {
              toggleConfirmModal();
            }}
            onLeft={{
              onClick: () => router.push(`/write?type=story`),
              text: '에세이로 작성하기',
            }}
            onRight={{
              onClick: () => router.push(`/write?type=sentence`),
              text: '문장으로 작성하기',
            }}
          >
            <CircleIcon type="bright">
              <Sentence />
            </CircleIcon>
            <div>어떤 글을 작성하고 싶으신가요?</div>
          </Confirm>
        }
      />
    </div>
  );
};

export default Page;
