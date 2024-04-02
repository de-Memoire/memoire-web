import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const flexContainer = style({
  display: 'flex',
  gap: '50px',
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
