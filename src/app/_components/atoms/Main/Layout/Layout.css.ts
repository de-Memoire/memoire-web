import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '30px',
  padding: '0px 50px 50px 50px',
  height: '100%',
});

export const base = style({
  color: COLORS.grayscale.gray8,
  width: '100%',
  whiteSpace: 'pre-line',
});

export const textType = styleVariants({
  big: [base, { ...TEXT_STYLES.brand1B.PC, textAlign: 'left' }],
  small: [base, { ...TEXT_STYLES.brand3R.PC, textAlign: 'center' }],
});
