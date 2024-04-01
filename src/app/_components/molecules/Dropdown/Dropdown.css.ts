import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  ...TEXT_STYLES.brand5R.PC,
  boxShadow: '4px 4px 20px 0 rgba(0,0,0,0.1)',
  borderRadius: '10px',
  display: 'inline-block',
  width: '205px',
  overflow: 'hidden',
});
