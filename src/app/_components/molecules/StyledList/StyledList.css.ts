import { COLORS, TEXT_STYLES } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  gap: '12px',
  flexDirection: 'column',
  overflow: 'scroll',
  height: '100%',
});
