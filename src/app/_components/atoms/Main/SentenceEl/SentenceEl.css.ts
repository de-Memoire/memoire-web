import { COLORS, TEXT_STYLES } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '20px',
  opacity: '0',
  cursor: 'pointer',
});

export const wrapType = styleVariants({
  dark: [
    wrap,
    { background: COLORS.grayscale.gray1, width: '33.3%', height: '50%' },
  ],
  bright: [
    wrap,
    { background: COLORS.grayscale.white, width: '33.3%', height: '50%' },
  ],
  admin: [
    wrap,
    { background: COLORS.grayscale.white, width: '100%', height: '100%' },
  ],
});

export const line = style({
  borderTop: `1px solid ${COLORS.brand.tertiary}`,
  width: '65px',
});

export const base = style({
  color: COLORS.grayscale.gray8,
  textAlign: 'center',

  transition: '.5s',
  ':hover': {
    opacity: '0.6',
    transform: 'scale(1.05)',
  },
});

export const textType = styleVariants({
  author: [base, { ...TEXT_STYLES.brand6R.PC }],
  content: [base, { ...TEXT_STYLES.brand5R.PC }],
});
