import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  padding: '30px 28px',
  gap: '10px',
  display: 'flex',
  flexDirection: 'column',
  background: COLORS.grayscale.gray1,
  borderRadius: '5px',
});

export const label = style({
  ...TEXT_STYLES.body2B.PC,
});

export const result = style({
  ...TEXT_STYLES.body2B.PC,
});
