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
      fontSize: "3rem",
      lineHeight:"4rem",
      fontWeight: 700,
      marginTop:"1rem",
      marginBottom: "1.5rem"
    },
    h2: {
      fontSize: "2.25rem",
      lineHeight:"3rem",
      fontWeight: 700,
      marignBottom: "2.5"
    },
    h3: {
      fontSize: "1.5rem",
      lineHeight:"2.5rem",
      fontWeight: 700,
      margin: "3rem 0 1.3rem 0"
    },
    h4: {
      fontSize: "3rem",
      lineHeight:"4rem",
      letterSpacing:".001em"
    },
    h5: {
      fontSize: "1.5rem",
      lineHeight:"2.5rem",
      letterSpacing:".001em",
    },
    body2: {
      fontSize: "1.25rem",
      lineHeight:"2rem",
      letterSpacing:".001em",
      marginTop: ".2rem",
      marginBottom: "1rem"
    },
    subtitile1: {
      fontSize: "1rem",
      lineHeight:"1.5rem",
      letterSpacing:".001em",
      marginBottom:"1rem"
    }
  }
})
export default theme