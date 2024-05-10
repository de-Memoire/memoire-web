import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style } from '@vanilla-extract/css';

export const wrap = style({
  width: '542px',
  maxWidth: '542px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  margin: '0 auto',
  height: 'calc(100vh - 70px - 50px)',
  overflow: 'hidden',

  '@media': {
    'screen and (max-width: 542px)': {
      minWidth: '100%',
      maxWidth: '100%',
      padding: '10px',
    },
  },
});

export const content = style({
  flex: '1',
  height: '100%',
});

export const buttonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  paddingTop: '60px',
});

export const logo = style({
  display: 'flex',
  alignItems: 'center',
});

export const title = style({
  ...TEXT_STYLES.brand1B.PC,
  whiteSpace: 'pre-line',
});

export const styledTextArea = style({
  ...TEXT_STYLES.brand5R.PC,
  color: COLORS.grayscale.gray8,
  width: '100%',
  border: 'none',

  resize: 'none',
  overflowY: 'hidden',
  height: '80%',

  ':focus': {
    outline: 'none',
  },

  '::placeholder': {
    color: COLORS.grayscale.gray7,
  },
});
