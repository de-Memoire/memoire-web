import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  height: '160px',
  width: '400px',
  margin: '0 auto',
  border: `1px dashed ${COLORS.brand.tertiary}`,
  borderRadius: '5px',
  position: 'relative',
});

export const signWrap = style({
  padding: '10px',
});

export const buttonUl = style({
  height: '20px',
  width: '100%',
  display: 'flex',
  position: 'absolute',
  bottom: '0',
});

export const buttonEl = style({
  ...TEXT_STYLES.cap2L.PC,
  flex: '1',
  textAlign: 'center',
  cursor: 'pointer',

  transition: '0.5s',

  ':hover': {
    opacity: '0.5',
  },
});
