import { Alert, Grid, Typography } from "@mui/material";

import ProjectCards from "../projects/ProjectCards";
import * as myStyles from "../MyStyles";
import * as projects from "../projects/ProjectList";
import * as tools from "../components/ToolsList";
import SectionHeader from "../components/SectionHeader";
import InfoBlock from "../components/InfoBlock";
import PECSSMockups1 from '../resources/PECSS/PECSSMockups1.png';
import ecosystem from '../resources/PECSS/ecosystem.png';
import HiddenDetail from "../components/HiddenDetail";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import GroupsIcon from "@mui/icons-material/Groups";
import PEBook from '../resources/PECSS/PEbook.jpg';
import whiteboard from '../resources/PECSS/whiteboard.png';
import carriePersona from '../resources/PECSS/carriepersona.png';
import adamPersona from '../resources/PECSS/adam_persona.png';
import scen1 from '../resources/PECSS/scen1.png';
import scen2 from '../resources/PECSS/scen2.png';
import scen3 from '../resources/PECSS/scen3.png';
import scen4 from '../resources/PECSS/scen4.png';
import clinicianDashboard from '../resources/PECSS/clinicianDashboard.png';
import sharedInterfaces from '../resources/PECSS/sharedInterfaces.png';
import patientApp from '../resources/PECSS/patientApp.png';
import homeworkProblem from '../resources/PECSS/homeworkProblem.png';
import homeworkSolution from '../resources/PECSS/homeworkSolution.png';


const project = projects.pecss;
const color = myStyles.pecss.color;
const color2 = "#009FAF";

