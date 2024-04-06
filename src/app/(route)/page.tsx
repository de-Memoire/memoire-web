'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper/modules';
import StoryList from '../_components/molecules/Main/StoryList';
import { sentence, story } from '../_data/storydummy';
import Layout from '../_components/atoms/Main/Layout';
import SentenceList from '../_components/molecules/Main/SentenceList';

export const STORY_TEXT = '타인에게서\n자신의 이야기를 발견하세요.';
export const SENTENCE_TEXT = '타인에게서 자신의 이야기를 발견하세요.';

export default function App() {
  const router = useRouter();
  return (
    <Swiper
      direction={'vertical'}
      slidesPerView={1}
      spaceBetween={0}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Layout title={STORY_TEXT} type="big"></Layout>
      </SwiperSlide>
      <SwiperSlide>
        <Layout title={STORY_TEXT} type="big">
          <StoryList data={story} />
        </Layout>
      </SwiperSlide>
      <SwiperSlide>
        <Layout title={SENTENCE_TEXT} type="small">
          <SentenceList data={sentence} />
        </Layout>
      </SwiperSlide>
      <SwiperSlide>
        <Layout title={SENTENCE_TEXT} type="small"></Layout>
      </SwiperSlide>
    </Swiper>
  );
}
