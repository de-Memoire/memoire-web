import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const imgWrap = style({
  width: '1200px',
  minHeight: '100vh',
  overflow: 'scroll',
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'flex-end',
});
export const imgEl = style({
  flex: '1',
});

export const buttonContainer = style({
  position: 'fixed',
  top: '0',
  zIndex: '9999',
  width: '1200px',
  textAlign: 'right',
  padding: '10px 50px',

  display: 'flex',
  gap: '10px',
  justifyContent: 'flex-end',
  alignItems: 'end',
});

export const buttonEl = style({
  ...TEXT_STYLES.title3R.PC,
  color: COLORS.grayscale.white,
  textShadow: '2px 2px 4px rgba(1, 1, 1, 0.5)',
});

export const num = style({
  ...TEXT_STYLES.body2R.PC,
  color: COLORS.grayscale.white,
  textShadow: '2px 2px 4px rgba(1, 1, 1, 0.5)',
});

export const OutSide = style({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  left: 0,
  top: 0,
  bottom: 0,
  overflowY: 'auto',
  backgroundColor: '#808080',
});

export const ModalLayOut = style({
  margin: 'auto',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '10px',
  position: 'relative',
});
