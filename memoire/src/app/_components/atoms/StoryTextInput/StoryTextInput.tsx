import { useCallback } from 'react';
import { textType } from './StoryTextInput.css';

export interface StoryTextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string;
  type: keyof typeof textType;
  onTextChange?: (text: string) => void | Promise<void>;
}

const StoryTextInput = ({
  placeholder = '',
  type,
  onTextChange,
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
      className={textType[`${type}`]}
      placeholder={placeholder}
      onChange={onChange}
      {...inputProps}
    />
  );
};

export default StoryTextInput;
