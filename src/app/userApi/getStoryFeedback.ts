import { getData } from './common/get';

export interface FeedbackResponse {
  content: string | null;
  created_at: string;
  deleted_at: string | null;
  id: number;
  story_id: number;
  user_id: number;
  tags?: {
    id: number;
    value: string;
  }[];
}

export async function getStoryFeedback(
  id: string,
): Promise<FeedbackResponse[]> {
  const _id = id;
  try {
    const endpoint = '/feedback';
    const queryParams = { id: _id };

    const responseData = await getData<{ data: any }>(endpoint, queryParams);
    console.log(responseData.data);
    return responseData.data;
  } catch (error) {
    throw new Error(`API error: ${error}`);
  }
}
