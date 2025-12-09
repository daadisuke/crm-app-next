import { Theme, Components } from '@mui/material/styles';

export const surfacesCustomizations: Components<Theme> = {
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12
      }
    }
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        ':last-child': {
          paddingBottom: '16px'
        }
      }
    }
  },
  MuiPopover: {
    styleOverrides: {
      paper: {
        borderRadius: 12
      }
    }
  }
};