function PECSS() {
    return (
        <div>
            <div className="project-content-container ">
                <div className="project-overview">
                    <img
                        src={project.hero}
                        alt="cover graphic for project"
                        style={{
                            width: "100%",
                            borderRadius: "8px",
                            margin: "1rem 0",
                        }}
                    />
                    <Typography variant="h1">{project.name}</Typography>
                    <div className="project-chips" style={{ marginTop: "16px" }}>
                        {project.chips.map((c) => (
                            <span style={myStyles.chipStyle}>{c}</span>
                        ))}
                        <span
                            key={"duration"}
                            style={myStyles.chipStyle}
                        >
                            Duration: 2 years
                        </span>
                    </div>

                    <Typography variant="h3">Overview</Typography>
                    <div className="project-overview-summary">
                        <Typography variant="body2">
                            From January 2020-December 2021, I volunteered at an NSF funded
                            HCI research lab: PECSS. When I started working for this lab, I
                            was a developer helping to code the web application for the
                            platform. As I developed interest in HCI, I took the initiative to
                            pursue more research and design projects to learn more.
                        </Typography>
                        <Typography variant="body2">
                            In this lab, I have worked on building and designing the
                            clinician-facing desktop application, researching and designing
                            shared patient-clinician interfaces, and redesigning the
                            patient-facing mobile application.
                        </Typography>
                        <Alert sx={{ ".MuiAlert-icon": { marginTop: '6px' }, marginTop: "2rem" }} severity="info">This is a  National Science Foundation (NSF) project and not all details have been published. — Please reach out to learn more!</Alert>
                        <InfoBlock
                            role={
                                <p style={{ paddingRight: "1rem" }}>
                                    I was a designer, researcher, and developer on this project.
                                    I lead research efforts interviewing clinicians and
                                    testing our prototypes. I developed several components
                                    for the fucntioning desktop application. I designed medium to
                                    high fidelity prototypes for both the patient-facing mobile app
                                    and the clinician-facing desktop portal.
                                </p>
                            }
                            skills={[
                                "Design and development team leader",
                                "Visual design and prototyping",
                                "User research with clinicians and data scientists",
                                "Full stack development",
                            ]}
                            tools={[tools.figma, tools.miro, tools.angular]}
                        />
                    </div>
                </div>
                <div className="project-section">
                    <SectionHeader color={color}> Problem Space</SectionHeader>

                    <Typography variant="body2">
                        <strong>Post traumatic stress disorder (PTSD)</strong> is a mental health disorder affecting individuals dealing with traumatic experiences and is characterized by trauma re-experiencing, avoidance of trauma-related situations, emotions and thoughts, negative alterations in thought and mood, and hyperarousal. US veterans are disproportionally affected.
                    </Typography>
                    <Typography variant="body2">
                        <strong>Prolonged Exposure (PE) Therapy</strong> is a widely accepted therapeutic approach to addressing PTSD which works to reduce PTSD symptoms by having patients process their traumatic experiences through clinical sessions and homework assignments.
                    </Typography>
                    <Typography variant="body2">
                        The efficacy of PE therapy can be <strong>hindered by its reliance on self-reported data </strong> and clinician intuition. The information collected from patients can suffer from subjectivity or sparseness.
                    </Typography>
                    <div className="pointed-block-left" style={{ margin: " 3rem 0 " }}>
                        <Typography variant="subtitle1">
                            {" "}
                            <strong>Problem Statement</strong>
                        </Typography>
                        <Typography variant="problemStatement">
                            {" "}
                            How might we collect, track, and visualize data to improve the efficacy of PE therapy?
                        </Typography>
                    </div>
                </div>
                <div className="project-section">
                    <SectionHeader color={color}> Proposed Solution</SectionHeader>

                    <Typography variant="body2">
                        <strong>Prolonged Exposure Collective Sensing System (PECSS) </strong>  is a platform that uses a data-driven approach to provide clinicians with the information they need to help patients succeed in their treatment. Including a patient-facing mobile application and clinician-facing online dashboard, PECSS allows patients to contribute detailed records of their treatment progress and supplies clinicians the resources to optimize their therapeutic practices.
                    </Typography>

                    <img src={PECSSMockups1} className="round-image" style={{ width: '120%', padding: '2rem 0px', marginLeft: '-10%' }} />
                    <Typography variant="body2">
                        Avoidance behaviors in PTSD patients are very common, and the patient-facing app helps patients manage their therapy through tools that centralize therapy session recordings and track clinician-assigned activities. For clinicians, having objective data that pinpoints areas for improvement aids them in identifying how to support their patients.
                    </Typography>

                    <img src={ecosystem} className="round-image" />

                </div>
                <div className="project-section">
                    <SectionHeader color={color}> Research</SectionHeader>

                    <Typography variant="body2">
                        Though our research for different projects within the lab varied slightly, our main foundation of knowledge came from thorough literature reviews and interactions with clinicians.
                    </Typography>

                    <HiddenDetail
                        icon={<ManageSearchIcon />}
                        title={"Literature Review"}
                        summary={"Understanding PE Therapy practices and personal health research"}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={9}>
                                <Typography variant="body1">
                                    The first step in understanding PE Therapy was reading the therapist guide meant for clinicians. Knowing the underlying theory and procedures for PE therapy provides the foundational knowledge needed to understand the behaviors of both clinicians and patients during treatment.
                                </Typography>
                                <Typography variant="body1" sx={{ marginTop: '1.5rem' }}>
                                    We also researched academic journals to understand best practices for designing personal health interfaces.
                                </Typography>

                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <img
                                    src={PEBook}
                                    alt="PE book"
                                    className="round-image"
                                    style={{ width: '100%', borderRadius: '12px' }}
                                ></img>
                            </Grid>
                        </Grid>
                    </HiddenDetail>
                    <HiddenDetail
                        icon={<GroupsIcon />}
                        title={"Clinician Interviews"}
                        summary={"Gaining insight and inspiration from PE Therapy professionals"}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={7}>
                                <Typography variant="body1">
                                    We had access to PE therapists at Emory hospital for interviews, brainstorming, and feedback. Speaking with licensed clinicians was crucial for ensuring that our designs would be practical for PE therapists and would not create new burdens.
                                </Typography>

                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <img
                                    src={whiteboard}
                                    alt="whiteboard clip-art"
                                    className="round-image"
                                    style={{ width: '100%', paddingTop: '1rem', paddingLeft: '1rem' }}
                                ></img>
                            </Grid>
                        </Grid>
                    </HiddenDetail>
                    <Typography variant="body2" sx={{ margin: '3rem 0px' }}>
                        We also had <strong>weekly lab meetings</strong> where we would share new relevant papers and our Emory clinician would share different scenarios our platform should consider. These meetings constantly provided new perspectives on our work and facilitated meaningful discussions.
                    </Typography>
                    <Typography variant="h4">User Personas</Typography>
                    <Typography variant="body2">
                        The following are a set of personas I created to represent a clinician user and patient user of PECSS.
                    </Typography>

                    <Grid container spacing={1} sx={{ marginBottom: '3rem' }}>
                        <Grid item xs={12} md={6}>
                            <img
                                src={carriePersona}
                                alt="clinician persona"
                                className="round-image"
                            ></img>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img
                                src={adamPersona}
                                alt="patient persona"
                                className="round-image"
                            ></img>
                        </Grid>
                    </Grid>

                    <Typography variant="h4">Storyboard</Typography>
                    <Typography variant="body2">
                        The following storyboard illustrates an example of how a patient and clinician could utilize the PECSS system to assign and monitor homework completion.
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                            <img src={scen1} alt="storyboard 1" style={{ margin: "1rem auto", height: "auto", maxWidth: "100%", width: "auto", display: "block" }} />
                            <Typography variant="subtitle1" sx={{ fontSize: '0.9rem', fontWeight: '400', margin: '1rem 0.5rem 2rem' }}>
                                Carrie discusses the homework with Adam and inputs the assignment details into Adam's account.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <img src={scen2} alt="storyboard 2" style={{ margin: "1rem auto", height: "auto", maxWidth: "100%", width: "auto", display: "block" }} />
                            <Typography variant="subtitle1" sx={{ fontSize: '0.9rem', fontWeight: '400', margin: '1rem 0.5rem 2rem' }}>
                                At home, Adam is reminded to check his PECSS app for his homework assignments.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <img src={scen3} alt="storyboard 3" style={{ margin: "1rem auto", height: "auto", maxWidth: "100%", width: "auto", display: "block" }} />
                            <Typography variant="subtitle1" sx={{ fontSize: '0.9rem', fontWeight: '400', margin: '1rem 0.5rem 2rem' }}>
                                During his in vivo assignment in the park, Adam feels very anxious and doubts his progress.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <img src={scen4} alt="storyboard 4" style={{ margin: "1rem auto", height: "auto", maxWidth: "100%", width: "auto", display: "block" }} />
                            <Typography variant="subtitle1" sx={{ fontSize: '0.9rem', fontWeight: '400', margin: '1rem 0.5rem 2rem' }}>
                                In the next therapy session, Carrie shows Adam how the data collected by PECSS shows positive progress.
                            </Typography>
                        </Grid>
                    </Grid>
                </div>

                <div className="project-section">
                    <SectionHeader color={color}> Design</SectionHeader>
                    <Typography variant="body2">
                        I worked on three different areas of of the project, designing interfaces for both mobile and desktop applications. As each project required a different level of fidelity, I created a range of low to high fidelity mockups and prototypes.
                    </Typography>


                    <Typography variant="h3">Clinician Dashboard</Typography>
                    <Typography variant="body2">
                        I improved the information architecture for the dashboard to resructure how we organized data displayed to clinicians. <strong>As a front-end technical lead and designer, I balanced development and design goals. </strong>I created and implemented several core features for the platform myself and guided new lab members on both design and development teams.
                    </Typography>

                    <img src={clinicianDashboard} className="round-image" />

                    <Typography variant="h3" >Shared Interfaces</Typography>
                    <Typography variant="body2">
                        I worked with a PhD student to conceptualize how shared interfaces for a new patient engagement metric could be conveyed to clinicians and patients. I designed medium fidelity, working prototypes to test with clinicians.
                    </Typography>

                    <img src={sharedInterfaces} className="round-image" />

                    <Typography variant="h3" >Patient Mobile App</Typography>
                    <Typography variant="body2">
                        I created mid-fidelity mockups to redesign our mobile app and make it more friendly to new users. I improved access to assignment instructions and overall navigation.
                    </Typography>

                    <img src={patientApp} className="round-image" />

                </div>
                <div className="project-section">
                    <SectionHeader color={color}> Example Project: Assigning Homework</SectionHeader>
                    <Typography variant="body2">
                        An important goal of the dashboard is to allow clinicians to keep track of patient homework assignments, and a key function to this is being able to enter homework assignments.
                    </Typography>

                    <Typography variant="h3" >Problem</Typography>
                    <Typography variant="body2">
                        We received feedback from users that the initial method for <strong>assigning homework was cumbersome </strong> because it required <strong>entering each assignment one at a time.</strong>
                    </Typography>
                    <img src={homeworkProblem} className="round-image" />

                    <Typography variant="h3" >New System</Typography>
                    <Typography variant="body2">
                        When brainstorming how to address the problem, I was able to <strong>anticipate the development challenges</strong> we would face. Therefore, with a deadline approaching, I made sure to <strong>consider technical complexity</strong> and come up with a solution that best utilized exisitng frameworks and components.
                    </Typography>
                    <img src={homeworkSolution} className="round-image" />

                    <Typography variant="h3" >Future Directions</Typography>
                    <Typography variant="body2">
                        Moving forwards, the assignment adding process still needs more fine tuning. The new system design alleviates the issue of adding multiple of the same assignment at once, but does not account for adding different assignment types. Furthermore, because PE is so manualized, having a preset schedule for certain assignments could help streamline the process more.
                    </Typography>
                </div>
                <div className="project-section">
                    <SectionHeader color={color}>Impact</SectionHeader>

                    <Typography variant="h4"><em>Advocating for Clinicians</em></Typography>
                    <Typography variant="body2">
                        Working closely with PE-certified clinicians allowed us to deeply understand and capture important insights about PTSD care. Sharing this information in our publications can help improve both the reach and efficacy of PE therapy. 
                    </Typography>

                    <Typography variant="h4"><em>Supplementing Care With Data</em></Typography>
                    <Typography variant="body2">
                        The data collected on the platform provides an opportunity for clinicians 
                        to better personalize care and allows patients to better monitor 
                        their progress. PECSS uses the leading best practices for data visualization, 
                        health informatics, and human-computer interaction to make this data easily digestible and usable. 
                    </Typography>

                </div>
            </div>
            
            <Grid
                container
                style={{
                    backgroundColor: myStyles.grey.four,
                }}
            >
                <ProjectCards
                    projects={[projects.mastercard, projects.fiserv, projects.insomniac]}
                    isFull={false}
                />
            </Grid>
        </div>
    );
}
export default PECSS;
