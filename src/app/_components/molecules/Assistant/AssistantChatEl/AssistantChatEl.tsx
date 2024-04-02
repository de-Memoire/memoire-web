import React from 'react';
import * as styles from './AssistantChatEl.css';
import AssistantInput from '../../../atoms/Assistant/AssistantInput';

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
}: AssistantChatElProps) => {
  return (
    <div className={`${styles.wrap} ${className}`}>
      <div className={styles.label}>{inputLabel}</div>
      <AssistantInput placeholder={placeholder} value={inputValue} />
      <div className={styles.result}>{result}</div>
    </div>
  );
};
export default AssistantChatEl;
