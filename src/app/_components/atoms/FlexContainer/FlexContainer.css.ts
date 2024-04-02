import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  width: '100%',
  display: 'flex',
});

export const wrapType = styleVariants({
  col: [wrap, { flexDirection: 'column' }],
  row: [wrap, { flexDirection: 'row' }],
});
