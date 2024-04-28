import { getShuffledArray } from '../_utils/algorithm';
import { createSupabaseServerComponentClient } from '../_utils/supabase/server';
import MainPage from './main';

export default async function App() {
  const supabase = createSupabaseServerComponentClient();

  const quoteResultPromise = supabase
    .from('story')
    .select('*')
    .eq('type', 'quote')
    .is('deleted_at', null);

  const storyResultPromise = supabase
    .from('story')
    .select('*')
    .eq('type', 'essay')
    .is('deleted_at', null);

  const [quoteResult, storyResult] = await Promise.all([
    quoteResultPromise,
    storyResultPromise,
  ]);

  if (quoteResult.error) {
    console.error(quoteResult.error);
  }

  if (storyResult.error) {
    console.error(storyResult.error);
  }

  const stories = storyResult.data ?? [];
  const quotes = quoteResult.data ?? [];

  return (
    <MainPage
      sentences={
        quotes.length <= 6 ? quotes : getShuffledArray(quotes).slice(0, 6)
      }
      stories={
        stories.length <= 4 ? stories : getShuffledArray(stories).slice(0, 4)
      }
    />
  );
}
