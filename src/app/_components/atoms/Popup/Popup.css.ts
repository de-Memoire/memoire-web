import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  borderRadius: '10px',
  width: '517px',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  paddingBottom: '50px',
});

export const icon = style({
  textAlign: 'right',
  width: '22px',
  height: '22px',
  margin: '10px',
  marginLeft: 'auto',
});
