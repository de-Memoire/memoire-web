import { COLORS, TEXT_STYLES } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '90px',
  padding: '20px 16px',
  borderRadius: '12px',
  border: `1px solid ${COLORS.grayscale.gray1}`,
  cursor: 'pointer',
  transition: '.2s',

  ':hover': {
    background: COLORS.grayscale.gray1,
  },
});

export const content = style({
  flex: '1',
  display: 'flex',
  gap: '8px',
  flexDirection: 'column',
});

export const textType = styleVariants({
  title: {
    // whiteSpace: 'nowrap',
    // textOverflow: 'ellipsis',
    color: COLORS.grayscale.black,
    ...TEXT_STYLES.brand5R.PC,
  },
  desc: {
    color: COLORS.grayscale.gray7,
    ...TEXT_STYLES.cap1L.PC,
  },
});

export const service = style({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'space-between',
});
