import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});
