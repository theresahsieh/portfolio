import { Grid, Typography, makeStyles } from "@material-ui/core";
import OldNew from "./resources/Reflect/Old-New.png";
import Design1 from "./resources/Reflect/reflect-design1.png";
import Design2 from "./resources/Reflect/reflect-design2.png";
import Workplan from "./resources/Reflect/workplan.png";
import LogoSketches from "./resources/Reflect/logo-sketches.png";

const useStyles = makeStyles({
    title: {
        margin: "1.5rem 0 1.5rem 0",
        fontWeight: "bold",
    },
    problemStatement: {
        fontStyle: "italic",
    },
    container: {
        width: "80%",
        marginRight: "10%",
        marginLeft: "10%",
    },
    subheader: {
        fontWeight: "bold",
    },
    sectionHeader: {
        fontWeight: "bold",
        display: "inline-flex",
        paddingLeft: ".5rem",
        verticalAlign: "top",
    },
    textBlock: {
        fontWeight: "normal",
        margin: "1rem 0 1rem 0",
    },
});

const textBlockStyle = {
    fontWeight: "normal",
    margin: "1rem 0 1rem 0",
};
const listStyle = {
    fontWeight: "normal",
    fontSize: "16px",
};
const subHeaderStyle = {
    fontWeight: "450",
    margin: "1rem 0 1rem 0",
    fontSize: "22px",
};

const solutionImageStyle = {
    margin: "1rem auto",
    width: "90%",
    maxWidth: "600px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "-2px 2px 4px 2px rgba(0,0,0,0.08)",
    display: "block",
};

const imageStyle = {
    margin: "1rem auto",
    width: "90%",
    maxWidth: "1200px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "-2px 2px 4px 2px rgba(0,0,0,0.08)",
    display: "block",
};
const bookStyle = {
    margin: "1rem auto",
    width: "90%",
    maxWidth: "200px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "-2px 2px 4px 2px rgba(0,0,0,0.08)",
    display: "block",
};

const screenStyle = {
    margin: "1rem auto",
    width: "96%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "-2px 2px 4px 2px rgba(0,0,0,0.08)",
    display: "block",
};

const blockStyle = {
    backgroundColor: "#2993FC",
    height: "2rem",
    width: "2rem",
    borderRadius: "6px",
    display: "inline-flex",
};

const ReflectDetails = () => {
    const classes = useStyles();
    return (
        <div>
            <span style={{ verticalAlign: "top" }}>
                <span style={blockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Goals
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                My goal was to help redesign and rebrand the inital Reflect!
                platform. This included creating a new layout and logo along
                with building components for the development team.
            </Typography>
            <img
                src={OldNew}
                alt="Old screens and new layout"
                style={imageStyle}
            />
            <span style={{ verticalAlign: "top" }}>
                <span style={blockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Designs
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                We hoped to change the navigation system for the platform to
                make it easier to use and improve the look and feel of the
                entire application. Feedback from usability tests indicated that
                the tab/subtab navigation on the website was a bit confusing and
                could be improved upon.
            </Typography>
            <Typography variant="h5" component="h4" style={subHeaderStyle}>
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
                        style={textBlockStyle}
                    >
                        Our first design addressed the tab/subtab concern by
                        creating a tree structure to the left with the work plan
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
            <Typography variant="h5" component="h4" style={subHeaderStyle}>
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
                        style={textBlockStyle}
                    >
                        The second design also chose to display the 4 main
                        elements Problem Statement, Workplan, Stakeholder
                        Analysis and Proposal on the main landing page. However,
                        we wanted to feature the Workplan in the middle to
                        emphasize the workflow process. We also decided to put a
                        navigation bar on the top for other pages to separate
                        the pieces not connected to the user's typical workflow,
                        such as the Team Info page and external links such as
                        the Glossary. Additionally, we felt it would would be
                        aesthetically pleasing to put an image on the Dashboard.
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
            <Typography variant="h5" component="h4" style={subHeaderStyle}>
                Logo
            </Typography>

            <Grid container spacing={1} alignItems="top">
                <Grid item xs={12} sm={6}>
                    <Typography
                        variant="h6"
                        component="p"
                        style={textBlockStyle}
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

            <Typography variant="h5" component="h4" style={subHeaderStyle}>
                Final Design
            </Typography>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                In our final design, we decided to go with our second design
                option. In the workplans, users don't encounter the Stakeholder
                and Proposal Development tasks early on, so we decided it would
                be benefitial to hide these components until they reach that
                step in their workplan. Therefore, if we had chosen the first
                design, more than half of the main page would have either been
                empty or had been filled with disabled buttons. However, using
                the second design would avoid these issues, since the Workplan
                is in the center of the page, so there would not be an imbalance
                in layout.
            </Typography>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                We kept the colored borders from the first design because we
                felt it provided a nice separation for the components from the
                background and allowed us to add a bit of Georgia Tech colored
                theming to the system.
            </Typography>
            <img
                src={Workplan}
                alt="Reflect! final design"
                style={imageStyle}
            />
            <span style={{ verticalAlign: "top" }}>
                <span style={blockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Lessons Learned
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                This was my first project involving UI/UX and frontend development.
                In addition to learning React and GraphQL for developing components,
                I gained design experience planning navigation and layout. Furthermore,
                I learned protyping tools such as AdobeXD.
            </Typography>
        </div>
    );
};

export default ReflectDetails;
