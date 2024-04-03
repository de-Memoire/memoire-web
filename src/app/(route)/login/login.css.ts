import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

export const login = style({
  minWidth: '498px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '20px',

  '@media': {
    'screen and (max-width: 498px)': {
      minWidth: '100%',
    },
  },
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
