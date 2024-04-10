import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  width: '100%',
  display: 'flex',
  gap: '50px',
});

export const wrapType = styleVariants({
  col: [wrap, { flexDirection: 'column', maxWidth: '700px', margin: '0 auto' }],
  row: [wrap, { flexDirection: 'row' }],
});
