import { getData } from './common/get';
import { Story } from '../_constant/type/model';
import { StoryType } from '../_constant/story';

export async function getStoryFeed(
  type: StoryType,
  limit?: number,
): Promise<Story[]> {
  const _type = type;
  const _limit = limit ? limit : 4;
  try {
    const endpoint = 'story/feed';
    const queryParams = { type: _type.toString(), limit: _limit.toString() };

    const responseData = await getData<{ data: any }>(endpoint, queryParams);
    console.log(responseData.data);
    return responseData.data;
  } catch (error) {
    throw new Error(`API error: ${error}`);
  }
}
