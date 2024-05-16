import { COLORS, TEXT_STYLES } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const styledTextArea = style({
  ...TEXT_STYLES.brand5R.PC,
  color: COLORS.grayscale.gray8,
  width: '100%',
  border: 'none',

  resize: 'none',
  minHeight: '100%',

  overflow: 'scroll',

  ':focus': {
    outline: 'none',
  },

  '::placeholder': {
    color: COLORS.grayscale.gray7,
  },
});
