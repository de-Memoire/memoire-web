import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '14px',
  borderRadius: '100px',
  border: `1px solid ${COLORS.grayscale.gray8}`,
  gap: '23px',
  cursor: 'pointer',
  transition: '0.5s',

  ':hover': {
    background: COLORS.grayscale.gray4,
  },
});

export const icon = style({});

export const text = style({
  ...TEXT_STYLES.body1R.PC,
  color: COLORS.grayscale.gray8,
  textAlign: 'center',
  width: '150px',
});
