import { Story } from '../_constant/type/model';
import { postData } from './common/post';

export interface requestFeedback {
  story_id: number;
  tags: number[];
  content?: string;
}

export async function postFeedbackClient(
  body: requestFeedback,
): Promise<Story[]> {
  const _body = body;
  try {
    const endpoint = 'feedback';

    const responseData = await postData<{ data: any }>(endpoint, body);
    console.log(responseData.data);
    return responseData.data;
  } catch (error) {
    throw new Error(`API error: ${error}`);
  }
}
