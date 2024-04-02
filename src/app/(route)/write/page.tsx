'use client';

import { ProgressBar, StoryTextInput } from '@/app/_components/atoms';
import AssistantSuggestionEl from '@/app/_components/molecules/Assistant/AssistantSuggestionEl';
import AssistantChatEl from '@/app/_components/molecules/Assistant/AssistantChatEl';
import { assistantContent } from '@/app/_data/storydummy';
import * as styles from './write.css';
import { styledAssistantTitleType } from './write.css';

export default function Page() {
  function temp() {
    console.log('hi');
  }
  return (
    <>
      <ProgressBar curr={1} />
      <div className={styles.flexContainer}>
        <div className={styles.writeSection}>
          <StoryTextInput
            placeholder="제목을 입력하세요"
            type="title"
            onChange={temp}
          ></StoryTextInput>
          <StoryTextInput
            placeholder="저자를 입력하세요"
            type="author"
            onChange={temp}
          ></StoryTextInput>
          <StoryTextInput
            placeholder="내용을 입력하세요"
            type="content"
            onChange={temp}
          ></StoryTextInput>
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
            <AssistantSuggestionEl
              inputValue="추억은 커피를 마실 때처럼 처음엔 씁쓸하지만 뒷맛을 천천히 음미하면서 지속시키면 순수하고 향기로워진다"
              contentList={assistantContent}
            />
            <AssistantSuggestionEl
              inputValue="추억은 커피를 마실 때처럼 처음엔 씁쓸하지만 뒷맛을 천천히 음미하면서 지속시키면 순수하고 향기로워진다"
              contentList={assistantContent}
            />
            <AssistantChatEl
              inputLabel="다음 문장을 어떻게 이어 나가면 좋을까요?"
              placeholder="쓰고 싶은 이야기를 자유롭게 묘사해 주세요"
            />
          </div>
        </div>
      </div>
    </>
  );
}
