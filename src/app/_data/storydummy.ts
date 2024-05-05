import { Sentence } from '../userApi/common/type';

export const admin_sentence: Sentence[] = [
  {
    id: 0,
    date: '2024.01.01',
    author: 'memoire',
    content: `추억은 커피를 마실 때처럼 처음엔 씁쓸하지만 뒷맛을 천천히 음미하면서 지속시키면 순수하고 향기로워진다.`,
  },
];

export interface Feedback {
  id: number;
  content: string[];
}

export interface FeedbackTagProps {
  id: number;
  value: string;
}

export const defaultfeedbackTag: FeedbackTagProps[] = [
  { id: 1, value: '단어가' },
  { id: 2, value: '표현력이' },
  { id: 3, value: '글이' },
  { id: 4, value: '어휘가' },
  { id: 5, value: '예쁜' },
  { id: 6, value: '아름다운' },
  { id: 7, value: '어울리는' },
  { id: 8, value: '아쉬운' },
  { id: 9, value: '기대되는' },
  { id: 10, value: '조심하기' },
  { id: 11, value: '호응이다' },
  { id: 12, value: '좋다' },
  { id: 13, value: '가득하다' },
  { id: 14, value: '문학 작품이다' },
  { id: 15, value: '수필이다' },
  { id: 16, value: '내용이다' },
  { id: 17, value: '글이다' },
];
