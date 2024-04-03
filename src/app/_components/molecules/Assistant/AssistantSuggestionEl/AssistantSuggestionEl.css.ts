import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  padding: '30px 28px',
  gap: '20px',
  display: 'flex',
  flexDirection: 'column',
  background: COLORS.grayscale.gray1,
  borderRadius: '5px',
});
