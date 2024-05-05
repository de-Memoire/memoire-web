import { COLORS, TEXT_STYLES } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  padding: '16px 20px',
  background: COLORS.grayscale.black,
  borderRadius: '12px',
  ...TEXT_STYLES.brand4R.PC,
  color: COLORS.grayscale.white,
  width: '100%',
  textAlign: 'center',
  lineHeight: '24px',
  alignItems: 'center',
  cursor: 'pointer',
});
