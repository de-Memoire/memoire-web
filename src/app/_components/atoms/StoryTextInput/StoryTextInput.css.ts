import { COLORS, TEXT_STYLES } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const styledInput = style({
  color: COLORS.grayscale.gray8,
  width: '100%',
  border: 'none',

  ':focus': {
    outline: 'none',
  },

  '::placeholder': {
    color: COLORS.grayscale.gray7,
  },
});

export const textType = styleVariants({
  title: [styledInput, { ...TEXT_STYLES.brand2R.PC }],
  author: [styledInput, { ...TEXT_STYLES.brand4R.PC }],
  content: [styledInput, { ...TEXT_STYLES.brand5R.PC }],
});
