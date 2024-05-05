import { getData } from './common/get';
import { Story } from '../_constant/type/model';
import { StoryType } from '../_constant/story';

export async function getStoryId(id: string): Promise<Story> {
  const _id = id;
  try {
    const endpoint = `story/${_id}`;

    const responseData = await getData<{ data: any }>(endpoint);
    console.log(responseData.data);
    return responseData.data;
  } catch (error) {
    throw new Error(`API error: ${error}`);
  }
}
