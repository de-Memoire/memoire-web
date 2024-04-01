import { style } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
});

export const logo = style({});

export const user = style({});

export const absoluteBox = style({
  position: 'absolute',
  top: '60px',
  right: '5px',
});
