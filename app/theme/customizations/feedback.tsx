import { Theme, Components } from '@mui/material/styles';
import { black } from '../themePrimitives';

export const feedbackCustomizations: Components<Theme> = {
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiDialog-paper': {
          borderRadius: '8px'
        },
        '& .MuiDialogTitle-root': {
          ...theme.typography.h3
        },
        '& .MuiDialogActions-root': {
          padding: '16px 24px'
        }
      })
    }
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        whiteSpace: 'pre-wrap'
      }
    }
  },
  MuiAlert: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: '12px',
        color: black[1000],
        variants: [
          {
            props: {
              severity: 'error'
            },
            style: {
              backgroundColor: theme.palette.error.support
            }
          }
        ],
        '& .MuiSvgIcon-root': {
          fontSize: '18px'
        }
      }),
      message: ({ theme }) => ({
        ...theme.typography.body1,
        variants: [
          {
            props: {
              variant: 'success'
            },
            style: {
              color: theme.palette.text.primary
            }
          }
        ]
      })
    }
  },
  MuiAlertTitle: {
    styleOverrides: {
      root: ({ theme }) => ({
        ...theme.typography.body2
      })
    }
  }
};

