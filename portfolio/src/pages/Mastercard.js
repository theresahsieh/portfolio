import { Alert, Grid, Typography } from "@mui/material";

import ProjectCards from "../projects/ProjectCards";
import * as myStyles from "../MyStyles";
import * as projects from "../projects/ProjectList";
import * as tools from "../components/ToolsList";
import SectionHeader from "../components/SectionHeader";
import InfoBlock from "../components/InfoBlock";
import designcomparisonbetweenlegacyplatformandnewapp from '../resources/Mastercard/designcomparisonbetweenlegacyplatformandnewapp.png';
import userflowvisual from '../resources/Mastercard/userflowvisual.png';
import userinterviews from '../resources/Mastercard/userinterviews.png';
import mouse from '../resources/Mastercard/mouse.svg';
import modal from '../resources/Mastercard/modal.svg';
import f12 from '../resources/Mastercard/f12.svg';
import ideationSketches from '../resources/Mastercard/ideationSketches.svg';
import sitemap from '../resources/Mastercard/sitemap.png';
import prototype from '../resources/Mastercard/prototype.png';
import insights from '../resources/Mastercard/insights.png';
import ideationConcepts from '../resources/Mastercard/ideationConcepts.png';
import annotationRedesign from '../resources/Mastercard/annotationRedesign.png';
import onboarding from '../resources/Mastercard/onboarding.png';
import meAtOffice from '../resources/Mastercard/meAtOffice.png';


const project = projects.mastercard;
const color = myStyles.mastercard.color;

