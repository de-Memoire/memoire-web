import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  borderRadius: '12px',
  width: '180px',
  height: '145px',
  padding: '16px 20px',
  gap: '34px',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',

  transition: '.5s',

  ':hover': {
    opacity: '0.6',
    transform: 'scale(1.05)',
  },
});

export const wrapType = styleVariants({
  dark: [
    wrap,
    {
      background: COLORS.grayscale.black,
      border: `1px solid ${COLORS.grayscale.black}`,
    },
  ],
  bright: [
    wrap,
    {
      background: COLORS.grayscale.white,
      border: `1px solid ${COLORS.grayscale.gray1}`,
    },
  ],
});

export const top = style({
  ...TEXT_STYLES.body2B.PC,
  color: COLORS.grayscale.white,
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const title = style({
  ...TEXT_STYLES.body2B.PC,
  color: COLORS.grayscale.white,
  overflow: 'hidden',
});

export const titleType = styleVariants({
  dark: [title, { color: COLORS.grayscale.white }],
  bright: [title, { color: COLORS.grayscale.black }],
});
