import { useCallback } from 'react';
import { textType } from './StoryTextInput.css';

export interface StoryTextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /** 스토리에서 사용할 인풋 placeholder */
  placeholder: string;
  /** 스토리에서 사용할 인풋 타입("title" | "content" | "author") */
  type: keyof typeof textType;
  /** 스토리에서 사용할 인풋 체인지 핸들러 */
  onTextChange?: (text: string) => void | Promise<void>;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 스토리에서 사용할 인풋 컴포넌트(input)
 */
const StoryTextInput = ({
  placeholder = '',
  type,
  onTextChange,
  className,
  ...inputProps
}: StoryTextInputProps) => {
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      inputProps.onChange?.(e);
      onTextChange?.(e.target.value);
    },
    [onTextChange, inputProps.onChange],
  );

  return (
    <input
      className={`${textType[`${type}`]} ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      {...inputProps}
    />
  );
};

export default StoryTextInput;
