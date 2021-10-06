import { Container, Grid, Typography } from "@material-ui/core";
import PEBook from "./resources/PECSS/PE-book.jpg";
import scenario1 from "./resources/PECSS/PECSS_scenario1.png";
import scenario2 from "./resources/PECSS/PECSS_scenario2.png";
import scenario3 from "./resources/PECSS/PECSS_scenario3.png";
import scenario4 from "./resources/PECSS/PECSS_scenario4.png";
import carrie from "./resources/PECSS/CarrieClinician.png";
import adam from "./resources/PECSS/AdamPatient.png";
import Welcome from "./resources/PECSS/welcome.png";
import PECSSGoals from "./resources/PECSS/PECSS_Goals.png";
import * as myStyles from "../MyStyles";

const solutionImageStyle = {
    margin: "1rem auto",
    width: "90%",
    maxWidth: "600px",
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

const PECSS_BulletSquare = {
    ...myStyles.bulletSquare,
    backgroundColor: "#54D0E0",
};

const PECSSDetails = () => {
    return (
        <div>
            <span style={{ display: "inline-flex" }}>
                <span style={PECSS_BulletSquare} />
                <Typography
                    variant="h5"
                    component="h2"
                    style={myStyles.sectionHeader}
                >
                    Problem Space
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                <strong>Post traumatic stress disorder (PTSD)</strong> is a
                mental health disorder affecting individuals dealing with
                traumatic experiences and is characterized by trauma
                re-experiencing, avoidance of trauma-related situations,
                emotions and thoughts, negative alterations in thought and mood,
                and hyperarousal. US veterans are disproportionally affected.
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                <strong>Prolonged Exposure (PE) Therapy</strong> is a widely
                accepted therapeutic approach to addressing PTSD which works to
                reduce PTSD symptoms by having patients process their traumatic
                experiences through clinical sessions and homework assignments.
            </Typography>
            <Typography
                variant="h5"
                component="p"
                style={{ ...myStyles.textBlock, marginLeft: "2.5rem" }}
            >
                <em>
                    The efficacy of PE therapy can be hindered by its reliance
                    on self-reported data and clinician intuition. The
                    information collected from patients can suffer from
                    subjectivity or sparseness. Improved data collection and
                    visualization tools would allow clinicians to better track
                    and respond to patients' mental health needs.
                </em>
            </Typography>
            <span style={{ display: "inline-flex" }}>
                <span style={PECSS_BulletSquare} />
                <Typography
                    variant="h5"
                    component="h2"
                    style={myStyles.sectionHeader}
                >
                    Proposed Solution
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                We propose the{" "}
                <strong>
                    {" "}
                    Prolonged Exposure Collective Sensing System (PECSS)
                </strong>
                , a platform that uses a data-driven approach to provide
                clinicians with the information they need to help patients succeed in
                their treatment. Including a patient-facing mobile application
                and clinician-facing online dashboard, PECSS allows patients to
                contribute detailed records of their treatment progress and
                supplies clinicians the resources to optimize their therapeutic
                practices. The 3 major goals of the PECSS project are to:
            </Typography>
            <Typography
                variant="ul"
                component="ul"
                style={myStyles.bigListStyle}
            >
                <li>Improve continuity of care</li>
                <li>Facilitate point of care interactions</li>
                <li>Increase patient engagement</li>
            </Typography>
            <img
                src={PECSSGoals}
                alt="dashboard version 2"
                style={myStyles.imageStyleNoShadow}
            ></img>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                This is a National Science Foundation (NSF) funded project and
                due to the nature of our work,{" "}
                <strong>
                    I am not able to share all the details that have yet to be
                    published.
                </strong>{" "}
                Below, I share some context for the pieces of the project I have
                been working on. Please contact me if you would like to learn
                more and feel free to read the already published work.
                <ul>
                    <li>
                        <a
                            href="https://dl.acm.org/doi/10.1145/3313831.3376170"
                            style={{
                                textDecoration: "none",
                                color: "#2F7179",
                            }}
                            target="blank"
                        >
                            Understanding the Care Ecologies of Veterans with
                            PTSD
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://par.nsf.gov/servlets/purl/10182778"
                            style={{
                                textDecoration: "none",
                                color: "#2F7179",
                            }}
                            target="blank"
                        >
                            Bridging the Gap: Creating a Clinician-Facing
                            Dashboard for PTSD
                        </a>
                    </li>
                </ul>
            </Typography>

            <span style={{ display: "inline-flex" }}>
                <span style={PECSS_BulletSquare} />
                <Typography
                    variant="h5"
                    component="h2"
                    style={myStyles.sectionHeader}
                >
                    Research
                </Typography>
            </span>
            <Typography variant="h5" component="h4" style={myStyles.subHeader}>
                Prolonged Exposure Therapy
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
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
                        style={myStyles.textBlock}
                    >
                        The manual covers the theory behind PE therapy, what is
                        expected from clinicians during therapy sessions and the
                        homework assignments patients are tasked with
                        completing.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlock}
                    >
                        Understanding the underlying theory and procedures for
                        PE therapy provides the foundational knowledge needed to
                        understand the behaviors of both clinicians and patients
                        during treatment.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <img src={PEBook} alt="PE book" style={bookStyle}></img>
                </Grid>
            </Grid>

            <Typography variant="h5" component="h4" style={myStyles.subHeader}>
                Goals
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                The clinician-facing dashboard is a critical tool that can help
                clinicians monitor their patients' care. It provides clinicians
                access to treatment data collected by patients outside of
                sessions with the therapist, including homework completion,
                questionnaire results, and additional device information relating
                to their homework assignments. This data allows clinicians to
                better monitor patient adherence to treatment and tailor
                in-person sessions to address any issues they see in homework
                assignments. Avoidance behaviors in PTSD patients are very
                common, so having objective data that pinpoints areas for
                improvement aids the clinician in identifying how to support
                their patients.
            </Typography>
            <Typography variant="h5" component="h4" style={myStyles.subHeader}>
                User Personas
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                The following are a set of personas that represent a clinician
                user and patient user of PECSS. Through interviews our
                literature and conversations with PE practitioners at Emory
                hospital, I was able to better understand the frustrations and
                desires of potential PECSS users.
            </Typography>
            <Grid container spacing={1} alignItems="top">
                <Grid item sm={12} md={6}>
                    <img
                        src={carrie}
                        alt="clinician persona"
                        style={myStyles.persona}
                    ></img>
                </Grid>
                <Grid item sm={12} md={6}>
                    <img
                        src={adam}
                        alt="patient persona"
                        style={myStyles.persona}
                    ></img>
                </Grid>
            </Grid>
            <Typography variant="h5" component="h4" style={myStyles.subHeader}>
                Storyboard
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                In weekly meetings with a licensed PE therapy clinician from
                Emory, we discuss scenarios in which PECSS would be helpful for
                both clinicians and patients. The following storyboard
                illustrates one such example.
            </Typography>
            <Grid container spacing={2} alignItems="top">
                <Grid item xs={12} sm={6} md={3}>
                    <img
                        src={scenario1}
                        alt="storyboard 1"
                        style={myStyles.storyBoardImage}
                    ></img>
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.storyBoardSubtitle}
                    >
                        Carrie discusses the homework with Adam and inputs the
                        assignment details into Adam's account
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <img
                        src={scenario2}
                        alt="storyboard 2"
                        style={myStyles.storyBoardImage}
                    ></img>
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.storyBoardSubtitle}
                    >
                        At home, Adam is reminded to check his PECSS app for his
                        homework assignments.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <img
                        src={scenario3}
                        alt="storyboard 3"
                        style={myStyles.storyBoardImage}
                    ></img>
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.storyBoardSubtitle}
                    >
                        During his in vivo assignment in the park, Adam feels
                        very anxious and doubts his progress.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <img
                        src={scenario4}
                        alt="storyboard 4"
                        style={myStyles.storyBoardImage}
                    ></img>
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.storyBoardSubtitle}
                    >
                        In the next therapy session, Carrie shows Adam how the
                        data collected by PECSS shows positive progress.
                    </Typography>
                </Grid>
            </Grid>
            <span style={{ display: "inline-flex" }}>
                <span style={PECSS_BulletSquare} />
                <Typography
                    variant="h5"
                    component="h2"
                    style={myStyles.sectionHeader}
                >
                    Methods
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                <ul>
                    <li>Semi-Structured Interviews</li>
                    <li>Heuristic Evaluations</li>
                    <li>Prototype Demonstrations</li>
                    <li>Angular JS Development</li>
                </ul>
            </Typography>
            <span style={{ display: "inline-flex" }}>
                <span style={PECSS_BulletSquare} />
                <Typography
                    variant="h5"
                    component="h2"
                    style={myStyles.sectionHeader}
                >
                    Clinician-Facing Dashboard
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                I have been working on improving the clinician-facing dashboard.
                When I first joined the project, the team working on the
                dashboard was focused on creating a minimum viable product
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
            <span style={{ display: "inline-flex" }}>
                <span style={PECSS_BulletSquare} />
                <Typography
                    variant="h5"
                    component="h2"
                    style={myStyles.sectionHeader}
                >
                    Lessons Learned
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                As a part of this research lab, I have gained experience
                conducting HCI research and learned important user-centered
                design principles and tools. I have greatly improved my ability
                to understand the goals and needs of users and strengthened my
                evaluation skills. Furthermore, as a part of developing the
                visualization tools for the dashboard, I have learned the
                Angular JS framework.
            </Typography>
            <span style={{ display: "inline-flex" }}>
                <span style={PECSS_BulletSquare} />
                <Typography
                    variant="h5"
                    component="h2"
                    style={myStyles.sectionHeader}
                >
                    Future Work
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
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
