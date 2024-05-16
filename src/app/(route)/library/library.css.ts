import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const title = style({
  ...TEXT_STYLES.brand2R.PC,
  whiteSpace: 'pre-line',
});

export const maxWidth = style({
  width: '1000px',
  margin: '0 auto',
});
