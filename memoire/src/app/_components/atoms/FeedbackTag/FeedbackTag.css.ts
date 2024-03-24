import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const base = style({
  ...TEXT_STYLES.brand5R.PC,
  padding: '10px 30px',
  borderRadius: '50px',
  display: 'inline-block',
  cursor: 'pointer',
  transition: '0.5s',
});

export const wrap = styleVariants({
  false: [
    base,
    {
      background: COLORS.grayscale.gray1,
      color: COLORS.grayscale.black,
    },
  ],
  true: [
    base,
    {
      background: COLORS.grayscale.black,
      color: COLORS.grayscale.gray1,
    },
  ],
});
