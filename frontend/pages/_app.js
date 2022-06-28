import '../styles/globals.css'
import { theme } from '../utils/theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';
function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>

    <Component {...pageProps} />

  </ThemeProvider>
  
}

export default MyApp
