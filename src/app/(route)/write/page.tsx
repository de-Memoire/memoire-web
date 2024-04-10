'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { ProgressBar, StoryTextInput } from '@/app/_components/atoms';
import AssistantSuggestionEl from '@/app/_components/molecules/Assistant/AssistantSuggestionEl';
import AssistantChatEl from '@/app/_components/molecules/Assistant/AssistantChatEl';
import * as styles from './write.css';
import StoryTextArea from '@/app/_components/atoms/StoryTextArea';
import { useSearchParams } from 'next/navigation';
import Arrow from '/public/icon/arrow-black.svg';
import GrayArrow from '/public/icon/arrow-gray.svg';
import WriteUtilEl from '@/app/_components/molecules/WriteUtilEl';
import SignIcon from '/public/icon/sign.svg';
import ImageIcon from '/public/icon/image.svg';
import PreviewIcon from '/public/icon/preview.svg';
import File from '/public/icon/file.svg';
import Reload from '/public/icon/reload.svg';
import SignComponent from '@/app/_components/atoms/Sign';
import { writeType, writeUtilElType } from '@/app/_constant/write';
import WriteForm from '@/app/_components/molecules/WriteForm';
import FlexContainer from '@/app/_components/atoms/FlexContainer';
import useDebounce from '@/app/_hooks/useDebounce';
import { useCompletion } from 'ai/react';
import { AICompletionType } from '@/app/_constant/ai';

export const MAIN_TEXT = '타인에게서\n자신의 이야기를\n발견하세요.';
const INTRO_TEXT = '타인에게서\n자신의 이야기를\n발견하세요.';

interface storyData {
  title?: string;
  author?: string;
  content: string;
}

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
  const _type = useMemo(() => searchParams.get('type'), [searchParams]);

  const [select, setSelect] = useState<string>('');
  const [step, setStep] = useState<number>(1);

  const [story, setStory] = useState<storyData>({
    title: '',
    author: '',
    content: '',
  });

  const debouncedContent = useDebounce(story.content, 2000);

  useEffect(() => {
    const contentToAnalyze = debouncedContent.trim();
    if (_type === 'sentence' && contentToAnalyze.length > 0) {
      const newAssistantSuggestionEl = (
        <AssistantSuggestion key={contentToAnalyze} prompt={contentToAnalyze} />
      );

      setAssistantEl((prev) => [...prev, newAssistantSuggestionEl]);
    }
  }, [debouncedContent]);

  const [assistantEl, setAssistantEl] = useState<JSX.Element[]>([]);

  const handleInputChange = (key: string, value: string) => {
    setStory((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  function generateNewAssistantEl() {
    const _select = window.getSelection()?.toString().trim();
    if (_select) {
      setSelect(_select);

      const newAssistantSuggestionEl = (
        <AssistantSuggestion key={_select} prompt={_select} />
      );

      setAssistantEl((prev) => [...prev, newAssistantSuggestionEl]);
    }
  }

  function UploadHandler() {}

  return (
    <>
      {step == 1 && (
        <div>
          <ProgressBar curr={step} />
          <FlexContainer flexDirection="row">
            {_type == writeType.STORY ? (
              <div className={styles.writeSection}>
                <StoryTextInput
                  placeholder="제목을 입력하세요"
                  type="title"
                  // onMouseUp={generateNewAssistantEl}
                  onTextChange={(e) => handleInputChange('title', e)}
                />
                <StoryTextInput
                  placeholder="저자를 입력하세요"
                  type="author"
                  // onMouseUp={generateNewAssistantEl}
                  onTextChange={(e) => handleInputChange('author', e)}
                />
                <StoryTextArea
                  placeholder="내용을 입력하세요"
                  onMouseUp={generateNewAssistantEl}
                  onTextChange={(e) => handleInputChange('content', e)}
                />
              </div>
            ) : (
              <div className={styles.writeSection}>
                <StoryTextArea
                  placeholder="문장을 입력하세요"
                  // onMouseUp={generateNewAssistantEl}
                  onTextChange={(e) => handleInputChange('content', e)}
                />
              </div>
            )}
            <div className={styles.assistantSection}>
              <div className={styles.styledAssistantTitle}>
                <div className={styles.styledAssistantTitleType.title}>
                  Writing Assistant
                </div>
                <div className={styles.styledAssistantTitleType.desc}>
                  이야기를 아름답게 남길 수 있도록 돕겠습니다.
                </div>
              </div>
              <div className={styles.styledAssistantContent}>
                <AssistantChat />
                {[...assistantEl].reverse()}
              </div>
            </div>
          </FlexContainer>
          <div className={styles.btnSection}>
            <div className={styles.btnWrapper}>
              <div className={styles.btnText} onClick={() => setStep(2)}>
                다음 단계
              </div>
              <div className={styles.btnIcon}>
                <Arrow />
              </div>
            </div>
          </div>
        </div>
      )}
      {step == 2 && (
        <div className={`${styles.snapContainer} scroll`}>
          <div className={`${styles.snapEl}`}>
            <ProgressBar curr={step} />
            <FlexContainer flexDirection="col">
              <div className={styles.title}>{INTRO_TEXT}</div>
              <div className={styles.writeUtilElWrapper}>
                <WriteUtilEl
                  icon={<SignIcon />}
                  subtitle="step 01"
                  title="서명하기"
                  dropDown={{
                    icon: <GrayArrow />,
                    title: '기본 서명 사용하기',
                    childrenType: writeUtilElType.MINI,
                    children: <SignComponent />,
                  }}
                />
                <WriteUtilEl
                  icon={<ImageIcon />}
                  subtitle="step 02"
                  title="이미지 등록하기"
                  dropDown={{
                    icon: <File />,
                    title: '파일 찾기',
                    onClick: UploadHandler,
                  }}
                />
                <WriteUtilEl
                  icon={<PreviewIcon />}
                  subtitle="step 03"
                  title="글 미리보기"
                  dropDown={{
                    icon: <Reload />,
                    title: 'preview 생성하기',
                    childrenType: writeUtilElType.FULL,
                    children: (
                      <WriteForm
                        image={{
                          src: 'bg.png',
                          alt: '배경이미지',
                        }}
                        write={{
                          title: story.title,
                          author: story.author,
                          content: story.content,
                        }}
                      />
                    ),
                  }}
                />
              </div>
            </FlexContainer>
          </div>
          <div className={`${styles.snapEl}`}>
            <ProgressBar curr={3} />
            <FlexContainer flexDirection="col">
              <div className={`${styles.wrap} final ani_leftToRight`}>
                <div className={styles.text}>{MAIN_TEXT}</div>
                <div className={styles.vertiline}></div>
                <div className={styles.btn}>흘려보내기</div>
              </div>
            </FlexContainer>
          </div>
        </div>
      )}
    </>
  );
}
