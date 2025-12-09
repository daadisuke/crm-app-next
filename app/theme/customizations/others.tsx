import { Theme, Components } from '@mui/material/styles';

export const othersCustomizations: Components<Theme> = {
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 12
      }
    }
  },
  MuiDialogTitle: {
    defaultProps: {
      variant: 'h3'
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: '16px 24px'
      }
    }
  }
};

