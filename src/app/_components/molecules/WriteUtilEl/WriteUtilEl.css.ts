import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  gap: '10px',
});

export const InfoIcon = style({
  flex: '1',
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: '5',
  maxHeight: '60px',
  gap: '5px',
});

export const infoTitle = style({
  ...TEXT_STYLES.title3R.PC,
});

export const infoSubTitle = style({
  ...TEXT_STYLES.cap1L.PC,
  color: COLORS.brand.secondary,
});

export const DropdownContainer = style({
  flex: '10',
});
export const DropdownContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: '60px',
  cursor: 'pointer',
});
export const DropdownIitle = style({
  ...TEXT_STYLES.body2L.PC,
  color: COLORS.brand.secondary,
  width: '90%',
  textAlign: 'center',
});
export const DropdownIcon = style({
  width: '10%',
});

export const lineBox = style({
  flex: '6',
  marginLeft: '30px',
  borderLeft: '2px solid #000',
});
export const childrenBox = style({
  flex: '10',
});

export const lineBoxType = styleVariants({
  longer: [lineBox, { minHeight: '300px' }],
  long: [lineBox, { minHeight: '120px' }],
  short: [lineBox, { minHeight: '60px' }],
});
