import React from 'react';
import * as styles from './AssistantSuggestionEl.css';
import AssistantInput from '@/app/_components/atoms/Assistant/AssistantInput';
import AssistantContent from '@/app/_components/atoms/Assistant/AssistantContent';
import { AssistantContentProps } from '@/app/_components/atoms/Assistant/AssistantContent';

export interface AssistantSuggestionElProps {
  /** 드래그를 통해 바뀔 인풋 value */
  inputValue: string;
  /** 드래그를 통한 인풋에 따른 아웃풋 노출 내용 */
  contentList: AssistantContentProps[];
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 어시스턴트 요소 중 Suggestion에서 사용할 컨테이너 컴포넌트
 */
export const AssistantSuggestionEl = ({
  inputValue,
  contentList,
  className,
}: AssistantSuggestionElProps) => {
  return (
    <div className={`${styles.wrap} ${className}`}>
      <AssistantInput value={inputValue} />
      {contentList.map((el, index) => (
        <AssistantContent key={index} title={el.title} desc={el.desc} />
      ))}
    </div>
  );
};
export default AssistantSuggestionEl;
