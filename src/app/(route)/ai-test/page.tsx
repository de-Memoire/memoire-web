'use client';

import { useCompletion } from 'ai/react';
import { AICompletionType } from '@/app/_constant/ai';

const Page = () => {
  const {
    completion,
    isLoading,
    input,
    handleInputChange,
    handleSubmit,
    stop,
  } = useCompletion({
    api: '/ai/completion',
    body: { type: AICompletionType.NEXT_SENTENCE },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Enter your prompt..."
          onChange={handleInputChange}
        />
        {completion.split('\n').map((item) => (
          <p key={item}>{item}</p>
        ))}
        <button type="button" onClick={stop}>
          Stop
        </button>
        <button disabled={isLoading} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