function Mastercard() {
    return (
        <div>
            <div className="project-content-container ">
                <div className="project-overview">
                    <img
                        src={project.hero}
                        alt="cover graphic for project"
                        className="round-image"
                    ></img>
                    <Typography variant="h1">{project.name}</Typography>
                    <div className="project-chips" style={{ marginTop: "16px" }}>
                        {project.chips.map((c) => (
                            <span key={c} style={myStyles.chipStyle}>
                                {c}
                            </span>
                        ))}
                        <span
                            key={"duration"}
                            style={myStyles.chipStyle}
                        >
                            Duration: 10 weeks
                        </span>
                    </div>
                    <Typography variant="h3">Overview</Typography>
                    <div className="project-overview-summary">
                        <Typography variant="body2">
                            During the summer of 2022, I worked as a product design intern for
                            Mastercard’s Operations and Technology department. The following
                            is a brief overview of some of the work I did.
                        </Typography>
                        <Alert sx={{ ".MuiAlert-icon": { marginTop: '6px' }, marginTop: "2rem" }} severity="info">This project is protected by NDA. Not all details are included. — Please reach out to learn more!</Alert>
                        <InfoBlock
                            role={
                                <p style={{ paddingRight: "1rem" }}>
                                    I was a designer working on a small team of three designers
                                    and two researchers. My job was to help product teams
                                    adopt Mastercard's design system and create new design for them
                                    to do so.
                                </p>
                            }
                            skills={
                                [
                                    "Leading design efforts",
                                    "Communicating with stakeholders",
                                    "Visual design and prototyping",
                                    "Competitive analysis audit",
                                ]
                            }
                            tools={[tools.figma, tools.sketch]}
                        />
                    </div>
                </div>
                <div className="project-section">
                    <SectionHeader color={color}> Desktop platform overhaul</SectionHeader>
                    <Typography variant="body2">
                        I led a team of two designers and two researchers in transitioning a legacy desktop
                        application into a more streamlined web application. As part of Mastercard's initiative to
                        demonstrate how to <strong>bring UX practices to older acquisitions</strong>, our team worked to
                        outline how to seamlessly introduce UX to stakeholders.
                    </Typography>
                    <Typography variant="body2">
                        I <strong>spearheaded the redesign</strong>, creating different mockups and prototypes used for user testing.
                    </Typography>
                    <img src={designcomparisonbetweenlegacyplatformandnewapp} className="round-image" />
                    <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center', marginTop: '1.5rem' }}>
                        Design comparison between legacy platform and new web app
                    </Typography>


                    <Typography variant="h3" sx={{ color }}>Starting on the same page</Typography>
                    <Typography variant="h4"><em>How do we clarify that UX designers don't just "reskin" applications?</em></Typography>
                    <Typography variant="body2">
                        Initially, it was challenging to <strong>communicate to stakeholders</strong> that the project would not be a one-to-one
                        “reskin” of the application. The product team came to us with a list of 500+ pages and asked us to remake
                        them with the Mastercard design system.
                    </Typography>
                    <Typography variant="body2">
                        Through several meetings, we explained how our team’s design process focuses on <strong>user flows</strong> — designing screens
                        that optimize how a user completes a task. We described how we consider the full context of a user's goals by
                        looking at an entire task flow instead of isolated screens.
                    </Typography>
                    <img src={userflowvisual} className="round-image" />
                    <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center', marginTop: '1.5rem' }}>
                        User flow visual showing how screens support task completion
                    </Typography>

                    <Typography variant="h3" sx={{ color }}>Understanding our users</Typography>
                    <Typography variant="h4"><em>Semi-structured interviews</em></Typography>
                    <Typography variant="body2">
                        We interviewed customer service users to learn how they currently navigate the platform and <strong>identify their
                            pain points.</strong> We asked them to walk us through an example of a daily task so we could
                        <strong>understand their current behaviors.</strong>
                    </Typography>
                    <img src={userinterviews} className="round-image" />
                    <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center', marginTop: '1.5rem' }}>
                        User interviews with virtual screen share
                    </Typography>

                    <Typography variant="h4"><em>Interview findings</em></Typography>
                    <Typography variant="body2">
                        The user interviews helped the team develop a better understanding of how the application is used by customer
                        service individuals. We also found that number of clicks was important to users, as they found completion modals intrusive
                        and often made use of keyboard shortcuts
                    </Typography>
                    <Grid container sx={{ marginTop: '2rem' }}>
                        <Grid item xs={12} sm={6} md={4} sx={{ padding: '0.4rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                <div style={{ minWidth: '40px', maxWidth: '40px', marginRight: '0.5rem', justifyContent: 'center' }}>
                                    <img src={mouse} alt="mouse icon" style={{ width: '100%', maxWidth: '25px' }} />
                                </div>
                                <Typography variant="subtitle1" sx={{ lineHeight: '1.2rem' }}><strong>Minimizing number of clicks</strong> is important to efficient task completion</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{ padding: '0.4rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                <div style={{ minWidth: '40px', maxWidth: '40px', marginRight: '0.5rem', justifyContent: 'center' }}>
                                    <img src={modal} alt="modal icon" style={{ width: '100%', maxWidth: '40px', marginRight: '0.5rem' }} />
                                </div>
                                <Typography variant="subtitle1" sx={{ lineHeight: '1.2rem' }}><strong>Completion modals are intrusive</strong> and add an extra step</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{ padding: '0.4rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                <div style={{ minWidth: '40px', maxWidth: '40px', marginRight: '0.5rem', justifyContent: 'center' }}>
                                    <img src={f12} alt="f12 icon" style={{ width: '100%', maxWidth: '40px', marginRight: '0.5rem' }} />
                                </div>
                                <Typography variant="subtitle1" sx={{ lineHeight: '1.2rem' }}><strong>Keyboard shortcuts are heavily used</strong> to pull up relevant information</Typography>
                            </div>
                        </Grid>
                    </Grid>


                    <Typography variant="h3" sx={{ color }}>Looking at the big picture</Typography>
                    <Typography variant="h4"><em>Site map</em></Typography>
                    <Typography variant="body2">
                        Due to the complexity of the application, our team needed to <strong>organize the relationship between pages</strong> through a site map. By creating such a visualization, I helped the team understand the current navigation and better <strong> visualize workflow pathways</strong> as we worked to improve user flows.
                    </Typography>
                    <Typography variant="body2">
                        This also allowed us to pinpoint what pages we would need to tackle as we worked to <strong>prioritize our redesign efforts. </strong>
                    </Typography>
                    <img src={sitemap} className="round-image" />
                    <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center', marginTop: '1.5rem' }}>
                        Site map of application to clarify page relationship
                    </Typography>


                    <Typography variant="h3" sx={{ color }}>Designing new solutions</Typography>
                    <Typography variant="h4"><em>Initial sketches</em></Typography>
                    <Typography variant="body2">
                        One of the key ways I worked to improve the application was to imagine new ways of structuring information. The application previously relied on users managing multiple windows and popups, and there was no easy way to pull up related information for a task.
                    </Typography>
                    <Typography variant="body2">
                        To address this, I came up with better navigation strategies and content layouts that grouped related information and integrated features into the page rather than into new popups.
                    </Typography>
                    <img src={ideationSketches} className="round-image" />
                    <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center', marginTop: '1.5rem' }}>
                        Example of ideation sketches
                    </Typography>
                    <Typography variant="h4"><em>Rapid prototyping and concept testing</em></Typography>
                    <Typography variant="body2">
                        I created a number of interactive prototypes of user flows to get feedback from customer service users on proposed changes. We wanted to make sure we tested our concepts early and often with internal users to validate our assumptions and refine our understanding of the application.
                    </Typography>
                    <img src={prototype} className="round-image" />
                    <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center', marginTop: '1.5rem' }}>
                        Example of prototype with annotations describing design changes
                    </Typography>

                </div>
                <div className="project-section">
                    <SectionHeader color={color}>Application redesign</SectionHeader>
                    <Typography variant="body2">
                        Working with one other designer, I redesigned a product’s web-based content to align with Mastercard’s design system. Furthermore, we were able to <strong>restructure the information organization </strong>to improve clarity and usability.
                    </Typography>


                    <Typography variant="h3" sx={{ color }}>Gathering requirements</Typography>
                    <Typography variant="h4"><em>Product walkthroughs and PM chats</em></Typography>

                    <Typography variant="body2">
                        Working with a team of PMs, we had meetings to walk through the product to <strong>understand current usage </strong>and <strong>opportunities for improvement.</strong> These were very unstructured meetings in which the PMs showed us screen shots of the current system and we asked questions to understand user goals and pain points.
                    </Typography>
                    <Typography variant="body2">
                        We also discussed how our efforts would fit into the team’s <strong>future development goals and timeline.</strong>
                    </Typography>
                    <img src={insights} className="round-image" />
                    <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center', marginTop: '1.5rem' }}>
                        Sample of insights from product walkthrough
                    </Typography>

                    <Typography variant="h3" sx={{ color }}>Designing new screens</Typography>
                    <Typography variant="body2">
                        Within four weeks, following design critique sessions with the UX team and check-ins with the product team, we were able to deliver the final designs. I carefully organized and labeled the Figma designs and meticulously inspected the components to ensure the designs were<strong> pixel perfect </strong> and easy for developers to follow.
                    </Typography>
                    <img src={ideationConcepts} className="round-image" />
                    <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center', marginTop: '1.5rem' }}>
                        Sample of ideation concepts and final mockups
                    </Typography>
                    <Typography variant="h4"><em>Improving information architecture</em></Typography>
                    <Typography variant="body2">
                        In addition to refreshing the UI elements of the application, our goal was to improve the overall usability of the product. We wanted to improve the navigation and structure of the landing page to make it easier for users to find what they needed.
                    </Typography>

                    <img src={annotationRedesign} style={{ width: '100%' }} />
                    <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center', marginTop: '1.5rem' }}>
                        Sample of annotated redesign efforts
                    </Typography>


                </div>
                <div className="project-section">
                    <SectionHeader color={color}>New feature onboarding pattern</SectionHeader>

                    <Typography variant="body2">
                        To develop a <strong> reusable design pattern </strong> for introducing users to new features, I conducted a comparative analysis of onboarding practices. I analyzed onboarding flows from a variety of desktop applications, noting the use cases, advantages, and limitations of each design.
                    </Typography>
                    <Typography variant="body2">
                        I created a feature audit and compiled the best practices for the most relevant features from various design systems. After feedback sessions with other designers, I presented my findings and recommendations in a monthly share-out.
                    </Typography>
                    <img src={onboarding} className="round-image" />
                    <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center', marginTop: '1.5rem' }}>
                        Snapshot of onboarding practices presentation
                    </Typography>

                </div>
                <div className="project-section">
                    <SectionHeader color={color}>Business Impact</SectionHeader>
                    <Typography variant="h4"><em>Saving $2M in annual licensing costs</em></Typography>
                    <Typography variant="body2">
                        My work transitioning a legacy desktop platform to a web application saves $2 million in annual licensing costs.
                    </Typography>
                    <Typography variant="h4"><em>Supporting design initiatives with research</em></Typography>
                    <Typography variant="body2">
                        The in-depth research I conducted provided a set of guidelines and recommendations for a new pattern to be added to the design system.
                    </Typography>
                    <Typography variant="h4"><em>Maintaining design standards across products</em></Typography>
                    <Typography variant="body2">
                        My redesign efforts helped product teams align with Mastercard design standards and build confidence in UX collaboration.
                    </Typography>

                    <img src={meAtOffice} className="round-image" style={{ marginTop: "4rem" }} />
                    <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center', marginTop: '1.5rem' }}>
                        Snapshot of me at the Purchase, NY office
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
                    projects={[projects.fiserv, projects.pecss, projects.insomniac]}
                    isFull={false}
                />
            </Grid>
        </div>
    );
}
export default Mastercard;
