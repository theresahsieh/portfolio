import { unstable_createMuiStrictModeTheme as createMuiTheme }  from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#467fcf' },
    background: {
      default: "#ffffff"
    },
  },
  typography: {
    fontFamily: [
      "Lato",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif"
    ].join(","),
    h1: {
      fontSize: "2.8rem",
      lineHeight:"3.5rem",
      fontWeight: 700,
      marginTop:"1rem",
      marginBottom: "1.5rem"
    },
    h2: {
      fontSize: "2rem",
      lineHeight:"2.8rem",
      fontWeight: 700,
      marignBottom: "2.5"
    },
    h3: {
      fontSize: "1.5rem",
      lineHeight:"2.5rem",
      fontWeight: 700,
      margin: "3rem 0 1rem 0"
    },
    h4: {
      fontSize: "3rem",
      lineHeight:"4rem",
      letterSpacing:".001em"
    },
    h5: {
      fontSize: "1.5rem",
      lineHeight:"2.2rem",
      letterSpacing:".001em",
    },
    body2: {
      fontSize: "1.15rem",
      fontWeight: "400",
      lineHeight:"2rem",
      letterSpacing:".001em",
      marginTop: ".2rem",
      marginBottom: "1rem"
    },
    subtitle1: {
      fontSize: ".9rem",
      lineHeight:"1.4rem",
      letterSpacing:".001em",
      marginBottom:"1rem"
    }
  }
})
export default theme