import { COLORS, TEXT_STYLES } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const styledTextArea = style({
  ...TEXT_STYLES.body2L.PC,
  color: COLORS.grayscale.gray8,
  width: '100%',
  border: 'none',
  background: COLORS.grayscale.white,
  padding: '10px',
  resize: 'none',

  ':focus': {
    outline: 'none',
  },

  '::placeholder': {
    color: COLORS.grayscale.gray7,
  },
});
