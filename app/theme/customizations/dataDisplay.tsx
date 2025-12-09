import { Theme, Components } from '@mui/material/styles';
import { black, colorSchemes, typography } from '../themePrimitives';

export const dataDisplayCustomizations: Components<Theme> = {
  MuiChip: {
    styleOverrides: {
      root: {
        color: colorSchemes.light.palette.text.primary,
        backgroundColor: colorSchemes.light.palette.action.support,
        variants: [
          {
            props: {
              size: 'medium'
            },
            style: {
              ...typography.body2,
              '& .MuiChip-label': {
                paddingLeft: '8.5px',
                paddingRight: '8.5px'
              }
            }
          },
          {
            props: {
              size: 'small'
            },
            style: {
              ...typography.caption2,
              '& .MuiChip-label': {
                paddingLeft: '8px',
                paddingRight: '8px'
              }
            }
          },
          {
            props: {
              color: 'success'
            },
            style: {
              color: colorSchemes.light.palette.primary.main,
              backgroundColor: colorSchemes.light.palette.primary.support
            }
          },
          {
            props: {
              color: 'error'
            },
            style: {
              color: colorSchemes.light.palette.error.main,
              backgroundColor: colorSchemes.light.palette.error.support
            }
          },
          {
            props: {
              color: 'warning'
            },
            style: {
              color: colorSchemes.light.palette.warning.main,
              backgroundColor: colorSchemes.light.palette.warning.support
            }
          }
        ]
      }
    }
  },
  MuiTableContainer: {
    styleOverrides: {
      root: {
        borderRadius: '12px',
        boxShadow: 'none'
      }
    }
  },
  MuiTable: {
    styleOverrides: {
      root: {
        borderCollapse: 'separate'
      }
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderColor: colorSchemes.light.palette.divider
      },
      head: {
        ...typography.body2,
        backgroundColor: 'white'
      },
      body: {
        ...typography.body1
      }
    }
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        '& .MuiTableCell-root:first-of-type': {
          borderTopLeftRadius: 12
        },
        '& .MuiTableCell-root:last-of-type': {
          borderTopRightRadius: 12
        }
      }
    }
  },
  MuiTableBody: {
    styleOverrides: {
      root: {
        '.MuiTableRow-root:last-child td': {
          border: 0
        }
      }
    }
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        ...typography.caption2,
        backgroundColor: black[1000],
        borderRadius: '6px',
        whiteSpace: 'pre-wrap'
      },
      arrow: {
        '::before': {
          backgroundColor: black[1000]
        }
      }
    },
    defaultProps: {
      enterTouchDelay: 0,
      leaveTouchDelay: 9999999
    }
  }
};

