//API Response Data에서 실제 컨텐츠에 들어가는 타입 모음

import { StoryType } from '@/app/_constant/story';

export interface Story {
  id: number;
  img?: string;
  date: string;
  title: string;
  author?: string;
  type?: StoryType;
  content: string;
}

export interface StoryForm {
  title?: string;
  author?: string;
  content: string;
  image?: {
    file: File;
    dataUrl: string;
  };
  sign?: {
    dataUrl: string;
  };
}

export interface Sentence {
  id: number;
  date?: string;
  author?: string;
  content: string;
  type?: StoryType;
}

export interface Temporary {
  id: number;
  date?: string;
  author?: string;
  content: string;
}

export interface User {
  id: number;
  date?: string;
  author?: string;
  type?: StoryType;
  content: string;
}

export interface Memo {
  id: number;
  date: string;
  content: string;
}
