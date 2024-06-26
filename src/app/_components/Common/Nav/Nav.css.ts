import { style } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
});

export const logo = style({
  cursor: 'pointer',
});

export const user = style({
  width: '48px',
  height: '48px',
  position: 'relative',
  borderRadius: '24px',
  overflow: 'hidden',
  cursor: 'pointer',
});

export const absoluteBox = style({
  position: 'absolute',
  top: '60px',
  right: '5px',
  zIndex: '999',
});
