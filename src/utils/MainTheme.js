import { createMuiTheme } from "@material-ui/core/styles"

const PublicSans = {
  fontFamily: "Public Sans', sans-serif",
}

const BLACK = "#000000"
const DARK_GREY = "#373733"

const MainTheme = createMuiTheme({
  palette: {
    background: {
      default: "rgb(245, 245, 245)",
    },
    text: {
      primary: BLACK,
      secondary: DARK_GREY,
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#0B54C1",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#E10098",
      // dark: will be calculated from palette.secondary.main,
    },
  },
  typography: {
    h1: {
      ...PublicSans,
    },
    h2: {
      ...PublicSans,
    },
    h3: {
      ...PublicSans,
    },
    h4: {
      ...PublicSans,
    },
    h5: {
      ...PublicSans,
    },
    h6: {
      ...PublicSans,
    },
    body1: {
      ...PublicSans,
    },
    body2: {
      ...PublicSans,
    },
    subtitle1: {
      ...PublicSans,
    },
  },
})
export default MainTheme
