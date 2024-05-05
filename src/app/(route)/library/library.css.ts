import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const title = style({
  ...TEXT_STYLES.brand2R.PC,
  whiteSpace: 'pre-line',
});

export const box = style({
  width: '100%',
  height: '140px',
  borderRadius: '12px',
  background: COLORS.grayscale.black,
});
