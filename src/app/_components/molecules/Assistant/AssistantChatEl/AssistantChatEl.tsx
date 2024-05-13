import React, { type ChangeEventHandler } from 'react';
import * as styles from './AssistantChatEl.css';
import AssistantInput from '@/app/_components/atoms/Assistant/AssistantInput';

export interface AssistantChatElProps {
  /** 인풋 placeholder */
  placeholder: string;
  /** 인풋 value */
  inputValue?: string;
  /** 인풋 label */
  inputLabel?: string;
  /** 인풋에 따른 프롬프트 아웃풋 노출 내용 */
  result?: string;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
  onTextChange?: (text: string) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSubmit?: () => void;
}

/**
 * 어시스턴트 요소 중 Chat에서 사용할 컨테이너 컴포넌트
 */
export const AssistantChatEl = ({
  inputValue,
  placeholder,
  inputLabel,
  result,
  className,
  onTextChange,
  onChange,
  onSubmit,
}: AssistantChatElProps) => {
  return (
    <div className={`${styles.wrap} ${className}`}>
      <div className={styles.label}>{inputLabel}</div>
      <AssistantInput
        placeholder={placeholder}
        value={inputValue}
        onTextChange={onTextChange}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.nativeEvent.isComposing) return;
          if (e.key === 'Enter') {
            onSubmit?.();
          }
        }}
      />
      <div className={styles.result}>
        {result?.split('\n').map((line, index) => <p key={index}>{line}</p>)}
      </div>
    </div>
  );
};
export default AssistantChatEl;
