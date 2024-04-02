import { COLORS, TEXT_STYLES } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const title = style({
  ...TEXT_STYLES.body2B.PC,
  color: COLORS.grayscale.black,
});

export const desc = style({
  ...TEXT_STYLES.body2R.PC,
  color: COLORS.grayscale.gray8,
});
  