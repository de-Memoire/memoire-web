import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  gap: '10px',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '20px 0px',
});

export const title = style({
  ...TEXT_STYLES.brand4R.PC,
  color: COLORS.grayscale.black,
  flex: 1,
});
