import { createTheme, alpha, Shadows } from '@mui/material/styles';
import React from 'react';

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    highlighted: true;
  }
}
declare module '@mui/material/styles/createPalette' {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  // interface PaletteColor extends ColorRange {}

  interface Palette {
    baseShadow: string;
  }
}

const defaultTheme = createTheme();

export const brand = {
  50: 'hsla(148, 90%, 96%, 1)',
  100: 'hsla(145, 84%, 90%, 1)',
  200: 'hsla(149, 82%, 80%, 1)',
  300: 'hsla(153, 76%, 67%, 1)',
  400: 'hsla(154, 68%, 52%, 1)',
  500: 'hsla(156, 90%, 39%, 1)',
  600: 'hsla(158, 100%, 31%, 1)',
  700: 'hsla(159, 100%, 24%, 1)',
  800: 'hsla(159, 94%, 20%, 1)',
  900: 'hsla(160, 90%, 16%, 1)'
};

export const black = {
  50: 'hsla(0, 0%, 20%, 0.05)',
  100: 'hsla(0, 0%, 20%, 0.1)',
  200: 'hsla(0, 0%, 20%, 0.2)',
  300: 'hsla(0, 0%, 20%, 0.3)',
  400: 'hsla(0, 0%, 20%, 0.4)',
  500: 'hsla(0, 0%, 20%, 0.5)',
  600: 'hsla(0, 0%, 20%, 0.6)',
  700: 'hsla(0, 0%, 20%, 0.7)',
  800: 'hsla(0, 0%, 20%, 0.8)',
  900: 'hsla(0, 0%, 20%, 0.9)',
  1000: 'hsla(0, 0%, 20%, 1)'
};

export const gray = {
  50: '#F6F6F7',
  100: '#EFEFF0',
  200: '#E1E1E4',
  300: '#C8C8CC',
  400: '#BABABF',
  500: '#A8A7AD',
  600: '#949299',
  700: '#7E7E84',
  800: '#68676C',
  900: '#575659'
};

export const green = brand;

export const yellow = {
  50: 'hsla(41, 80%, 96%, 1)',
  100: 'hsla(41, 79%, 89%, 1)',
  200: 'hsla(41, 78%, 77%, 1)',
  300: 'hsla(39, 79%, 65%, 1)',
  400: 'hsla(36, 78%, 55%, 1)',
  500: 'hsla(31, 75%, 50%, 1)',
  600: 'hsla(25, 77%, 44%, 1)',
  700: 'hsla(19, 74%, 37%, 1)',
  800: 'hsla(16, 68%, 31%, 1)',
  900: 'hsla(15, 63%, 26%, 1)'
};

export const orange = {
  50: '#FFFAEA',
  100: '#FFF2C5',
  200: '#FFE586',
  300: '#FFD046',
  400: '#FFBB1C',
  500: '#FD9601',
  600: '#E17000',
  700: '#BB4B02',
  800: '#973A09',
  900: '#7C300B'
};

export const red = {
  50: 'hsla(6, 71%, 97%, 1)',
  100: 'hsla(6, 70%, 95%, 1)',
  200: 'hsla(3, 69%, 90%, 1)',
  300: 'hsla(3, 68%, 82%, 1)',
  400: 'hsla(1, 67%, 71%, 1)',
  500: 'hsla(0, 64%, 60%, 1)',
  600: 'hsla(357, 55%, 50%, 1)',
  700: 'hsla(355, 59%, 43%, 1)',
  800: 'hsla(353, 57%, 35%, 1)',
  900: 'hsla(352, 54%, 30%, 1)'
};

export const mint = {
  50: 'hsla(166, 76%, 97%, 1)',
  100: 'hsla(148, 87%, 91%, 1)',
  200: 'hsla(154, 87%, 82%, 1)',
  300: 'hsla(160, 77%, 71%, 1)',
  400: 'hsla(165, 66%, 60%, 1)',
  500: 'hsla(171, 68%, 46%, 1)',
  600: 'hsla(177, 73%, 39%, 1)',
  700: 'hsla(182, 77%, 32%, 1)',
  800: 'hsla(188, 81%, 25%, 1)',
  900: 'hsla(194, 86%, 20%, 1)'
};

export const coral = {
  50: 'hsla(23, 89%, 96%, 1)',
  100: 'hsla(23, 94%, 94%, 1)',
  200: 'hsla(18, 94%, 88%, 1)',
  300: 'hsla(13, 88%, 81%, 1)',
  400: 'hsla(8, 83%, 75%, 1)',
  500: 'hsla(2, 79%, 67%, 1)',
  600: 'hsla(357, 55%, 55%, 1)',
  700: 'hsla(352, 54%, 43%, 1)',
  800: 'hsla(347, 62%, 33%, 1)',
  900: 'hsla(341, 71%, 26%, 1)'
};

