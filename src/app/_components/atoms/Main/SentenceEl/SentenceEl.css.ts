import { COLORS, TEXT_STYLES } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  alignItems: 'center',
  justifyContent: 'center',
  height: '255px',
  padding: '20px',
});

export const wrapType = styleVariants({
  dark: [
    wrap,
    { background: COLORS.grayscale.gray1, width: '33.3%', height: '255px' },
  ],
  bright: [
    wrap,
    { background: COLORS.grayscale.white, width: '33.3%', height: '255px' },
  ],
  admin: [
    wrap,
    { background: COLORS.grayscale.white, width: '100%', height: '510px' },
  ],
});

export const line = style({
  borderTop: `1px solid ${COLORS.brand.tertiary}`,
  width: '65px',
});

export const base = style({
  color: COLORS.grayscale.gray8,
  textAlign: 'center',
});

export const textType = styleVariants({
  author: [base, { ...TEXT_STYLES.brand6R.PC }],
  content: [base, { ...TEXT_STYLES.brand5R.PC }],
});
