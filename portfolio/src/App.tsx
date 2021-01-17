import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Projects from "./Pages/Projects.js";
import Resume from "./Pages/Resume.js";
import About from "./Pages/About.js";

import ProjectDetail from "./Pages/ProjectDetailPage";
import { ProjectDetailContent } from "./Pages/ProjectDetailContent";

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <div style={{ height: "64px" }} />
            <Switch>
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/projects/pecss">
                    <ProjectDetail
                        content={ProjectDetailContent.pecss}
                    ></ProjectDetail>
                </Route>
                <Route exact path="/projects/peq">
                    <ProjectDetail
                        content={ProjectDetailContent.peq}
                    ></ProjectDetail>
                </Route>
                <Route exact path="/projects/klix">
                    <ProjectDetail
                        content={ProjectDetailContent.klix}
                    ></ProjectDetail>
                </Route>
                <Route exact path="/projects/reflect">
                    <ProjectDetail
                        content={ProjectDetailContent.reflect}
                    ></ProjectDetail>
                </Route>
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
            <Footer />
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
