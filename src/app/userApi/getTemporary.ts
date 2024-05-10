import { getData } from './common/get';
import { Story } from '../_constant/type/model';

export async function getTemporary(): Promise<Story[]> {
  try {
    const endpoint = `story/temporary`;

    const responseData = await getData<{ data: any }>(endpoint);
    console.log(responseData.data);
    return responseData.data;
  } catch (error) {
    throw new Error(`API error: ${error}`);
  }
}
