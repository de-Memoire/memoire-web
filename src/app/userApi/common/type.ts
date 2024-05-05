//API Response Data에서 실제 컨텐츠에 들어가는 타입 모음

export interface Story {
  id: number;
  img?: string;
  date: string;
  title: string;
  author?: string;
  content: string;
}

export interface Sentence {
  id: number;
  date: string;
  author?: string;
  content: string;
}

export interface Temporary {
  id: number;
  date: string;
  author?: string;
  content: string;
}

export interface User {
  id: number;
  date: string;
  author?: string;
  content: string;
}

export interface Memo {
  id: number;
  date: string;
  content: string;
}
