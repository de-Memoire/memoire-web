import { StoryType } from '../_constant/story';
import { Story } from '../_constant/type/model';
import { postData } from './common/post';

export interface requestFeedback {
  type: StoryType;
  content: string;
  title?: string;
  pen_name?: string;
}

export async function postTemporary(body: requestFeedback): Promise<Story[]> {
  const _body = body;
  try {
    const endpoint = 'story/temporary';

    const responseData = await postData<{ data: any }>(endpoint, _body);
    console.log(responseData.data);
    return responseData.data;
  } catch (error) {
    throw new Error(`API error: ${error}`);
  }
}
