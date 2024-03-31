import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style } from '@vanilla-extract/css';

export const wrap = style({
  ...TEXT_STYLES.body1B.PC,
  color: COLORS.grayscale.gray8,
  padding: '5px 10px',
  borderRadius: '10px',
  display: 'inline-block',
  border: `1px solid ${COLORS.grayscale.gray8}`,
});
