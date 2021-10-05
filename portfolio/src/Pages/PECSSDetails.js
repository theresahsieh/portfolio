import { Grid, Typography, makeStyles } from "@material-ui/core";
import HearingIcon from "@material-ui/icons/Hearing";
import LanguageIcon from "@material-ui/icons/Language";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PEBook from "./resources/PECSS/PE-book.jpg";
import storyboard1 from "./resources/PECSS/PECSS_storyboard1.png";
import storyboard2 from "./resources/PECSS/PECSS_storyboard2.png";
import storyboard3 from "./resources/PECSS/PECSS_storyboard3.png";
import storyboard4 from "./resources/PECSS/PECSS_storyboard4.png";
import Welcome from "./resources/PECSS/welcome.png";
import * as myStyles from "../MyStyles";

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
    icon: {
        verticalAlign: "middle",
        marginRight: "6px",
        backgroundColor: "#54D0E0",
        padding: "5px",
        borderRadius: "10px",
    },
});

const solutionImageStyle = {
    margin: "1rem auto",
    width: "90%",
    maxWidth: "600px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "-2px 2px 4px 2px rgba(0,0,0,0.08)",
    display: "block",
};
const storyBoardStyle = {
    margin: "1rem auto",
    height: "100%",
    maxHeight: "300px",
    width: "auto",
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

const PECSSBlockStyle = {
    ...myStyles.blockStyle,
    backgroundColor: "#54D0E0",
    
};

const PECSSDetails = () => {
    const classes = useStyles();
    return (
        <div>
            <span style={{ verticalAlign: "top" }}>
                <span style={PECSSBlockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Research
                </Typography>
            </span>
            <Typography variant="h5" component="h4" style={myStyles.subHeaderStyle}>
                Prolonged Exposure Therapy
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlockStyle}>
                The first step in understanding PE Therapy was reading the
                therapist guide meant for clinicians familiar with cognitive
                behavioral therapy (CBT) with experience from PE training
                workshops.
            </Typography>
            <Grid container spacing={1} alignItems="top">
                <Grid item xs={12} sm={8}>
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlockStyle}
                    >
                        The manual covers the theory behind PE therapy, what is
                        expected from clinicians during therapy sessions and the
                        homework assignments patients are tasked with
                        completing.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlockStyle}
                    >
                        Understanding the underlying theory and procedures for
                        PE therapy provides the foundational knowledge needed to
                        understand the behaviors of both clinicians and
                        patients during treatment.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <img src={PEBook} alt="PE book" style={bookStyle}></img>
                </Grid>
            </Grid>

            <Typography variant="h5" component="h4" style={myStyles.subHeaderStyle}>
                Goals
            </Typography>
            {/* <Typography variant="h6" component="p" style={textBlockStyle}>
                I worked closely with the developer in charge of the dashboard
                to discuss how the dashboard fits into the overall PECSS project
                and how to improve the functionality of the dashboard.
            </Typography> */}
            <Typography variant="h6" component="p" style={myStyles.textBlockStyle}>
                The clinician-facing dashboard is a critical tool that can help
                clinicians monitor their patients' care. It provides clinicians
                access to treatment data collected by patients outside of
                sessions with the therapist, including homework completion,
                questionaire results, and additional device information relating
                to their homework assignmnets. This data allows clinicians
                to better monitor patient adherence to treatment and tailor
                in-person sessions to address any issues they see in homework
                assignments. Avoidance behaviors in PTSD patients is very
                common, so having objective data that pinpoints areas for
                improvement aids the clinician in identifying how to support
                their patients.
            </Typography>
            <Typography variant="h5" component="h4" style={myStyles.subHeaderStyle}>
                Storyboard
            </Typography>
            <Grid container spacing={2} alignItems="top">
                <Grid item xs={12} md={6} xl={3}>
                <img src={storyboard1} alt="storyboard 1" style={storyBoardStyle}></img>
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                <img src={storyboard2} alt="storyboard 2" style={storyBoardStyle}></img>
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                <img src={storyboard3} alt="storyboard 3" style={storyBoardStyle}></img>
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                <img src={storyboard4} alt="storyboard 4" style={storyBoardStyle}></img>
                </Grid>
            </Grid>
            <span style={{ verticalAlign: "top" }}>
                <span style={PECSSBlockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Methods
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlockStyle}>
                <ul>
                    <li>Semi-Structured Interviews</li>
                    <li>Heurisitic Evaluations</li>
                    <li>Protoype Demonstrations</li>
                    <li>Angular JS Development</li>
                </ul>
            </Typography>
            <span style={{ verticalAlign: "top" }}>
                <span style={PECSSBlockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Clinician-Facing Dashboard
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlockStyle}>
                I have been working on improving the clinician-facing dashboard.
                When I first joined the project, the team working on the
                dashboard was focused on creating a minimimum viable product
                (MVP), meaning their goal was to show that the data collected on
                the app could be retrieved and displayed on the dashboard. This
                resulted in a functional application that could benefit from
                additional design considerations. I have helped redesign the
                dashboard's layout and implemented several key components.
            </Typography>
            <img
                src={Welcome}
                alt="Clinician-facing dashboard"
                style={solutionImageStyle}
            ></img>
            <span style={{ verticalAlign: "top" }}>
                <span style={PECSSBlockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Lessons Learned
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlockStyle}>
                As a part of this research lab, I have gained experience
                conducting HCI research and learned important user-centered
                design principles and tools. I have greatly improved my ability
                to understand the goals and needs of users and strengthened my
                evaluation skills. Furthermore, as a part of developing the
                visualization tools for the dashboard, I have learned the
                Angular JS framework.
            </Typography>
            <span style={{ verticalAlign: "top" }}>
                <span style={PECSSBlockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Future Work
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlockStyle}>
                I am currently working on this project as both a development
                team member and as an HCI researcher. We are planning to test
                our designs with patients and clinicians and continue to gather
                more insight on how we can improve PECSS to aid in PTSD
                treatment.
            </Typography>
            
        </div>
    );
};
export default PECSSDetails;
