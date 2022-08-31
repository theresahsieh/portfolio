import { Grid, Typography } from "@material-ui/core";
import PEBook from "./resources/PECSS/PE-book.jpg";
import PECSSCover from "./resources/PECSS/PECSS-cover.png";
import scenario1 from "./resources/PECSS/PECSS_scenario1.png";
import scenario2 from "./resources/PECSS/PECSS_scenario2.png";
import scenario3 from "./resources/PECSS/PECSS_scenario3.png";
import Stakeholders from "./resources/PECSS/PECSS_scenario4.png";
import carrie from "./resources/PECSS/CarrieClinician.png";
import adam from "./resources/PECSS/AdamPatient.png";
import Welcome from "./resources/PECSS/welcome.png";
import PECSSGoals from "./resources/PECSS/PECSS_Goals.png";
import sketches from "./resources/PECSS/sketches.png";
import hw1 from "./resources/PECSS/Homework1.png";
import hw2 from "./resources/PECSS/Homework2.png";
import * as myStyles from "../MyStyles";
import SectionHeader from "./SectionHeader";

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
            <img
                src={PECSSCover}
                alt="Cover"
                style={myStyles.coverImageStyle}
            ></img>
            <Grid
                container
                spacing={1}
                alignItems="top"
                style={myStyles.gridInformation}
            >
                <Grid
                    container
                    item
                    xs={12}
                    md={8}
                    style={{ marginBottom: "-3rem" }}
                >
                    <div>
                        <Typography variant="h1">
                            PECSS: Prolonged Exposure Collective Sensing System
                        </Typography>
                        <div style={{ paddingBottom: "32px" }}>
                            <span style={myStyles.chipStyle}>Healthcare</span>
                            <span style={myStyles.chipStyle}>
                                HCI Research + UX Design
                            </span>
                        </div>
                    </div>
                </Grid>
                <Grid container item xs={12} md={8}>
                    <SectionHeader
                        color={"#54D0E0"}
                        header={"Problem Space"}
                        style={{ marginTop: "1rem" }}
                    />
                    <Typography variant="body2" component="p">
                        <strong>Post traumatic stress disorder (PTSD)</strong>{" "}
                        is a mental health disorder affecting individuals
                        dealing with traumatic experiences and is characterized
                        by trauma re-experiencing, avoidance of trauma-related
                        situations, emotions and thoughts, negative alterations
                        in thought and mood, and hyperarousal. US veterans are
                        disproportionally affected.
                    </Typography>
                    <Typography variant="body2" component="p">
                        <strong>Prolonged Exposure (PE) Therapy</strong> is a
                        widely accepted therapeutic approach to addressing PTSD
                        which works to reduce PTSD symptoms by having patients
                        process their traumatic experiences through clinical
                        sessions and homework assignments.
                    </Typography>
                    <Typography
                        variant="body2"
                        component="p"
                        style={{ marginRight: "1rem" }}
                    >
                        <em>
                            The efficacy of PE therapy can be hindered by its
                            reliance on self-reported data and clinician
                            intuition. The information collected from patients
                            can suffer from subjectivity or sparseness. Improved
                            data collection and visualization tools would allow
                            clinicians to better track and respond to patients'
                            mental health needs.
                        </em>
                    </Typography>
                    <SectionHeader
                        color={"#54D0E0"}
                        header={"Proposed Solution"}
                    />
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlock}
                    >
                        We propose the{" "}
                        <strong>
                            Prolonged Exposure Collective Sensing System (PECSS)
                        </strong>
                        , a platform that uses a data-driven approach to provide
                        clinicians with the information they need to help
                        patients succeed in their treatment. Including a
                        patient-facing mobile application and clinician-facing
                        online dashboard, PECSS allows patients to contribute
                        detailed records of their treatment progress and
                        supplies clinicians the resources to optimize their
                        therapeutic practices. The 3 major goals of the PECSS
                        project are to:
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
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlock}
                    >
                        This is a National Science Foundation (NSF) funded
                        project and due to the nature of our work,{" "}
                        <strong>
                            I am not able to share all the details that have yet
                            to be published.
                        </strong>{" "}
                        Below, I share some context for the pieces of the
                        project I have been working on. Please contact me if you
                        would like to learn more and feel free to read the
                        already published work.
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
                                    Understanding the Care Ecologies of Veterans
                                    with PTSD
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
                                    Bridging the Gap: Creating a
                                    Clinician-Facing Dashboard for PTSD
                                </a>
                            </li>
                        </ul>
                    </Typography>
                    <div>
                        <SectionHeader color={"#54D0E0"} header={"Research"} />
                        <Typography variant="h3" style={{ marginTop: "1rem" }}>
                            Prolonged Exposure Therapy
                        </Typography>
                    </div>

                    <Grid container spacing={1} alignItems="top">
                        <Grid item sm={12} md={8}>
                            <Typography variant="body2" component="p">
                                The first step in understanding PE Therapy was
                                reading the therapist guide meant for clinicians
                                familiar with cognitive behavioral therapy (CBT)
                                with experience from PE training workshops.
                            </Typography>
                            <Typography variant="body2" component="p">
                                The manual covers the theory behind PE therapy,
                                what is expected from clinicians during therapy
                                sessions and the homework assignments patients
                                are tasked with completing.
                            </Typography>
                            <Typography variant="body2" component="p">
                                Understanding the underlying theory and
                                procedures for PE therapy provides the
                                foundational knowledge needed to understand the
                                behaviors of both clinicians and patients during
                                treatment.
                            </Typography>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <img
                                src={PEBook}
                                alt="PE book"
                                style={bookStyle}
                            ></img>
                        </Grid>
                    </Grid>
                    <Typography variant="h3">User Personas</Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlock}
                    >
                        The following are a set of personas that represent a
                        clinician user and patient user of PECSS. Through
                        interviews our literature and conversations with PE
                        practitioners at Emory hospital, I was able to better
                        understand the frustrations and desires of potential
                        PECSS users.
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
                    <Typography variant="h3">Storyboard</Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlock}
                    >
                        In weekly meetings with a licensed PE therapy clinician
                        from Emory, we discuss scenarios in which PECSS would be
                        helpful for both clinicians and patients. The following
                        storyboard illustrates one such example.
                    </Typography>
                    <Grid container spacing={2} alignItems="top">
                        <Grid item xs={12} sm={6} md={3}>
                            <img
                                src={scenario1}
                                alt="storyboard 1"
                                style={myStyles.storyBoardImage}
                            ></img>
                            <Typography
                                variant="subtitle1"
                                component="p"
                                style={myStyles.storyBoardSubtitle}
                            >
                                Carrie discusses the homework with Adam and
                                inputs the assignment details into Adam's
                                account
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <img
                                src={scenario2}
                                alt="storyboard 2"
                                style={myStyles.storyBoardImage}
                            ></img>
                            <Typography
                                variant="subtitle1"
                                style={myStyles.storyBoardSubtitle}
                            >
                                At home, Adam is reminded to check his PECSS app
                                for his homework assignments.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <img
                                src={scenario3}
                                alt="storyboard 3"
                                style={myStyles.storyBoardImage}
                            ></img>
                            <Typography
                                variant="subtitle1"
                                style={myStyles.storyBoardSubtitle}
                            >
                                During his in vivo assignment in the park, Adam
                                feels very anxious and doubts his progress.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <img
                                src={Stakeholders}
                                alt="storyboard 4"
                                style={myStyles.storyBoardImage}
                            ></img>
                            <Typography
                                variant="subtitle1"
                                style={myStyles.storyBoardSubtitle}
                            >
                                In the next therapy session, Carrie shows Adam
                                how the data collected by PECSS shows positive
                                progress.
                            </Typography>
                        </Grid>
                    </Grid>
                    <SectionHeader
                        color={"#54D0E0"}
                        header={"Clinician-Facing Dashboard"}
                    />
                    <Grid container spacing={1} alignItems="top">
                        <Grid item xs={12} md={6}>
                            <Typography variant="body2" component="p">
                                I have been working on improving the
                                clinician-facing dashboard. When I first joined
                                the project, the team working on the dashboard
                                was focused on creating a minimum viable product
                                (MVP), meaning their goal was to show that the
                                data collected on the app could be retrieved and
                                displayed on the dashboard. This resulted in a
                                functional application that could benefit from
                                additional design considerations. I have helped
                                redesign the dashboard's layout and implemented
                                several key components.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img
                                src={Welcome}
                                alt="Clinician-facing dashboard"
                                style={myStyles.solutionImageStyle}
                            ></img>
                        </Grid>
                    </Grid>
                    <Typography variant="body2" component="p">
                        <strong>Goals</strong> The clinician-facing dashboard is
                        a critical tool that can help clinicians monitor their
                        patients' care. It provides clinicians access to
                        treatment data collected by patients outside of sessions
                        with the therapist, including homework completion,
                        questionnaire results, and additional device information
                        relating to their homework assignments. This data allows
                        clinicians to better monitor patient adherence to
                        treatment and tailor in-person sessions to address any
                        issues they see in homework assignments. Avoidance
                        behaviors in PTSD patients are very common, so having
                        objective data that pinpoints areas for improvement aids
                        the clinician in identifying how to support their
                        patients.
                    </Typography>
                    <Typography variant="h3">
                        Example Project: Assigning Homework
                    </Typography>
                    <Typography variant="body2" component="p">
                        An important goal of the dashboard is to allow
                        clinicians to keep track of patient homework
                        assignments, and a key function to this is being able to
                        enter homework assignments.
                    </Typography>
                    <Typography variant="body2" component="p">
                        We received feedback from users that the initial method
                        for assigning homework was cumbersome because it
                        required entering each assignment one at a time. After
                        discussing with clinicians, we were able to understand
                        their mental model for homework assignments and
                        determine their expectations for the homework assignment
                        process.
                    </Typography>
                    <Grid container spacing={1} alignItems="top">
                        <Grid item xs={12} md={6}>
                            <Typography variant="body2" component="p">
                                <strong>Ideation </strong>
                                Along with Althea and Khusbu, I brainstormed
                                some ideas of how to address the issue. When
                                brainstorming, we also kept in mind development
                                constraints such as{" "}
                                <em>
                                    how much of our code would we have to
                                    change?
                                </em>{" "}
                                and
                                <em>
                                    {" "}
                                    how long would these development changes
                                    take?
                                </em>
                            </Typography>
                            <Typography variant="body2" component="p">
                                Together, we decided on a design that extended
                                the current functionality of the popup modal but
                                allowed the user to choose multiple dates in the
                                date picker and also support different in vivo
                                assignments for the same day.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img
                                src={sketches}
                                alt="sketches"
                                style={myStyles.storyBoardImage}
                            ></img>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="top">
                        <Grid item xs={12}>
                            <Typography variant="body2" component="p">
                                <strong>Mockups </strong>
                                Next, I took the idea that we decided on and
                                created mockups in Figma that show the different
                                ways a clinician might interact with the new
                                modal. The design reuses several components from
                                the original assignment modal so that it is easy
                                to implement this design for a short development
                                time frame.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img
                                src={hw1}
                                alt="design ideas for homework assignment"
                                style={myStyles.storyBoardImage}
                            ></img>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img
                                src={hw2}
                                alt="design ideas for homework assignment"
                                style={myStyles.storyBoardImage}
                            ></img>
                        </Grid>
                    </Grid>
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
                    <Typography variant="body2" component="p">
                        As a part of this research lab, I have gained experience
                        conducting HCI research and learned important
                        user-centered design principles and tools. I have
                        greatly improved my ability to understand the goals and
                        needs of users and strengthened my evaluation skills.
                        Furthermore, as a part of developing the visualization
                        tools for the dashboard, I have learned the Angular JS
                        framework.
                    </Typography>
                    <SectionHeader color={"#54D0E0"} header={"Future Work"} />
                    <Typography variant="body2" component="p">
                        I am currently working on this project as both a
                        development team member and as an HCI researcher. We are
                        planning to test our designs with patients and
                        clinicians and continue to gather more insight on how we
                        can improve PECSS to aid in PTSD treatment.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};
export default PECSSDetails;
