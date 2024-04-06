import { COLORS, TEXT_STYLES } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  opacity: '0',
});

export const imgContainer = style({
  height: '200px',
  width: '100%',
  paddingBottom: '20px',
});

export const base = style({
  color: COLORS.grayscale.gray8,
});

export const textType = styleVariants({
  title: [base, { ...TEXT_STYLES.brand3R.PC }],
  author: [base, { ...TEXT_STYLES.brand5R.PC }],
  content: [
    base,
    {
      ...TEXT_STYLES.brand6R.PC,
      minHeight: '80px',
      maxHeight: '120px',
      overflow: 'hidden',
    },
  ],
});
