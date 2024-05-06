import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { TEXT_STYLES, COLORS } from '@/app/_constant';

export const wrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
  padding: '0 150px',
  height: '100%',
});

export const buttonContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
  flexWrap: 'wrap',
  width: '180px',
  height: '320px',
  flexDirection: 'column',
  justifyContent: 'flex-end',
});

export const text = style({
  color: COLORS.grayscale.gray8,
  whiteSpace: 'pre-line',
  ...TEXT_STYLES.brand1B.PC,
  opacity: '0',
});
export const line = style({
  borderTop: `1px solid ${COLORS.grayscale.black}`,
  flex: '1',
  opacity: '0',
});
export const btn = style({
  ...TEXT_STYLES.brand5R.PC,
  padding: '10px 30px',
  borderRadius: '50px',
  display: 'inline-block',
  cursor: 'pointer',
  transition: '0.5s',
  background: COLORS.grayscale.black,
  color: COLORS.grayscale.gray1,
  height: '40px',
  opacity: '0',

  ':hover': {
    opacity: '0.5',
  },
});
