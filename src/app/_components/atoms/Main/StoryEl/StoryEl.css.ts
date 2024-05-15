import { COLORS, TEXT_STYLES } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  opacity: '0',
  flex: 1,
  cursor: 'pointer',
});

export const imgContainer = style({
  height: '200px',
  width: '100%',
  paddingBottom: '20px',
});

export const base = style({
  color: COLORS.grayscale.gray8,

  transition: '.5s',

  ':hover': {
    opacity: '0.6',
    transform: 'scale(1.05)',
  },
});

export const textType = styleVariants({
  title: [base, { ...TEXT_STYLES.brand3R.Mobile }],
  author: [base, { ...TEXT_STYLES.brand5R.PC }],
  content: [
    base,
    {
      ...TEXT_STYLES.brand6R.PC,
      maxHeight: '80px',
      overflow: 'hidden',
    },
  ],
});
