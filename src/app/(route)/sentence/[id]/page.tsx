'use client';

import * as style from './page.css';
import { useEffect, useMemo } from 'react';
import StoryServiceButton from '@/app/_components/molecules/StoryServiceButton';
import { textType } from './page.css';
import { FeedbackTagProps } from '@/app/_data/storydummy';
import FeedbackBlackIcon from '/public/icon/feedback-black.svg';
import FeedbackWhiteIcon from '/public/icon/feedback-white.svg';
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
import { getStoryFeedback } from '@/app/userApi/getStoryFeedback';
import { extractTagValues } from '@/app/_utils/algorithm';
import { postFeedbackClient } from '@/app/userApi/postFeedback';
import { Footer } from '@/app/_components/Common';
import { defaultfeedbackTag } from '@/app/_data/storydummy';
import Loading from '@/app/_components/atoms/Loading';
import { CircleIcon } from '@/app/_components/atoms';
import Quote from '/public/icon/quote.svg';
import QuoteEnd from '/public/icon/quote-end.svg';
import Sentence from '/public/icon/logo_icon.svg';
import Confirm from '@/app/_components/atoms/Confirm';

const MAIN_TEXT = '타인에게서\n자신의 이야기를\n발견하세요.';
const FEEDBACK_TEXT = '아름다운 글을 쓰는\n지고의 노력을\n같이 응원해주세요.';

const Page = () => {
  /*---- router ----*/
  const router = useRouter();
  const path = usePathname();
  const id = path.split('/')[2];
  /*---- loading ----*/
  const [isLoading, setIsLoading] = useState(true);
  /*---- hooks ----*/
  const { isShowing: isFeedbackModalShowing, toggle: toggleFeedbackModal } =
    useModal();
  const { isShowing: isConfirmModalShowing, toggle: toggleConfirmModal } =
    useModal();
  /*---- state ----*/
  const [story, setStory] = useState<Story>();
  const [feedbackTagList, setFeedbackTagList] =
    useState<FeedbackTagProps[]>(defaultfeedbackTag);
  const [feedbackList, setFeedbackList] = useState<string[]>([]);
  const [selectedTagList, setSelectedTagList] = useState<FeedbackTagProps[]>(
    [],
  );
  const [randomImageSrc, setRandomImageSrc] = useState<number>();
  /*---- api call function ----*/
  const getData = async () => {
    try {
      const _story = await getStoryId(id);
      const _feedbackList = await getStoryFeedback(id);
      const transformedFeedbackList = await extractTagValues(_feedbackList);

      setStory(_story);
      setFeedbackList(transformedFeedbackList);
      setIsLoading(false);
    } catch (error) {
      router.push('/login');
      console.error('Error fetching data:', error);
    }
  };
  /*---- function ----*/
  const handleTagSelect = (selectedTag: FeedbackTagProps) => {
    if (selectedTagList.includes(selectedTag)) {
      setSelectedTagList((prev) => prev.filter((tag) => tag !== selectedTag));
    } else {
      setSelectedTagList((prev) => [...prev, selectedTag]);
    }
  };
  /*---- useEffect ----*/
  useEffect(() => {
    const imageSrc = Math.floor(Math.random() * 5) + 1;
    setRandomImageSrc(imageSrc);
    getData();
  }, []);
  useEffect(() => {
    if (selectedTagList.length != 0) {
      setSelectedTagList([]);
    }
  }, []);
  /*---- configs ----*/
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
      onClick: () => shareHandler(path),
    },
  ];
  /*---- jsx ----*/
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={style.wrap}>
      {/* 문장 내용 템플릿 */}
      <div className={`${style.storyContent} ani_floating`}>
        <div className={style.post}>
          <div className={style.postImg}>
            <img src={`/assets/postcard/${randomImageSrc}.jpeg`} />
          </div>
          <div className={style.postCaption}>
            <div>2024.05.17. - 2024.05.19. </div>
            <div>Global Media Graduation Exhibition Bloom</div>
          </div>
        </div>
        <div className={style.lineImg}>
          <img src="/assets/postLine.png" />
        </div>
        <div className={style.contentContainer}>
          <div className={style.quoteImg}>
            <img src="/assets/quote.png" />
          </div>
          <div className={textType.content}>{story?.content}</div>
          <div className={textType.author}>From.{story?.pen_name}</div>
          {story?.signature_image_url && (
            <img src={story?.signature_image_url} className={style.sign} />
          )}
        </div>
      </div>
      {/* 문장 서비스 */}
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
                onClick={async () => {
                  try {
                    toggleFeedbackModal();
                    setSelectedTagList([]);
                    await postFeedbackClient({
                      story_id: Number(id),
                      tags: selectedTagList.map((tag) => tag.id),
                    });
                    getData();
                  } catch (error) {
                    alert('다시 시도해주세요');
                  }
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
