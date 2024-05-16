import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const imgContainer = style({
  flex: 1,
  overflow: 'hidden',
  borderRadius: '16px',
  maxHeight: '250px',
});

export const storyContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  flex: 1,
});

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '80px',
});

export const signContent = style({
  width: '120px',
  height: '80px',
  marginLeft: 'auto',
  objectFit: 'contain',
  display: 'flex',
});

export const maxWidth = style({
  maxWidth: '800px',
  margin: '0 auto',
  width: '100%',
});
export const base = style({
  color: COLORS.grayscale.gray8,
});

export const textType = styleVariants({
  title: [base, { ...TEXT_STYLES.brand2R.PC }],
  author: [base, { ...TEXT_STYLES.brand4R.PC }],
  content: [base, { ...TEXT_STYLES.brand5R.PC }],
});