export const colorSchemes = {
  light: {
    palette: {
      primary: {
        light: brand[500],
        main: brand[600],
        dark: brand[700],
        contrastText: brand[50],
        hover: alpha(brand[600], 0.04),
        selected: alpha(brand[600], 0.08),
        focus: alpha(brand[600], 0.12),
        support: alpha(brand[600], 0.1),
        supportHover: alpha(brand[600], 0.14),
        supportSelected: alpha(brand[600], 0.18)
      },
      warning: {
        light: yellow[500],
        main: yellow[600],
        dark: yellow[800],
        support: alpha(yellow[400], 0.14),
        supportHover: alpha(yellow[400], 0.18)
      },
      error: {
        light: red[400],
        main: red[500],
        dark: red[700],
        support: alpha(red[500], 0.14)
      },
      success: {
        light: brand[500],
        main: brand[600],
        dark: brand[700]
      },
      grey: {
        ...black
      },
      divider: 'hsla(240, 1%, 47%, 0.4)',
      background: {
        default: gray[50],
        primary: 'hsl(0, 0%, 100%)',
        secondary: gray[50],
        paper: 'hsl(0, 0%, 100%)'
      },
      text: {
        primary: black[1000],
        secondary: black[600],
        tertiary: black[500],
        disabled: black[300],
        warning: yellow[400]
      },
      action: {
        active: black[1000],
        disabled: black[300],
        hover: alpha(black[1000], 0.04),
        selected: `${alpha(black[1000], 0.08)}`,
        focus: `${alpha(black[1000], 0.12)}`,
        focusVisible: `${alpha(black[1000], 0.3)}`,
        disableBackground: `${alpha(black[1000], 0.12)}`,
        support: `${alpha(black[1000], 0.14)}`
      },
      baseShadow:
        'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px'
    }
  },
  dark: {
    palette: {
      primary: {
        contrastText: brand[50],
        light: brand[300],
        main: brand[400],
        dark: brand[700]
      },
      info: {
        contrastText: brand[300],
        light: brand[500],
        main: brand[700],
        dark: brand[900]
      },
      warning: {
        light: yellow[400],
        main: yellow[500],
        dark: yellow[700]
      },
      error: {
        light: red[400],
        main: red[500],
        dark: red[700]
      },
      success: {
        contrastText: brand[50],
        light: brand[300],
        main: brand[400],
        dark: brand[700]
      },
      grey: {
        ...black
      },
      divider: alpha(black[700], 0.6),
      background: {
        default: black[900],
        paper: 'hsl(220, 30%, 7%)'
      },
      text: {
        primary: 'hsl(0, 0%, 100%)',
        secondary: black[400]
      },
      action: {
        hover: alpha(black[600], 0.2),
        selected: alpha(black[600], 0.3)
      },
      baseShadow:
        'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
    }
  }
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    caption2: true;
  }
}

export const typography = {
  fontFamily: [
    '-apple-system, BlinkMacSystemFont, "Yu Gothic", "Yu Gothic Medium", "sans-serif"'
  ].join(','),
  h1: {
    fontSize: defaultTheme.typography.pxToRem(28),
    fontWeight: 700,
    lineHeight: '42px'
  },
  h2: {
    fontSize: defaultTheme.typography.pxToRem(24),
    fontWeight: 700,
    lineHeight: '36px'
  },
  h3: {
    fontSize: defaultTheme.typography.pxToRem(20),
    fontWeight: 700,
    lineHeight: '30px'
  },
  h4: {
    fontFamily: [
      '-apple-system, BlinkMacSystemFont, "Yu Gothic Medium", "Yu Gothic", "sans-serif"'
    ].join(','),
    fontSize: defaultTheme.typography.pxToRem(18),
    fontWeight: 500,
    lineHeight: '30px'
  },
  h5: {
    fontSize: defaultTheme.typography.pxToRem(18),
    fontWeight: 700,
    lineHeight: '27px'
  },
  h6: {
    fontFamily: [
      '-apple-system, BlinkMacSystemFont, "Yu Gothic Medium", "Yu Gothic", "sans-serif"'
    ].join(','),
    fontSize: defaultTheme.typography.pxToRem(18),
    fontWeight: 500,
    lineHeight: '27px'
  },
  subtitle1: {
    fontSize: defaultTheme.typography.pxToRem(16),
    lineHeight: '24px'
  },
  subtitle2: {
    fontSize: defaultTheme.typography.pxToRem(16),
    fontWeight: 600,
    lineHeight: '24px'
  },
  body1: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 500,
    lineHeight: '21px'
  },
  body2: {
    fontFamily: [
      '-apple-system, BlinkMacSystemFont, "Yu Gothic Medium", "Yu Gothic", "sans-serif"'
    ].join(','),
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 700,
    lineHeight: '21px'
  },
  caption1: {
    fontSize: defaultTheme.typography.pxToRem(12),
    fontWeight: 500,
    lineHeight: '18px'
  },
  caption2: {
    fontFamily: [
      '-apple-system, BlinkMacSystemFont, "Yu Gothic Medium", "Yu Gothic", "sans-serif"'
    ].join(','),
    fontSize: defaultTheme.typography.pxToRem(12),
    fontWeight: 700,
    lineHeight: '18px'
  }
};

export const shape = {
  borderRadius: 8
};

// @ts-expect-error: 説明
const defaultShadows: Shadows = [
  'var(--mui-palette-baseShadow)',
  ...defaultTheme.shadows.slice(1)
];
export const shadows = defaultShadows;

// support 定義を追加
declare module '@mui/material/styles' {
  interface PaletteColor {
    support?: string;
  }

  interface SimplePaletteColorOptions {
    support?: string;
  }
}

