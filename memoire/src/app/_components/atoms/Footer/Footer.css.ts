import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  ...TEXT_STYLES.body3R,
  color: COLORS.grayscale.gray7,
  width: '100%',
  textAlign: 'center',
  padding: '42px',
  borderTop: `0.5px solid ${COLORS.grayscale.gray7}`,
});
