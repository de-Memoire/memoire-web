'use client';

import { useRouter, useParams } from 'next/navigation';
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ProgressBar, StoryTextInput } from '@/app/_components/atoms';
import AssistantSuggestionEl from '@/app/_components/molecules/Assistant/AssistantSuggestionEl';
import AssistantChatEl from '@/app/_components/molecules/Assistant/AssistantChatEl';
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
import { StoryType } from '@/app/_constant/story';
import * as styles from './write.css';
import { createSupabaseClient } from '@/app/_utils/supabase/client';
import { WEIGHT } from '@/app/utils';
import StoryServiceButton from '@/app/_components/molecules/StoryServiceButton';
import Toast from '@/app/_components/atoms/Toast';
import List from '/public/icon/list.svg';
import { CircleIcon } from '@/app/_components/atoms';
import { postTemporary } from '@/app/userApi/postTemporary';
import Loading from '@/app/_components/atoms/Loading';
import { StoryForm } from '@/app/userApi/common/type';

const MAIN_TEXT = '타인에게서\n자신의 이야기를\n발견하세요.';
const INTRO_TEXT = '타인에게서\n자신의 이야기를\n발견하세요.';
const TOAST_TEXT =
  '임시저장 한 글이 있습니다.\n임시저장 글을 보고 싶으면 ctrl+M을 누르세요.';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

const Page = () => {
  const searchParams = useSearchParams();
  const _type = useMemo(() => searchParams.get('type'), [searchParams]);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [select, setSelect] = useState<string>('');
  const [step, setStep] = useState<number>(1);

  const [story, setStory] = useState<StoryForm>({
    title: '',
    author: '',
    content: '',
  });

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.metaKey && event.key === 'm') {
      router.push('/store');
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      handleKeyPress(event);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const debouncedContent = useDebounce(story.content, 2000);

  const debouncedSelect = useDebounce(select, 1000);

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
    if (typeof _select === 'string') {
      setSelect(_select);
    }
  }

  useEffect(() => {
    const contentToAnalyze = debouncedSelect;
    if (_type === 'story' && contentToAnalyze.length > 0) {
      const newAssistantSuggestionEl = (
        <AssistantSuggestion key={contentToAnalyze} prompt={contentToAnalyze} />
      );

      setAssistantEl((prev) => [...prev, newAssistantSuggestionEl]);
    }
  }, [debouncedSelect]);

  const imageInputRef = useRef<HTMLInputElement>(null);

  function UploadHandler(isOpened: boolean) {
    if (isOpened) {
      imageInputRef.current?.click();
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Toast>
        <div className={styles.toastWrap} onClick={() => router.push(`/store`)}>
          <CircleIcon type="bright">
            <List />
          </CircleIcon>
          <div className={styles.toastText}>{TOAST_TEXT}</div>
        </div>
      </Toast>

      {step === 1 && (
        <div className={styles.container}>
          <ProgressBar curr={step} weight={WEIGHT} />
          <FlexContainer flexDirection="row">
            {_type === writeType.STORY ? (
              <div className={styles.writeSection}>
                <StoryTextInput
                  placeholder="제목을 입력하세요"
                  type="title"
                  onTextChange={(e) => handleInputChange('title', e)}
                />
                <StoryTextInput
                  placeholder="저자를 입력하세요"
                  type="author"
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
                <StoryTextInput
                  placeholder="저자를 입력하세요"
                  type="author"
                  onTextChange={(e) => handleInputChange('author', e)}
                />
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
            <div
              className={styles.btnWrapperType.bright}
              onClick={() => {
                try {
                  setIsLoading(true);
                  postTemporary({
                    pen_name:
                      (story.author?.length ?? 0) > 0
                        ? story.author
                        : undefined,
                    content: story.content,
                    type: _type === 'story' ? StoryType.ESSAY : StoryType.QUOTE,
                    title:
                      (story.title?.length ?? 0) > 0 ? story.title : undefined,
                  });
                  router.push('/store');
                } catch {
                  console.error(Error);
                }
              }}
            >
              <div>임시저장</div>
            </div>
            <div
              className={styles.btnWrapperType.dark}
              onClick={() => setStep(2)}
            >
              <div className={styles.btnText}>다음 단계</div>
              <div className={styles.btnIcon}>
                <Arrow />
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className={`${styles.snapContainer} scroll`}>
          <div className={`${styles.snapEl}`}>
            <ProgressBar weight={WEIGHT} curr={step} />
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
                    children: (
                      <SignComponent
                        setImageURL={(url: string) => {
                          setStory((prev) => ({
                            ...prev,
                            sign: {
                              dataUrl: url,
                            },
                          }));
                        }}
                      />
                    ),
                  }}
                />
                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={async (e) => {
                    const file = e.currentTarget.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.readAsDataURL(file);
                      reader.onloadend = () => {
                        setStory((prev) => ({
                          ...prev,
                          image: {
                            file,
                            dataUrl: reader.result! as string,
                          },
                        }));
                      };
                    }
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
                    children: story.image ? (
                      <img src={story.image.dataUrl} alt="" />
                    ) : undefined,
                    childrenType: writeUtilElType.MINI,
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
                          src: story.image?.dataUrl,
                          alt: '배경이미지',
                        }}
                        write={{
                          title: story.title,
                          author: story.author,
                          content: story.content,
                        }}
                        sign={{
                          url: story.sign?.dataUrl,
                        }}
                      />
                    ),
                  }}
                />
              </div>
            </FlexContainer>
          </div>
          <div className={`${styles.snapEl}`}>
            <ProgressBar weight={WEIGHT} curr={3} />
            <FlexContainer flexDirection="col">
              <div className={`${styles.wrap} final ani_leftToRight`}>
                <div className={styles.text}>{MAIN_TEXT}</div>
                <div className={styles.vertiline} />
                <div
                  className={styles.btn}
                  onClick={async () => {
                    try {
                      setIsLoading(true);
                      const response = await fetch('/api/story', {
                        method: 'POST',
                        body: JSON.stringify({
                          pen_name:
                            (story.author?.length ?? 0) > 0
                              ? story.author
                              : undefined,
                          content: story.content,
                          type:
                            _type === 'story'
                              ? StoryType.ESSAY
                              : StoryType.QUOTE,
                          title:
                            (story.title?.length ?? 0) > 0
                              ? story.title
                              : undefined,
                          signature_image_url: story.sign?.dataUrl,
                        }),
                      });
                      const result = await response.json();
                      console.log(result);
                      if (story.image) {
                        const supabase = createSupabaseClient();
                        const imageSuffix = story.image.file.name
                          .split('.')
                          .at(-1);
                        if (imageSuffix) {
                          const imageUploadResponse = await supabase.storage
                            .from('memoire-public')
                            .upload(
                              `story-cover-image-${result.data.id}.${imageSuffix}`,
                              story.image.file,
                            );
                          if (imageUploadResponse.error) {
                            console.error(imageUploadResponse.error);
                          } else {
                            const { data: imagePublicUrlData } =
                              supabase.storage
                                .from('memoire-public')
                                .getPublicUrl(imageUploadResponse.data.path);
                            await fetch(`/api/story/${result.data.id}`, {
                              method: 'PATCH',
                              body: JSON.stringify({
                                cover_image_url: imagePublicUrlData.publicUrl,
                              }),
                            });
                          }
                        }
                      }
                      router.push(`${_type}/${result.data.id}`);
                    } catch (error) {
                      console.error(error);
                    }
                  }}
                >
                  흘려보내기
                </div>
              </div>
            </FlexContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
