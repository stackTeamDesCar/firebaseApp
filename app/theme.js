import { createMuiTheme } from '@material-ui/core/styles';

const primary = '#4EAFBA';

const theme = createMuiTheme({
    palette: {
        primary: {
          main: primary,
          contrastText: '#ffffff'
        },
        text: {
          primary:'#ffffff',
      },
    },
    colors: {
        primary,
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 500,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
          fontWeight: 700,
          fontSize: '60px',
          lineHeight: '68px',
          '@media (max-width:767px)': {
            fontSize: '44px',
            lineHeight: '52px',
          },
        },
}
});

export default theme;
