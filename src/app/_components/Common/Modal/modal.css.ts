import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const OutSide = style({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  left: 0,
  top: 0,
  bottom: 0,
  overflowY: 'auto',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
});

export const ModalLayOut = style({
  margin: 'auto',
  backgroundColor: COLORS.grayscale.white,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '10px',
  boxShadow: '0 2px 30px 0 rgba(0, 0, 0, 0.2)',
  position: 'relative',
});
