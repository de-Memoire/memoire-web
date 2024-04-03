import React, { useCallback } from 'react';
import * as styles from './AssistantInput.css';

export interface AssistantInputProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  /** 어시스턴트 요소 내 인풋 placeholder */
  placeholder?: string;
  /** 어시스턴트 요소 내 인풋 체인지 핸들러 */
  onTextChange?: (text: string) => void | Promise<void>;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 어시스턴트 요소 안에서 사용할 인풋 컴포넌트(textarea)
 */
const AssistantInput = ({
  placeholder = '',
  onTextChange,
  className,
  ...textareaProps
}: AssistantInputProps) => {
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      textareaProps.onChange?.(e);
      onTextChange?.(e.target.value);
    },
    [onTextChange, textareaProps.onChange],
  );

  return (
    <textarea
      className={`${styles.styledTextArea} ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      {...textareaProps}
    />
  );
};

export default AssistantInput;
