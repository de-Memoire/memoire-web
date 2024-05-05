import { getData } from './common/get';
import { Story } from '../_constant/type/model';

export interface MemoResponse {
  content: string;
  created_at: string;
  deleted_at: string | null;
  id: number;
  user_id: number;
}

export async function getMemo(): Promise<MemoResponse[]> {
  try {
    const endpoint = `note`;

    const responseData = await getData<{ data: any }>(endpoint);
    console.log(responseData.data);
    return responseData.data;
  } catch (error) {
    throw new Error(`API error: ${error}`);
  }
}
