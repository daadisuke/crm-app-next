import { alpha, Theme, Components } from '@mui/material/styles';
import { black, brand, gray, typography } from '../themePrimitives';

export const inputsCustomizations: Components<Theme> = {
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        '& .MuiAutocomplete-inputRoot.MuiInputBase-root': {
          padding: '8px 39px 8px 12px'
        },
        '& .MuiAutocomplete-inputRoot.MuiInputBase-sizeLarge': {
          padding: '12px 39px 12px 12px'
        },
        '& .MuiOutlinedInput-root.MuiInputBase-sizeLarge .MuiAutocomplete-input, & .MuiOutlinedInput-input.MuiAutocomplete-input':
          {
            padding: '1.5px 0px'
          }
      },
      endAdornment: {
        '& .MuiSvgIcon-root': {
          fontSize: '18px'
        }
      },
      popupIndicator: {
        '& .MuiSvgIcon-root': {
          fontSize: '18px'
        }
      }
    }
  },
  MuiButtonBase: {
    defaultProps: {
      disableTouchRipple: true,
      disableRipple: true
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        ...typography.body2,
        variants: [
          {
            props: {
              size: 'small'
            },
            style: {
              minWidth: '32px',
              padding: '5.5px 10px',
              borderRadius: '6px'
            }
          },
          {
            props: {
              size: 'medium'
            },
            style: {
              padding: '9.5px 18.5px',
              borderRadius: '8px'
            }
          },
          {
            props: {
              size: 'large'
            },
            style: {
              padding: '13.5px 26.5px',
              borderRadius: '8px'
            }
          },
          // Text
          {
            props: {
              variant: 'contained'
            },
            style: {
              '&: hover': {
                backgroundColor: brand[700]
              },
              '&: active': {
                backgroundColor: brand[800]
              }
            }
          },
          // Primary, loading
          {
            props: {
              variant: 'contained',
              loading: true
            },
            style: {
              '&.Mui-disabled': {
                backgroundColor: brand[800]
              },
              '& .MuiButton-loadingIndicator': {
                color: 'white'
              }
            }
          },
          // Secondary
          {
            props: {
              variant: 'outlined'
            },
            style: {
              border: `1px solid ${alpha(brand[600], 0.5)}`,
              '&: hover': {
                backgroundColor: alpha(brand[600], 0.04)
              },
              '&: active': {
                backgroundColor: alpha(brand[600], 0.08)
              }
            }
          },
          // Secondary, loading
          {
            props: {
              variant: 'outlined',
              loading: true
            },
            style: {
              backgroundColor: alpha(brand[600], 0.12),
              '&.Mui-disabled': {
                border: `1px solid ${alpha(brand[600], 0.5)}`
              },
              '& .MuiButton-loadingIndicator': {
                color: brand[600]
              }
            }
          },
          // Text
          {
            props: {
              variant: 'text'
            },
            style: {
              '&: hover': {
                backgroundColor: alpha(brand[600], 0.04)
              },
              '&: active': {
                backgroundColor: alpha(brand[600], 0.08)
              }
            }
          },
          // Text, loading
          {
            props: {
              variant: 'text',
              loading: true
            },
            style: {
              backgroundColor: alpha(brand[600], 0.12),
              // '&.Mui-disabled': {
              //   border: `1px solid ${alpha(brand[600], 0.5)}`,
              // },
              '& .MuiButton-loadingIndicator': {
                color: brand[600]
              }
            }
          }
        ]
      },
      startIcon: {
        marginRight: '4px',
        '& .MuiSvgIcon-root': {
          fontSize: '18px'
        }
      },
      endIcon: {
        marginLeft: '4px',
        '& .MuiSvgIcon-root': {
          fontSize: '18px'
        }
      }
    }
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        padding: '0',
        '& .MuiSvgIcon-root': {
          fontSize: '18px'
        }
      }
    }
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        margin: 0,
        gap: 4,
        '& .MuiRadio-root': {
          padding: 0,
          margin: 0
        }
      },
      label: {
        padding: '10px 0',
        fontSize: '14px'
      }
    }
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        ...typography.body1,
        padding: '8px 12px',
        '&.MuiOutlinedInput-root': {
          borderRadius: '8px'
        },
        '&.Mui-disabled': {
          backgroundColor: gray[100]
        },
        variants: [
          {
            props: {
              size: 'small'
            },
            style: {
              padding: '4px 12px',
              borderRadius: '6px'
            }
          },
          {
            props: {
              size: 'large'
            },
            style: {
              padding: '12px'
            }
          },
          {
            props: {
              disabled: true
            },
            style: {
              '& .MuiInputBase-root': {
                backgroundColor: gray[100]
              }
            }
          }
        ]
      },
      input: {
        '&.MuiOutlinedInput-input': {
          padding: '1.5px 0px'
        }
      }
    }
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        padding: '4px',
        marginTop: '2px',
        marginLeft: '5px',
        '& .MuiSvgIcon-root': {
          fontSize: '18px'
        }
      }
    }
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        '&.Mui-disabled': {
          backgroundColor: gray[100]
        }
      },
      select: {
        padding: '8px 12px',
        lineHeight: '21px'
      },
      icon: {
        fontSize: '18px',
        right: '12px',
        '&.Mui-disabled': {
          color: black[300]
        }
      }
    }
  }
};

declare module '@mui/material/AutoComplete' {
  interface AutocompletePropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/InputBase' {
  interface InputBasePropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsSizeOverrides {
    xs: true;
    xl: true;
  }
}

declare module '@mui/material/FormControl' {
  interface FormControlPropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/Select' {
  interface SelectPropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    large: true;
  }
}

