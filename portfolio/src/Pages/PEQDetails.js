import { Grid, Typography, makeStyles } from "@material-ui/core";
import ImaginalHW from "./resources/PEQ/ImaginalHw.png";
import InitialInterview from "./resources/PEQ/firstInterview.png";
import Design1 from "./resources/PEQ/PEQ-design1.png";
import Prototype1 from "./resources/PEQ/prototype1.png";

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
const imageStyle = {
    margin: "1rem auto",
    width: "90%",
    maxWidth: "800px",
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
    backgroundColor: "#FF4BAF",
    height: "2rem",
    width: "2rem",
    borderRadius: "6px",
    display: "inline-flex",
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

const PEQDetails = () => {
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
                    PEQ Widget
                </Typography>
            </span>
            <Grid container spacing={1} alignItems="top">
                <Grid item xs={12} md={5}>
                    <Typography
                        variant="h6"
                        component="p"
                        style={textBlockStyle}
                    >
                        I have been working on designing the PEQ widget. PEQ
                        stands for Patient Engagement Quotient and is intended
                        to gauge how attentive a patient is during treatment.
                        Specifically, we are designing the PEQ visualization to
                        measure patient activation during imaginal homework
                        sessions.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        style={textBlockStyle}
                    >
                        In PE therapy sessions, patients are asked to recount
                        their traumatic memory aloud with a clinician. These
                        imaginal narratives are recorded and patients are tasked
                        with listening to them in imaginal homework sessions.
                        During these homework sessions, the PECSS mobile
                        application passively collects phone usage, background
                        noise levels, and physical activity while the patient's
                        Fitbit records heartrate. We compare this data against
                        the conditions recorded during the imaginal exposure
                        session with the clinician to determine PEQ.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        style={textBlockStyle}
                    >
                        Visualizing PEQ can help clinicians in their
                        decision-making process and help patients receive more
                        feedback on treatment progress.
                    </Typography>
                </Grid>
                <Grid xs={12} md={7}>
                    <img
                        src={ImaginalHW}
                        alt="PEQ Widget"
                        style={solutionImageStyle}
                    ></img>
                </Grid>
            </Grid>

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
            <Typography variant="h6" component="p" style={textBlockStyle}>
                We examined past research in personal health informatics to
                ensure that our system follows best practices. Furthermore, we
                take into acount accessibility concerns and the expected reading
                level of our users.
            </Typography>

            <Typography variant="h5" component="h4" style={subHeaderStyle}>
                Clinician Interview
            </Typography>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                We talked to PTSD experts at Emory hospital to compile a list of
                design implications for the PEQ widget.
            </Typography>
            <img
                src={InitialInterview}
                alt="initial interview takeaways"
                style={imageStyle}
            ></img>

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
                We created mid fidelity designs for the PEQ widget to be tested
                with clinicians. I designed the screens in Figma and made it an
                interactive prototype.
            </Typography>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={6}>
                <img src={Design1} alt="Design 1" style={imageStyle}></img>
                </Grid>
                <Grid item xs={12} md={6}>
                <img src={Prototype1} alt="Prototype 1" style={imageStyle}></img>
                </Grid>
            </Grid>
            
        </div>
    );
};
export default PEQDetails;
