import { TEXT_STYLES, COLORS } from '@/app/_constant';
import { keyframes, style, styleVariants } from '@vanilla-extract/css';

export const wrap = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '30px',
  padding: '0px 50px 50px 50px',
  height: '100%',
});

export const wrapType = styleVariants({
  bg: [
    wrap,
    {
      background:
        'url("/assets/main/2.svg") 100% center / 800px 600px no-repeat',
    },
  ],
});

export const base = style({
  color: COLORS.grayscale.gray8,
  width: '100%',
  whiteSpace: 'pre-line',
});

export const textType = styleVariants({
  big: [base, { ...TEXT_STYLES.brand1B.PC, textAlign: 'left' }],
  small: [base, { ...TEXT_STYLES.brand3R.PC, textAlign: 'center' }],
});

// const fadeInOut = keyframes({
//   '0%': { opacity: '0' },
//   '25%': { opacity: '1' },
//   '75%': { opacity: '1' },
//   '100%': { opacity: '0' },
// });

// export const fade = style({
//   animationName: fadeInOut,
//   animationDuration: '8s infinite',
// });

// export const bgImage = style({
//   position: 'absolute',
//   top: '0',
//   left: '0',
//   width: '100%',
//   height: '100%',
//   backgroundSize: 'cover',
//   animation: `${fade} 3s`,
// });
