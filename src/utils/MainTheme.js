import { createMuiTheme } from '@material-ui/core/styles'

const Dosis = {
  fontFamily: 'Dosis, sans-serif;'
}
const OpenSans = {
  fontFamily: 'Public Sans, sans-serif;'
}

const BLACK = '#000000'
const DARK_GREY = '#373733'

const MainTheme = createMuiTheme({
  palette: {
    background: {
      default: 'rgb(245, 245, 245)'
    },
    text: {
      primary: BLACK,
      secondary: DARK_GREY
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#0B54C1'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#E10098'
      // dark: will be calculated from palette.secondary.main,
    }
  },
  typography: {
    h1: {
      ...Dosis
    },
    h2: {
      ...Dosis
    },
    h3: {
      ...Dosis
    },
    h4: {
      ...Dosis
    },
    h5: {
      ...Dosis
    },
    h6: {
      ...Dosis
    },
    body1: {
      ...OpenSans
    },
    body2: {
      ...OpenSans
    },
    subtitle1: {
      ...OpenSans
    }
  }
})
export default MainTheme
