import { getShuffledArray } from '../_utils/algorithm';
import { createSupabaseServerComponentClient } from '../_utils/supabase/server';
import MainPage from './main';

export default async function App() {
  const supabase = createSupabaseServerComponentClient();

  const result = await supabase
    .from('story')
    .select('*')
    .eq('type', 'quote')
    .is('deleted_at', null);

  if (result.error) {
    console.error(result.error);
  }

  const stories = result.data ?? [];

  return (
    <MainPage
      sentences={
        stories.length <= 4 ? stories : getShuffledArray(stories).slice(0, 4)
      }
    />
  );
}
