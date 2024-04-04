import { useCallback } from 'react';
import { styledTextArea } from './StoryTextArea.css';

export interface StoryTextAreaProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  /** 스토리에서 사용할 textarea placeholder */
  placeholder: string;
  /** 스토리에서 사용할 textarea 체인지 핸들러 */
  onTextChange?: (text: string) => void | Promise<void>;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 스토리에서 사용할 textarea 컴포넌트(textarea)
 */
const StoryTextArea = ({
  placeholder = '',
  onTextChange,
  className,
  ...textareaProps
}: StoryTextAreaProps) => {
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      textareaProps.onChange?.(e);
      onTextChange?.(e.target.value);
    },
    [onTextChange, textareaProps.onChange],
  );

  return (
    <textarea
      className={`${styledTextArea} ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      {...textareaProps}
    />
  );
};

export default StoryTextArea;
