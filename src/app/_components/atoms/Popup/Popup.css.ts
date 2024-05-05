import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  borderRadius: '10px',
  width: '510px',
  height: '700px',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  padding: '10px 0px 20px',
});

export const icon = style({
  textAlign: 'right',
  width: '22px',
  minHeight: '22px',
  marginLeft: 'auto',
  marginRight: '10px',
});
