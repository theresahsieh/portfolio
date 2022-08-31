import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Projects from "./Pages/Projects.js";
import About from "./Pages/About.js";
import ProjectDetail from "./Pages/ProjectDetailPage";
import { ProjectDetailContent } from "./Pages/ProjectDetailContent";
import MastercardDetails from "./Pages/MastercardDetails";
import PECSSDetails from "./Pages/PECSSDetails";
import FiservDetails from "./Pages/FiservDetails";
import KlixDetails from "./Pages/KlixDetails";

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <div style={{ height: "64px" }} />
            <Switch>
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/projects/pecss">
                    <PECSSDetails/>
                </Route>
                <Route exact path="/projects/fiserv">
                    <FiservDetails/>
                </Route>
                <Route exact path="/projects/mastercard">
                    <MastercardDetails/>
                </Route>
                <Route exact path="/projects/klix">
                    <KlixDetails/>
                </Route>
                <Route exact path="/about" component={About} />
                <Route
                    exact
                    path="/"
                    render={() => {
                        return <Redirect to="/projects" />;
                    }}
                />
            </Switch>
            <Footer />
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
