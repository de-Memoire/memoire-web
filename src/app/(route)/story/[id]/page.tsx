import { createSupabaseServerComponentClient } from '@/app/_utils/supabase/server';
import InnerPage from './InnerPage';
import { redirect } from 'next/navigation';

const Page = async ({ params }: { params: { id: string } }) => {
  const supabase = createSupabaseServerComponentClient();

  const storyPromise = supabase
    .from('story')
    .select('*')
    .eq('id', Number(params.id))
    .single();
  const feedbacksPromise = supabase
    .from('feedback')
    .select(
      `
  *,
  feedback_tag_log (
    feedback_tag (
      id,
      value
    )
  )
  `,
    )
    .eq('story_id', Number(params.id));

  const [storyResponse, feedbacksResponse] = await Promise.all([
    storyPromise,
    feedbacksPromise,
  ]);

  if (storyResponse.error || feedbacksResponse.error) {
    redirect('/');
    return null;
  }

  return (
    <InnerPage
      story={storyResponse.data}
      feedbacks={feedbacksResponse.data.map((item) => ({
        content: item.content,
        tags: item.feedback_tag_log
          .map((tagLog) => tagLog.feedback_tag?.value)
          .filter((tag) => !!tag) as string[],
      }))}
    />
  );
};

export default Page;
