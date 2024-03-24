import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  ...TEXT_STYLES.body1R.PC,
  width: '100%',
  padding: '18px',
  textAlign: 'center',
  color: COLORS.grayscale.gray8,
  cursor: 'pointer',
  transition: '0.5s',

  ':hover': {
    background: COLORS.grayscale.black,
    color: COLORS.grayscale.white,
  },
});
