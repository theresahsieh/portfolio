import { Grid, Typography, makeStyles } from "@material-ui/core";
import OldNew from "./resources/Reflect/Old-New.png";
import Design1 from "./resources/Reflect/reflect-design1.png";
import Design2 from "./resources/Reflect/reflect-design2.png";
import Workplan from "./resources/Reflect/workplan.png";
import LogoSketches from "./resources/Reflect/logo-sketches.png";
import ReflectLogo from "./resources/Reflect/Reflect-logo.png";
import * as myStyles from "../MyStyles";


const imageStyle = {
    margin: "1rem auto",
    width: "90%",
    maxWidth: "1200px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "-2px 2px 4px 2px rgba(0,0,0,0.08)",
    display: "block",
};

const Reflect_BulletSquare = {
    ...myStyles.bulletSquare,
    backgroundColor:  "#2993FC"
}

const ReflectDetails = () => {
    return (
        <div>
            <span style={{ display: "inline-flex" }}>
                <span style={Reflect_BulletSquare} />
                <Typography
                    variant="h5"
                    component="h2"
                    style={myStyles.sectionHeader}
                >
                    Problem Space
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                    Wicked problems are problems that can be framed in a variety
                    of ways based on the perspective of the person looking at
                    them. These are difficult issues that don't have a clear
                    solution and pose serious ethical challenges in the world.
                    How do we deal with climate change, inequality, automation
                    in manufacturing?
                </Typography>
                <Typography variant="h6" component="p" style={myStyles.textBlock}>
                    In an educational setting, students presented with such
                    wicked problems may not know how to approach solving such
                    intricate issues. Who can you identify people affected by
                    the problem? How do you ethically consider the consequences
                    of your decision?
                </Typography>
                <span style={{ display: "inline-flex" }}>
                <span style={Reflect_BulletSquare} />
                <Typography
                    variant="h5"
                    component="h2"
                    style={myStyles.sectionHeader}
                >
                    Proposed Solution
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                    We propose Reflect! a web-based platform that guides small
                    teams through the Reflective Consensus Building (RCB).
                    Reflect! uses "Workplans" to provide a curriculum of
                    educational activities to promote both learning in
                    individual and team settings. Users are guided through the
                    argumentation process, including problem formulation,
                    identification and justification of stakeholders, and
                    symphysis proposal creation. The goal of Reflect! is to help
                    teams engage in self-corrective reasoning as they learn the
                    skills to approach complex ethical issues.
                </Typography>
                <img
                    src={ReflectLogo}
                    alt="Reflect! logo"
                    style={myStyles.logoImageStyle}
                />
                <Typography variant="h6" component="p" style={myStyles.textBlock}>
                    This is a National Science Foundation (NSF) funded project
                    and here are links to associated publications:
                    <ul>
                        <li>
                            <a
                                href="http://dx.doi.org/10.1007/s11245-019-09640-x"
                                style={{
                                    textDecoration: "none",
                                    color: "#1a6dbf",
                                }}
                                target="blank"
                            >
                                Consensus Building and its Epistemic Conditions
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://dx.doi:10.1007/s10503-017-9442-x"
                                style={{
                                    textDecoration: "none",
                                    color: "#1a6dbf",
                                }}
                                target="blank"
                            >
                                The Elusive Notion of "Argument Quality"
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://dx.doi.org/10.1007/s11948-019-00132-0"
                                style={{
                                    textDecoration: "none",
                                    color: "#1a6dbf",
                                }}
                                target="blank"
                            >
                                Reflective Consensus Building on Wicked Problems
                                on the Reflect! Platform
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://dx.doi.org/10.1007/s10503-017-9442-x"
                                style={{
                                    textDecoration: "none",
                                    color: "#1a6dbf",
                                }}
                                target="blank"
                            >
                                Stimulating Reflection and Self-Correcting
                                Reasoning Through Argument Mapping: Three
                                Approaches
                            </a>
                        </li>
                    </ul>
                </Typography>
            <span style={{ display:"inline-flex" }}>
                <span style={Reflect_BulletSquare} />
                <Typography
                    variant="h5"
                    component="h2"
                    style={myStyles.sectionHeader}
                >
                    Goals
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                My goal was to help redesign and rebrand the initial Reflect!
                platform. This included creating a new layout and logo along
                with building components for the development team.
            </Typography>
            <img
                src={OldNew}
                alt="Old screens and new layout"
                style={imageStyle}
            />
            <span style={{ display:"inline-flex" }}>
                <span style={Reflect_BulletSquare} />
                <Typography
                    variant="h5"
                    component="h2"
                    style={myStyles.sectionHeader}
                >
                    Designs
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                We hoped to change the navigation system for the platform to
                make it easier to use and improve the look and feel of the
                entire application. Feedback from usability tests indicated that
                the tab/subtab navigation on the website was a bit confusing and
                could be improved upon.
            </Typography>
            <Typography variant="h5" component="h4" style={myStyles.subHeader}>
                Design 1
            </Typography>
            <Grid container spacing={1} alignItems="top">
                <Grid
                    item
                    xs={12}
                    md={6}
                    style={{ verticalAlign: "middle" }}
                    lg={5}
                >
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlock}
                    >
                        Our first design addressed the tab/subtab concern by
                        creating a tree structure to the left with the Workplan
                        with more systematic navigation to the right. This
                        allows users to keep track of their progress within the
                        Workplan steps on the left while also being able to
                        easily access the tools needed to complete certain tasks
                        on the right. This design also more prominently features
                        the problem statement, which is important for users to
                        keep in mind at all times.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={7}>
                    <img
                        src={Design1}
                        alt="Reflect! design 1"
                        style={imageStyle}
                    />
                </Grid>
            </Grid>
            <Typography variant="h5" component="h4" style={myStyles.subHeader}>
                Design 2
            </Typography>
            <Grid container spacing={1} alignItems="top">
                <Grid
                    item
                    xs={12}
                    md={6}
                    style={{ verticalAlign: "middle" }}
                    lg={7}
                >
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlock}
                    >
                        The second design also chooses to display the 4 main
                        elements Problem Statement, Workplan, Stakeholder
                        Analysis, and Proposal on the main landing page. However,
                        we wanted to feature the Workplan in the middle to
                        emphasize the workflow process. We also decided to put a
                        navigation bar on the top to separate the pieces not
                        connected to the user's typical workflow, such as the
                        Team Info page, and external links such as the Glossary.
                        Additionally, we felt it would be aesthetically
                        pleasing to put an image on the Dashboard.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                    <img
                        src={Design2}
                        alt="Reflect! design 2"
                        style={imageStyle}
                    />
                </Grid>
            </Grid>
            <Typography variant="h5" component="h4" style={myStyles.subHeader}>
                Logo
            </Typography>

            <Grid container spacing={1} alignItems="top">
                <Grid item xs={12} sm={6}>
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlock}
                    >
                        When designing the logo, I wanted to emphasize the
                        importance of reflection and the cycle of
                        self-correction. I drew inspiration from images of
                        arrows, circular paths, and mirrors.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img
                        src={LogoSketches}
                        alt="Reflect! logo sketches"
                        style={imageStyle}
                    />
                </Grid>
            </Grid>

            <Typography variant="h5" component="h4" style={myStyles.subHeader}>
                Final Design
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                In our final design, we decided to go with our second design
                option. In the Workplans, users don't encounter the Stakeholder
                and Proposal Development tasks early on, so we decided it would
                be beneficial to hide these components until they reach that
                step in their Workplan. Therefore, if we had chosen the first
                design, more than half of the main page would have either been
                empty or had been filled with disabled buttons. However, using
                the second design avoids these issues since the Workplan is in
                the center of the page, so there would not be an imbalance in
                layout.
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                We kept the colored borders from the first design because we
                felt it provided a nice separation for the components from the
                background and allowed us to add a bit of Georgia Tech-inspired
                theming to the system.
            </Typography>
            <img
                src={Workplan}
                alt="Reflect! final design"
                style={imageStyle}
            />
            <span style={{ display:"inline-flex" }}>
                <span style={Reflect_BulletSquare} />
                <Typography
                    variant="h5"
                    component="h2"
                    style={myStyles.sectionHeader}
                >
                    Lessons Learned
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                This was my first project involving UI/UX and frontend
                development. In addition to learning React and GraphQL for
                developing components, I gained design experience planning
                navigation and layout. Furthermore, I learned prototyping tools
                such as AdobeXD.
            </Typography>
        </div>
    );
};

export default ReflectDetails;
