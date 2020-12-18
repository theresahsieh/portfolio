import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import Header from "./Header";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Projects from "./Pages/Projects.js";
import Resume from "./Pages/Resume.js";
import About from "./Pages/About.js";

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header/>
            <div style={{height:"64px"}}/>
            <Switch>
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/about" component={About} />
                <Route
                    exact
                    path="/"
                    render={() => {
                        return <Redirect to="/projects" />;
                    }}
                />
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
