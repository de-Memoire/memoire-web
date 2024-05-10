import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const el = style({
  flex: '1',
  textAlign: 'center',
  cursor: 'pointer',
  height: '42px',
  lineHeight: '42px',
});

export const elIsActive = styleVariants({
  false: [
    el,
    {
      borderBottom: `3px solid ${COLORS.grayscale.gray2}`,
      color: COLORS.grayscale.gray4,
    },
  ],
  true: [
    el,
    {
      borderBottom: `3px solid ${COLORS.grayscale.black} `,
      color: COLORS.grayscale.black,
    },
  ],
});
