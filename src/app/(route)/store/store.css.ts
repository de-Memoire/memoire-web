import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const title = style({
  ...TEXT_STYLES.brand1B.PC,
  whiteSpace: 'pre-line',
});

export const desc = style({
  ...TEXT_STYLES.cap1L.PC,
  color: COLORS.grayscale.gray7,
  width: '100%',
  textAlign: 'right',
  padding: '10px',
  cursor: 'pointer',
});
