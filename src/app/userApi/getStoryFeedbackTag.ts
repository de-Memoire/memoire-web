import { getData } from './common/get';

export interface FeedbackTagResponse {
  data: {
    id: number;
    value: string;
  }[];
}

export async function getStoryFeedbackTag(): Promise<FeedbackTagResponse[]> {
  try {
    const endpoint = 'feedback/tag/list';

    const responseData = await getData<{ data: any }>(endpoint);
    console.log(responseData.data);
    return responseData.data;
  } catch (error) {
    throw new Error(`API error: ${error}`);
  }
}
