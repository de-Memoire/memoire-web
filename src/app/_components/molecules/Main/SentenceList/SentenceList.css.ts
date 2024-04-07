import { COLORS, TEXT_STYLES } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  flex: '1',
});
export const leftContainer = style({
  flex: '3',
  display: 'flex',
  flexWrap: 'wrap',
  height: '100%',
});
export const rightContainer = style({
  flex: '1',
});
