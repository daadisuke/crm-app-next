'use client';

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { colorSchemes, typography } from './themePrimitives';
import { inputsCustomizations } from './customizations/inputs';
import { feedbackCustomizations } from './customizations/feedback';
import { navigationCustomizations } from './customizations/navigation';
import { dataDisplayCustomizations } from './customizations/dataDisplay';
import { surfacesCustomizations } from './customizations/surfaces';
import { othersCustomizations } from './customizations/others';

interface AppThemeProps {
  children: React.ReactNode;
  /**
   * This is for the docs site. You can ignore it or remove it.
   */
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
}

function createEmotionCache() {
  return createCache({ key: 'css' });
}

export const theme = createTheme({
  // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
  cssVariables: {
    colorSchemeSelector: 'data-mui-color-scheme',
    cssVarPrefix: 'template'
  },
  ...colorSchemes.light,
  typography,
  components: {
    ...dataDisplayCustomizations,
    ...feedbackCustomizations,
    ...inputsCustomizations,
    ...navigationCustomizations,
    ...surfacesCustomizations,
    ...othersCustomizations
  }
});

export default function AppTheme({ children }: AppThemeProps) {
  const cache = React.useMemo(() => createEmotionCache(), []);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme} disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

