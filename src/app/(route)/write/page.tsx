'use client';

import React, { useEffect, useState } from 'react';
import { ProgressBar, StoryTextInput } from '@/app/_components/atoms';
import AssistantSuggestionEl from '@/app/_components/molecules/Assistant/AssistantSuggestionEl';
import AssistantChatEl from '@/app/_components/molecules/Assistant/AssistantChatEl';
import * as styles from './write.css';
import { styledAssistantTitleType } from './write.css';
import StoryTextArea from '@/app/_components/atoms/StoryTextArea';
import { useCompletion } from 'ai/react';
import { AICompletionType } from '@/app/_constant/ai';
import { useSearchParams } from 'next/navigation';
import useDebounce from '@/app/_hooks/useDebounce';

interface AssistantSuggestionProps {
  prompt: string;
}

const AssistantSuggestion = ({ prompt }: AssistantSuggestionProps) => {
  const {
    completion: expressivenessCompletion,
    complete: completeExpressiveness,
  } = useCompletion({
    api: '/ai/completion',
    body: { type: AICompletionType.EXPRESSIVENESS },
    initialInput: prompt,
  });

  const { completion: readabilityCompletion, complete: completeReadability } =
    useCompletion({
      api: '/ai/completion',
      body: { type: AICompletionType.READABILITY },
      initialInput: prompt,
    });

  useEffect(() => {
    completeExpressiveness(prompt);
    completeReadability(prompt);
  }, [prompt]);

  return (
    <AssistantSuggestionEl
      inputValue={prompt}
      contentList={[
        {
          title: '제안',
          desc: readabilityCompletion,
        },
        {
          title: '표현력을 높인 문장 제안',
          desc: expressivenessCompletion,
        },
      ]}
    />
  );
};

const AssistantChat = () => {
  const { completion, input, handleInputChange, complete } = useCompletion({
    api: '/ai/completion',
    body: { type: AICompletionType.NEXT_SENTENCE },
  });

  return (
    <AssistantChatEl
      inputValue={input}
      inputLabel="다음 문장을 어떻게 이어 나가면 좋을까요?"
      placeholder="쓰고 싶은 이야기를 자유롭게 묘사해 주세요"
      result={completion}
      onChange={handleInputChange}
      onSubmit={() => {
        complete(input);
      }}
    />
  );
};

export default function Page() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const [content, setContent] = useState<string>('');
  const debouncedContent = useDebounce(content, 2000);

  const [assistantEl, setAssistantEl] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const contentToAnalyze = debouncedContent.trim();
    if (contentToAnalyze.length > 0) {
      const newAssistantSuggestionEl = (
        <AssistantSuggestion
          key={new Date().toISOString()}
          prompt={contentToAnalyze}
        />
      );

      setAssistantEl((prev) => [...prev, newAssistantSuggestionEl]);
    }
  }, [debouncedContent]);

  function generateNewAssistantEl() {
    const _select = window.getSelection()?.toString().trim();
    if (_select && _select.length > 0) {
      const newAssistantSuggestionEl = (
        <AssistantSuggestion key={new Date().toISOString()} prompt={_select} />
      );

      setAssistantEl((prev) => [...prev, newAssistantSuggestionEl]);
    }
  }

  return (
    <div className={styles.container}>
      <ProgressBar curr={1} />
      <div className={styles.flexContainer}>
        <div className={styles.writeSection}>
          {type === 'story' && (
            <StoryTextInput
              placeholder="제목을 입력하세요"
              type="title"
              // onMouseUp={generateNewAssistantEl}
            />
          )}
          <StoryTextInput
            placeholder="저자를 입력하세요"
            type="author"
            // onMouseUp={generateNewAssistantEl}
          />
          <StoryTextArea
            placeholder="내용을 입력하세요"
            onMouseUp={type === 'story' ? generateNewAssistantEl : undefined}
            onTextChange={setContent}
          />
        </div>
        <div className={styles.assistantSection}>
          <div className={styles.styledAssistantTitle}>
            <div className={styledAssistantTitleType['title']}>
              Writing Assistant
            </div>
            <div className={styledAssistantTitleType['desc']}>
              이야기를 아름답게 남길 수 있도록 돕겠습니다.
            </div>
          </div>
          <div className={styles.styledAssistantContent}>
            <AssistantChat />
            {[...assistantEl].reverse()}
          </div>
        </div>
      </div>
    </div>
  );
}
