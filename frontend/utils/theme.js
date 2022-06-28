import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
//   palette: {
//     primary: {
//       main: "",
//     },
//     secondary: {
//       main: "",
//     },
//   },
components: {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: 'h2',
        h2: 'h2',
        h3: 'h2',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'span',
        body2: 'span',
      },
    },
  },
},
  typography:{
    logo:{
        color:"grey",
        fontFamily:"Audiowide",
        fontSize:28
    },
    logoSmall:{
      color:"grey",
      fontFamily:"Audiowide",
      fontSize:18
  }
  }
});


