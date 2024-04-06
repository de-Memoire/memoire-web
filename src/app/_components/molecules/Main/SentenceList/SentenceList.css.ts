import { COLORS, TEXT_STYLES } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
});
export const leftContainer = style({
  flex: '3',
  display: 'flex',
  flexWrap: 'wrap',
});
export const rightContainer = style({
  flex: '1',
});
