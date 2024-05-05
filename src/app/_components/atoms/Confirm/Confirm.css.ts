import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  borderRadius: '10px',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '10px 0px 0px',
  overflow: 'hidden',
  maxWidth: '500px',
});

export const optionContainer = style({
  display: 'flex',
  marginTop: '10px',
  height: '80px',
});

export const title = style({
  ...TEXT_STYLES.title3R.PC,
});

export const icon = style({
  textAlign: 'right',
  width: '22px',
  minHeight: '22px',
  marginLeft: 'auto',
  marginRight: '10px',
  cursor: 'pointer',

  ':hover': {
    opacity: '0.5',
  },
});

export const base = style({
  ...TEXT_STYLES.brand5R.PC,
  flex: '1',
  lineHeight: '80px',
  textAlign: 'center',
  minWidth: '255px',
  cursor: 'pointer',
  transition: '.2s',

  ':hover': {
    opacity: '0.5',
  },
});

export const options = styleVariants({
  left: [
    base,
    { color: COLORS.grayscale.black, background: COLORS.grayscale.gray3 },
  ],
  right: [
    base,
    { color: COLORS.grayscale.white, background: COLORS.grayscale.gray8 },
  ],
});
