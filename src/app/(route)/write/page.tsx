'use client';

import React, { useCallback, useState } from 'react';
import { ProgressBar, StoryTextInput } from '@/app/_components/atoms';
import AssistantSuggestionEl from '@/app/_components/molecules/Assistant/AssistantSuggestionEl';
import AssistantChatEl from '@/app/_components/molecules/Assistant/AssistantChatEl';
import { assistantContent } from '@/app/_data/storydummy';
import * as styles from './write.css';
import { styledAssistantTitleType } from './write.css';
import StoryTextArea from '@/app/_components/atoms/StoryTextArea';

export default function Page() {
  const [select, setSelect] = useState<string>('');

  const newAssistantChatEl = (
    <AssistantChatEl
      inputLabel="다음 문장을 어떻게 이어 나가면 좋을까요?"
      placeholder="쓰고 싶은 이야기를 자유롭게 묘사해 주세요"
    />
  );

  const [assistantEl, setAssistantEl] = useState<JSX.Element[]>([
    newAssistantChatEl,
  ]);

  function generateNewAssistantEl() {
    const _select = window.getSelection()?.toString();
    if (_select) {
      setSelect(_select);

      const newAssistantSuggestionEl = (
        <AssistantSuggestionEl
          key={_select}
          inputValue={_select}
          contentList={assistantContent}
        />
      );

      setAssistantEl((prev) => [
        newAssistantSuggestionEl,
        newAssistantChatEl,
        ...prev,
      ]);
    }
  }

  return (
    <>
      <ProgressBar curr={1} />
      <div className={styles.flexContainer}>
        <div className={styles.writeSection}>
          <StoryTextInput
            placeholder="제목을 입력하세요"
            type="title"
            onMouseUp={generateNewAssistantEl}
          />
          <StoryTextInput
            placeholder="저자를 입력하세요"
            type="author"
            onMouseUp={generateNewAssistantEl}
          />
          <StoryTextArea
            placeholder="내용을 입력하세요"
            onMouseUp={generateNewAssistantEl}
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
          <div className={styles.styledAssistantContent}>{assistantEl}</div>
        </div>
      </div>
    </>
  );
}
