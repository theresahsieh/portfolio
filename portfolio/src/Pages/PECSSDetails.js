import { Grid, Typography, makeStyles } from "@material-ui/core";
import HearingIcon from "@material-ui/icons/Hearing";
import LanguageIcon from "@material-ui/icons/Language";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PEBook from "./resources/PECSS/PE-book.jpg";
import OldScreens from "./resources/PECSS/old-screens.png";
import Design1 from "./resources/PECSS/design1.png";
import Design2 from "./resources/PECSS/design2.png";
import Version2 from "./resources/PECSS/version2.png";
import Welcome from "./resources/PECSS/welcome.png";

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
    backgroundColor: "#54D0E0",
    height: "2rem",
    width: "2rem",
    borderRadius: "6px",
    display: "inline-flex",
};

const PECSSDetails = () => {
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
                    Clinician-Facing Dashboard
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                I have been working on improving the clinician-facing dashboard.
                When I first joined the project, the team working on the
                dashboard was focused on creating a minimimum viable product
                (MVP), meaning their goal was to show that the data collected on
                the app could be retrieved and displayed on the dashboard. This
                resulted in a functional application that could benefit from
                additional design considerations.
            </Typography>
            <img
                src={Welcome}
                alt="Clinician-facing dashboard"
                style={solutionImageStyle}
            ></img>

            <span style={{ verticalAlign: "top" }}>
                <span style={blockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Visualizing Patient Data
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                Within the dashboard, I have also been working on visualization
                tools to display patient data in an useful and usable tool.
                Taking into account both the clinician and patient perspective,
                I have been working on creating a shared interface for
                monitoring patient adherence to homework assignments.
            </Typography>

            <span style={{ verticalAlign: "top" }}>
                <span style={blockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Research
                </Typography>
            </span>
            <Typography variant="h5" component="h4" style={subHeaderStyle}>
                Prolonged Exposure Therapy
            </Typography>
            <Typography variant="h6" component="p" style={textBlockStyle}>
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
                        style={textBlockStyle}
                    >
                        The manual covers the theory behind PE therpay, what is
                        expected from clinicians during therapy sessions and the
                        homework assignments patients are tasked with
                        completing.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        style={textBlockStyle}
                    >
                        <strong>Emotional Processing Theory</strong> PE Therapy
                        is largely based on Emotionap Processing Theory (EPT).
                        It emphasizes that when fear is activated and new
                        information is incorporated, patients can engage in
                        emotional processing to change the fear structure and
                        reduce the negative effects of PTSD. Clinicians guide
                        patients through therapy sessions and assign exercises
                        that help patient confront trauma-related thoughts and
                        situations and reduce avoidance behaviors.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        style={textBlockStyle}
                    >
                        <strong>Subjective Units of Distress (SUDS) </strong>
                        Patients learn how to quantify their feelings of stress
                        and anxiety into SUDS, which allow therapists to measure
                        their emotions and track treatment progress.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <img src={PEBook} alt="PE book" style={bookStyle}></img>
                </Grid>
            </Grid>
            <div style={{ padding: "0 1rem .5rem 1rem" }}>
                <Typography variant="h6" component="p" style={textBlockStyle}>
                    <HearingIcon className={classes.icon} fontSize="large" />
                    <strong>Imaginal Exposure</strong> Patients are asked to
                    recount their traumatic memory aloud through an imaginal
                    narrative during therapy sessions. As homework, patients are
                    asked to listen to a recording of their imaginal narrative.
                </Typography>
                <Typography variant="h6" component="p" style={textBlockStyle}>
                    <LanguageIcon className={classes.icon} fontSize="large" />
                    <strong>In Vivo Exposure</strong> Patients are tasked with
                    creating a list of real world situations that cause them to
                    feel scared or anxious. These in vivo scenarios are then
                    systematically confronted in homework assignments.
                </Typography>
                <Typography variant="h6" component="p" style={textBlockStyle}>
                    <AssignmentIcon className={classes.icon} fontSize="large" />
                    <strong>PCL-5</strong> Patients complete the PCL-5
                    questionnaires to gauge their PTSD symptoms.
                </Typography>
                <Typography variant="h6" component="p" style={textBlockStyle}>
                    <AssignmentIcon className={classes.icon} fontSize="large" />
                    <strong>PHQ-9</strong> Patients complete the PHQ-9
                    questionnaires to gauge their depressive symptoms.
                </Typography>
            </div>

            <Typography variant="h5" component="h4" style={subHeaderStyle}>
                Goals
            </Typography>
            {/* <Typography variant="h6" component="p" style={textBlockStyle}>
                I worked closely with the developer in charge of the dashboard
                to discuss how the dashboard fits into the overall PECSS project
                and how to improve the functionality of the dashboard.
            </Typography> */}
            <Typography variant="h6" component="p" style={textBlockStyle}>
                The clinician-facing dashboard is a critical tool that can help
                clinicians monitor their patient's care. It provides clinicians
                access to treatment data collected by patients outside of
                sessions with the therapist, including homework completion,
                questionaire results, and additional device information relating
                to in vivo and imaginal exposures. This data allows clinicians
                to better monitor patient adherence to treatment and tailor
                in-person sessions to address any issues they see in homework
                assignments. Avoidance behaviors in PTSD patients is very
                common, so having objective data that pinpoints areas for
                improvement aids the clinician in identifying how to support
                their patients.
            </Typography>
            {/* <Typography variant="h6" component="p" style={textBlockStyle}>
                <strong>Dashboard Funtionality</strong> In its initial state,
                the dashboard had three main pages: login, patient table view,
                and individual patient assignment view. This allowed a clinician
                to login to see patients, add new patients, view a specific
                patient's assignments and add new assignments. The missing
                features relevant to core functionality were data visualization
                and an admin dashboard for managing users.
            </Typography> */}
            <span style={{ verticalAlign: "top" }}>
                <span style={blockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Methods
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                <ul>
                    <li>Semi-Structured Interviews</li>
                    <li>Heurisitic Evaluations</li>
                    <li>Protoype Demonstrations</li>
                    <li>Angular JS Development</li>
                </ul>
            </Typography>
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
                As a part of this research lab, I have gained experience
                conducting HCI research and learned important user-centered
                design principles and tools. I have greatly improved my ability
                to understand the goals and needs of users and strengthened my
                evaluation skills. Furthermore, as a part of developing the
                visualization tools for the dashboard, I have learned the
                Angular JS framework.
            </Typography>
            <span style={{ verticalAlign: "top" }}>
                <span style={blockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Future Work
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                I am currently working on this project as both a development 
                team member and as an HCI researcher. We are planning to test 
                our designs with patients and clinicians and continue to 
                gather more insight on how we can improve PECSS to aid in PTSD 
                treatment.
            </Typography>
            {/* <Typography variant="h6" component="p" style={textBlockStyle}>
                <strong>Development Constraints</strong> The deployment of the
                dashboard was scheduled for approximately 6 months after I
                joined the dashboard team, so I worked simultaneously on design
                and development. This caused the designs to vary, including
                mockups for the final designs having to be scoped smaller for
                the deployment schedules and various features being influenced
                by pre-made libraries used during development.
            </Typography>
            <Typography variant="h5" component="h4" style={subHeaderStyle}>
                Initial Version
            </Typography>
            <img
                src={OldScreens}
                alt="old dashboard version 1"
                style={imageStyle}
            ></img>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                Feedback from Clinicians
            </Typography>
            <ul style={{ listStyle }}>
                <li>
                    It is important to view all the in vivos on one screen. It
                    would be helpful to have an "in vivio hierarchy" that
                    displays the list of in vivos patients create with the
                    therapist.
                </li>
                <li>
                    It would be great if clinicians could add multiple dates at
                    one time (e.g. to indicate a range of time)
                </li>
                <li>
                    A more helpful homepage would include all the treatment days
                    with a calender that has information that is linked to other
                    parts of the dashboard.
                </li>
                <li>
                    It would be helpful to add information about the primary
                    therapist and case manager. This would allow us to have a
                    dropdown list of possible clinicians.
                </li>
                <li>
                    Removing identifiers from PECSS (full name and contact
                    information) would improve the security. Clinicians can
                    identify a patient using only their initals and a start
                    date.
                </li>
                <li>
                    The PCL-5 and PHQ-9 survey results need to show a total
                    score. Visualizations of the scores would be nice, but at a
                    minimimum, the scores should be calculated.
                </li>
                <li>
                    Only showing the data of an assignment on the in vivo and
                    imaginal review screens is not very helpful. Time durations
                    and titles would help.
                </li>
            </ul>
            <Typography variant="h5" component="h4" style={subHeaderStyle}>
                Design 1
            </Typography>
            <img
                src={Design1}
                alt="dashboard design 1"
                style={imageStyle}
            ></img>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                Design 1 realizes many suggestions from the feedback received
                from the clinician.
                <ul>
                    <li>
                        The patients table is changed to show only relevant
                        information.
                    </li>
                    <li>
                        The overview screen includes graphs to check on patient
                        progress, the in vivo hierarchy, and a calander with
                        treatment sessions.
                    </li>
                    <li>
                        The assignment review page is a table and a review panel
                        instead of a series of different accordion folders.
                    </li>
                    <li>
                        Assignment review data includes total scores for
                        questionaires and more details on the data collect for
                        imaginal and in vivo exposures.
                    </li>
                </ul>
            </Typography>
            <Typography variant="h5" component="h4" style={subHeaderStyle}>
                Design 2
            </Typography>
            <img
                src={Design2}
                alt="dashboard design 1"
                style={imageStyle}
            ></img>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                Design 2 was created to realign the scope of the designs for an
                upcoming deployment. It reduces the number of pages to focus on
                assignment review and adds a necessary administrator dashboard.
            </Typography>
            <Typography variant="h5" component="h4" style={subHeaderStyle}>
                Version 2
            </Typography>
            <img
                src={Version2}
                alt="dashboard version 2"
                style={imageStyle}
            ></img>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                Version 2 of the dashboard primarily focused on redesigning the
                original components. Additionally, I added many of the features
                we discovered in the clinician feedback, including a graph for
                visualizing PCL-5 and PHQ-9 survey scores, updated assignment
                dialog modals, and an administrator dashboard for managing
                users.
            </Typography> */}
        </div>
    );
};
export default PECSSDetails;
