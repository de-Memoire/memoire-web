import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const base = style({
  borderRadius: '50px',
  width: '60px',
  height: '60px',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
});

export const wrap = styleVariants({
  dark: [base, { background: COLORS.grayscale.gray8 }],
  bright: [base, { background: COLORS.grayscale.gray1 }],
});
