import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const snapContainer = style({
  overflow: 'auto',
  scrollSnapType: 'y mandatory',
  height: 'calc(100vh - 70px - 50px - 15px)',
});

export const snapEl = style({
  scrollSnapAlign: 'start',
  scrollSnapStop: 'always',
});

export const writeSection = style({
  flex: '10',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});
export const assistantSection = style({
  flex: '7',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const styledAssistantTitle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});

export const styledAssistantContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const styledAssistantTitleType = styleVariants({
  title: [styledAssistantTitle, { ...TEXT_STYLES.body1B.PC }],
  desc: [
    styledAssistantTitle,
    { ...TEXT_STYLES.body2R.PC, color: COLORS.grayscale.gray7 },
  ],
});

export const btnSection = style({
  display: 'flex',
  justifyContent: 'flex-end',
});
export const btnWrapper = style({
  padding: '16px 20px',
  background: COLORS.grayscale.black,
  borderRadius: '12px',
  display: 'flex',
  width: '200px',
  alignItems: 'center',
});
export const btnText = style({
  ...TEXT_STYLES.body2R.PC,
  color: COLORS.grayscale.white,
  width: '80%',
  textAlign: 'center',
  lineHeight: '24px',
});
export const btnIcon = style({
  width: '20%',
});
export const title = style({
  ...TEXT_STYLES.brand1B.PC,
  whiteSpace: 'pre-line',
});

export const writeUtilElWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});
export const line = style({
  marginLeft: '30px',
  flex: 1,
  minHeight: '60px',
  borderLeft: `2px solid ${COLORS.grayscale.black}`,
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

export const wrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
  height: '80vh',
});

export const text = style({
  color: COLORS.grayscale.gray8,
  whiteSpace: 'pre-line',
  ...TEXT_STYLES.brand1B.PC,
});
export const vertiline = style({
  borderTop: `1px solid ${COLORS.grayscale.black}`,
  flex: '1',
});
export const btn = style({
  ...TEXT_STYLES.brand5R.PC,
  padding: '10px 30px',
  borderRadius: '50px',
  display: 'inline-block',
  cursor: 'pointer',
  transition: '0.5s',
  background: COLORS.grayscale.black,
  color: COLORS.grayscale.gray1,
  height: '40px',
});
