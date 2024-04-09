import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  height: '160px',
  border: `1px dashed ${COLORS.brand.tertiary}`,
  borderRadius: '5px',
});
