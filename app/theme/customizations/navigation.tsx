import { Theme, Components } from '@mui/material/styles';
import { green, typography } from '../themePrimitives';

export const navigationCustomizations: Components<Theme> = {
  MuiBreadcrumbs: {
    styleOverrides: {
      root: {},
      ol: {
        height: 32
      },
      li: ({ theme }) => ({
        '.MuiLink-root': {
          textDecorationColor: theme.palette.primary.dark,
          textUnderlineOffset: '6px'
        }
      }),
      separator: ({ theme }) => ({
        width: '24px',
        margin: 0,
        '& .MuiSvgIcon-root': {
          fontSize: '18px',
          margin: 'auto',
          color: theme.palette.text.primary
        }
      })
    }
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textUnderlineOffset: '4px',
        ':hover': {
          textDecorationThickness: '2px'
        },
        variants: [
          {
            props: {
              color: 'primary'
            },
            style: {
              color: green[700],
              textDecorationColor: green[700]
            }
          }
        ]
      }
    }
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: '8px'
      }
    }
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        ...typography.body1
      }
    }
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        minHeight: '42px'
      }
    }
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: '24px',
        paddingTop: '9px',
        paddingBottom: '9px',
        minHeight: '42px',
        color: theme.palette.text.primary
      })
    }
  }
};

