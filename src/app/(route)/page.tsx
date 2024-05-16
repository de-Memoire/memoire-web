'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { useState, useEffect } from 'react';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import StoryList from '../_components/molecules/Main/StoryList';
import Layout from '../_components/atoms/Main/Layout';
import * as styles from './page.css';
import SentenceList from '../_components/molecules/Main/SentenceList';

import MainServiceButton, {
  type MainServiceButtonProps,
} from '../_components/molecules/MainServiceButton';
import Write from '/public/icon/write.svg';
import Sentence from '/public/icon/sentence.svg';
import { Story } from '../_constant/type/model';

const STORY_TEXT = '타인에게서\n자신의 이야기를 발견하세요.';
const SENTENCE_TEXT = '타인에게서 자신의 이야기를 발견하세요.';
const MAIN_TEXT = '타인에게서\n자신의 이야기를\n발견하세요.';

import { getStoryFeed } from '../userApi/getStoryFeed';
import { StoryType } from '../_constant/story';

const MainServiceButtonConfigs: MainServiceButtonProps[] = [
  {
    title: '문장 보관하기',
    styleType: 'bright',
    icon: <Sentence />,
    navi: 'save',
  },
  {
    title: '스토리 쓰기',
    styleType: 'dark',
    icon: <Write />,
    navi: 'write?type=story',
  },
  {
    title: '문장 쓰기',
    styleType: 'dark',
    icon: <Write />,
    navi: 'write?type=sentence',
  },
];

export default function Page() {
  /*---- router ----*/
  const router = useRouter();
  /*---- state ----*/
  const [stories, setStories] = useState<Story[]>([]);
  const [quotes, setQuotes] = useState<Story[]>([]);
  /*---- api call function ----*/
  const getData = async () => {
    try {
      const _stories = await getStoryFeed(StoryType.ESSAY);
      const _quotes = await getStoryFeed(StoryType.QUOTE, 6);
      setStories(_stories);
      setQuotes(_quotes);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  /*---- useEffect ----*/
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button
        className={styles.tutorial}
        onClick={() => router.push('/tutorial')}
      >
        <div className={styles.start}>Memoire 시작하기</div>
      </button>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel
        speed={2000}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Layout title={MAIN_TEXT} type="big" bg={true}>
            <div className={`${styles.buttonContainer}`}>
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
          </Layout>
        </SwiperSlide>
        <SwiperSlide>
          <Layout title={STORY_TEXT} type="big">
            <StoryList data={stories} className="story ani_floating" />
          </Layout>
        </SwiperSlide>
        <SwiperSlide>
          <Layout title={SENTENCE_TEXT} type="small">
            <SentenceList data={quotes} className="sentence ani_floating" />
          </Layout>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.wrap} final ani_leftToRight`}>
            <div className={styles.text}>{MAIN_TEXT}</div>
            <div className={styles.line} />
            <div
              onClick={() => {
                router.push('/write?type=story');
              }}
              className={styles.btn}
            >
              흘려보내기
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
