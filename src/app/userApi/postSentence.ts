import { StoryType } from '../_constant/story';
import { Story } from '../_constant/type/model';
import { postData } from './common/post';

export interface requestSentence {
  pen_name?: string;
  content?: string;
  type: StoryType;
  signature_image_url?: string;
}

export async function postSentence(body: requestSentence): Promise<Story> {
  const _body = body;
  try {
    const endpoint = 'story';

    const responseData = await postData<{ data: any }>(endpoint, _body);
    console.log(responseData.data);
    return responseData.data;
  } catch (error) {
    throw new Error(`API error: ${error}`);
  }
}
