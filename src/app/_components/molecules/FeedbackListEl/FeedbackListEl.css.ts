import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  borderBottom: `1px solid ${COLORS.grayscale.gray2}`,
  padding: '10px 0px',
  gap: '20px',
  display: 'flex',
  alignItems: 'center',
});

export const title = style({
  ...TEXT_STYLES.brand4R.PC,
  color: COLORS.grayscale.black,
  flex: 1,
});
