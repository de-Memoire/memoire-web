import { FeedbackResponse } from '../userApi/getStoryFeedback';
import { FeedbackTagProps } from '../_data/storydummy';

export const getShuffledArray = <T extends any[]>(array: T): T => {
  const newArray = [...array] as T;
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export function generateFeedbackList(jsonData: FeedbackResponse): string[] {
  const tagsList: string[] = [];
  for (const item of jsonData.data) {
    const tags = item.tags;
    if (tags) {
      for (const tag of tags) {
        tagsList.push(tag.value);
      }
    }
  }
  return tagsList;
}

export function extractTagValues(data: FeedbackResponse[]): string[] {
  const tagValues: string[] = [];
  data.forEach((item) => {
    const combinedTags = item.data
      ?.map((feedbackItem) =>
        feedbackItem.tags?.map((tag) => tag.value).join(' '),
      )
      .join(' ');
    if (combinedTags) {
      tagValues.push(combinedTags);
    }
  });
  return tagValues;
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}년 ${month}월 ${day}일`;
}
