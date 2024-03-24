import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  gap: '10px',
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
});

export const base = style({
  width: '60px',
  height: '5px',
  borderRadius: '10px',
});

export const node = styleVariants({
  active: [base, { background: COLORS.grayscale.gray8 }],
  inactive: [base, { background: COLORS.grayscale.gray2 }],
});
