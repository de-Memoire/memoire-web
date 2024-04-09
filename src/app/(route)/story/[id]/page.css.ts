import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { TEXT_STYLES, COLORS } from '@/app/_constant';

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  gap: '70px',
});

export const buttonContainer = style({
  display: 'flex',
  gap: '16px',
  padding: '20px',
  flex: 1,
});

export const storyContainer = style({
  display: 'flex',
  gap: '15px',
  flexDirection: 'column',
});

export const title = style({
  ...TEXT_STYLES.brand1B.PC,
  whiteSpace: 'pre-line',
  flex: 1,
});

export const titleType = styleVariants({
  main: [title, { ...TEXT_STYLES.brand1B.PC }],
  feedback: [title, { ...TEXT_STYLES.brand2R.PC, padding: '0px 50px' }],
});

export const scroll = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '50px',
});

export const imgContainer = style({
  flex: 1,
  overflow: 'hidden',
  borderRadius: '16px',
});

export const storyContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  flex: 1,
});

export const storyService = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const storyServiceButtonContainer = style({
  display: 'flex',
  gap: '16px',
  flex: 1,
  minWidth: '430px',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

export const base = style({
  color: COLORS.grayscale.gray8,
});

export const textType = styleVariants({
  title: [base, { ...TEXT_STYLES.brand2R.PC }],
  author: [base, { ...TEXT_STYLES.brand4R.PC }],
  content: [base, { ...TEXT_STYLES.brand5R.PC }],
});

export const maxWidth = style({
  maxWidth: '800px',
  margin: '0 auto',
  width: '100%',
});
