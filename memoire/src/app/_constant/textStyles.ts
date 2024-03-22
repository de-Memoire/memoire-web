export const TEXT_STYLE_NAME = {
  title1B: 'title1B',
  title2B: 'title2B',
  title3B: 'title3B',
  title3R: 'title3R',
  title4B: 'title4B',
  body1B: 'body1B',
  body1R: 'body1R',
  body2B: 'body2B',
  body2R: 'body2R',
  body2L: 'body2L',
  body3B: 'body3B',
  body3R: 'body3R',
  cap1L: 'cap1L',
  cap2B: 'cap2B',
  cap2R: 'cap2R',
  cap2L: 'cap2L',
  brand1B: 'brand1B',
  brand2R: 'brand2R',
  brand3R: 'brand3R',
  brand4R: 'brand4R',
  brand5R: 'brand5R',
  brand6R: 'brand6R',
} as const;

/**
 * TEXT_STYLE_NAME 타입
 */
export type TextStyleName =
  (typeof TEXT_STYLE_NAME)[keyof typeof TEXT_STYLE_NAME];

interface TextStyle {
  PC: {
    fontSize: number;
    fontWeight: number;
    lineHeight: string;
  };
  Mobile: {
    fontSize: number;
    fontWeight: number;
    lineHeight: string;
  };
}

const LINE_HEIGHT_RATIO = '120%';
const LINE_HEIGHT_RATIO_BIG = '150%';

/**
 * web 폰트 스타일 지정해주는 객체.
 */
export const TEXT_STYLES: Record<TextStyleName, TextStyle> = {
  [TEXT_STYLE_NAME.title1B]: {
    PC: {
      fontSize: 36,
      fontWeight: 700,
      lineHeight: LINE_HEIGHT_RATIO,
    },
    Mobile: {
      fontSize: 30,
      fontWeight: 700,
      lineHeight: LINE_HEIGHT_RATIO,
    },
  },
  [TEXT_STYLE_NAME.title2B]: {
    PC: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: LINE_HEIGHT_RATIO,
    },
    Mobile: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: LINE_HEIGHT_RATIO,
    },
  },
  [TEXT_STYLE_NAME.title3B]: {
    PC: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: LINE_HEIGHT_RATIO,
    },
    Mobile: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: LINE_HEIGHT_RATIO,
    },
  },
  [TEXT_STYLE_NAME.title3R]: {
    PC: {
      fontSize: 22,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO,
    },
    Mobile: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO,
    },
  },
  [TEXT_STYLE_NAME.title4B]: {
    PC: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: LINE_HEIGHT_RATIO,
    },
    Mobile: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: LINE_HEIGHT_RATIO,
    },
  },
  [TEXT_STYLE_NAME.body1B]: {
    PC: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: LINE_HEIGHT_RATIO,
    },
    Mobile: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: LINE_HEIGHT_RATIO,
    },
  },
  [TEXT_STYLE_NAME.body1R]: {
    PC: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO,
    },
    Mobile: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO,
    },
  },
  [TEXT_STYLE_NAME.body2B]: {
    PC: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: LINE_HEIGHT_RATIO,
    },
    Mobile: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: LINE_HEIGHT_RATIO,
    },
  },
  [TEXT_STYLE_NAME.body2R]: {
    PC: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO,
    },
    Mobile: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO,
    },
  },
  [TEXT_STYLE_NAME.body2L]: {
    PC: {
      fontSize: 16,
      fontWeight: 300,
      lineHeight: LINE_HEIGHT_RATIO,
    },
    Mobile: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: LINE_HEIGHT_RATIO,
    },
  },
  [TEXT_STYLE_NAME.body3B]: {
    PC: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: LINE_HEIGHT_RATIO,
    },
    Mobile: {
      fontSize: 12,
      fontWeight: 600,
      lineHeight: LINE_HEIGHT_RATIO,
    },
  },
  [TEXT_STYLE_NAME.body3R]: {
    PC: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO,
    },
    Mobile: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO,
    },
  },
  [TEXT_STYLE_NAME.cap1L]: {
    PC: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: LINE_HEIGHT_RATIO,
    },
    Mobile: {
      fontSize: 12,
      fontWeight: 300,
      lineHeight: LINE_HEIGHT_RATIO,
    },
  },
  [TEXT_STYLE_NAME.cap2B]: {
    PC: {
      fontSize: 12,
      fontWeight: 600,
      lineHeight: LINE_HEIGHT_RATIO,
    },
    Mobile: {
      fontSize: 10,
      fontWeight: 600,
      lineHeight: LINE_HEIGHT_RATIO,
    },
  },
  [TEXT_STYLE_NAME.cap2R]: {
    PC: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO,
    },
    Mobile: {
      fontSize: 10,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO,
    },
  },
  [TEXT_STYLE_NAME.cap2L]: {
    PC: {
      fontSize: 12,
      fontWeight: 300,
      lineHeight: LINE_HEIGHT_RATIO,
    },
    Mobile: {
      fontSize: 10,
      fontWeight: 300,
      lineHeight: LINE_HEIGHT_RATIO,
    },
  },
  [TEXT_STYLE_NAME.brand1B]: {
    PC: {
      fontSize: 48,
      fontWeight: 700,
      lineHeight: LINE_HEIGHT_RATIO_BIG,
    },
    Mobile: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: LINE_HEIGHT_RATIO_BIG,
    },
  },
  [TEXT_STYLE_NAME.brand2R]: {
    PC: {
      fontSize: 40,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO_BIG,
    },
    Mobile: {
      fontSize: 36,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO_BIG,
    },
  },
  [TEXT_STYLE_NAME.brand3R]: {
    PC: {
      fontSize: 30,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO_BIG,
    },
    Mobile: {
      fontSize: 26,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO_BIG,
    },
  },
  [TEXT_STYLE_NAME.brand4R]: {
    PC: {
      fontSize: 20,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO_BIG,
    },
    Mobile: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO_BIG,
    },
  },
  [TEXT_STYLE_NAME.brand5R]: {
    PC: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO_BIG,
    },
    Mobile: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO_BIG,
    },
  },
  [TEXT_STYLE_NAME.brand6R]: {
    PC: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO_BIG,
    },
    Mobile: {
      fontSize: 10,
      fontWeight: 400,
      lineHeight: LINE_HEIGHT_RATIO_BIG,
    },
  },
};
