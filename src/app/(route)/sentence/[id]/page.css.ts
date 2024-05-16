import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { TEXT_STYLES, COLORS } from '@/app/_constant';

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  gap: '100px',
});

export const buttonContainer = style({
  display: 'flex',
  gap: '16px',
  padding: '20px',
  flex: 1,
});

export const storyContainer = style({
  display: 'flex',
  gap: '15px',
  flexDirection: 'column',
});

export const title = style({
  ...TEXT_STYLES.brand1B.PC,
  whiteSpace: 'pre-line',
  flex: 1,
});

export const titleType = styleVariants({
  main: [title, { ...TEXT_STYLES.brand1B.PC }],
  feedback: [
    title,
    { ...TEXT_STYLES.brand2R.PC, lineHeight: '120%', padding: '0px 50px' },
  ],
  desc: [
    title,
    {
      ...TEXT_STYLES.brand5R.PC,
      paddingRight: '20px',
      textAlign: 'right',
      cursor: 'pointer',

      ':hover': {
        color: COLORS.grayscale.gray6,
        transition: '.2s',
      },
    },
  ],
});

export const scroll = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '50px',
});

export const imgContainer = style({
  flex: 1,
  overflow: 'hidden',
  borderRadius: '16px',
  maxHeight: '250px',
});

export const sign = style({
  width: '120px',
  height: '80px',
  marginLeft: 'auto',
  objectFit: 'contain',
});

export const storyContent = style({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
});

export const storyService = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const storyServiceButtonContainer = style({
  display: 'flex',
  gap: '16px',
  flex: 1,
  minWidth: '430px',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

export const base = style({
  color: COLORS.grayscale.gray8,
});

export const textType = styleVariants({
  author: [
    base,
    {
      ...TEXT_STYLES.brand4R.PC,
    },
  ],
  content: [
    base,
    { fontFamily: 'KoPubWorldBatang', fontSize: '30px', lineHeight: '180%' },
  ],
});

export const maxWidth = style({
  maxWidth: '800px',
  margin: '0 auto',
  width: '100%',
});

export const post = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '30px',
  gap: '30px',
  flex: '1',
  height: '600px',
});
export const postImg = style({
  width: '100%',
  height: '500px',
});
export const lineImg = style({
  width: '56px',
  height: '600px',
});
export const quoteImg = style({
  width: '44px',
  height: '44px',
});
export const postCaption = style({
  ...TEXT_STYLES.brand5R.PC,
});
export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  justifyContent: 'center',
  flex: '1',
  padding: '0px 70px',
  height: '600px',
});
