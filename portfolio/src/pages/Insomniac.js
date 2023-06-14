import { Grid, Typography } from "@mui/material";

import ProjectCards from "../projects/ProjectCards";
import * as myStyles from "../MyStyles";
import * as projects from "../projects/ProjectList";
import * as tools from "../components/ToolsList";
import SectionHeader from "../components/SectionHeader";
import InfoBlock from "../components/InfoBlock";
import process from '../resources/Insomniac/process.png';
import solution from '../resources/Insomniac/solution.png';
import litreview from '../resources/Insomniac/litreview.png';
import interview from '../resources/Insomniac/interview.png';
import survey from '../resources/Insomniac/survey.png';
import threeAffinity from '../resources/Insomniac/threeAffinity.png';
import setup from '../resources/Insomniac/setup.png';
import setup2 from '../resources/Insomniac/setup2.png';
import ExperimentPhoto from '../resources/Insomniac/ExperimentPhoto.png';
import instructions from '../resources/Insomniac/instructions.png';
import prototype1 from '../resources/Insomniac/prototype1.png';
import prototype2 from '../resources/Insomniac/prototype2.png';
import chairResult from '../resources/Insomniac/chairResult.png';
import principles1 from '../resources/Insomniac/principles1.png';
import principles2 from '../resources/Insomniac/principles2.png';

import p1 from '../resources/Insomniac/p1.png';
import p2 from '../resources/Insomniac/p2.png';
import p3 from '../resources/Insomniac/p3.png';
import p4 from '../resources/Insomniac/p4.png';
import p5 from '../resources/Insomniac/p5.png';
import p6 from '../resources/Insomniac/p6.png';

import main1 from '../resources/Insomniac/main1.png';
import main2 from '../resources/Insomniac/main2.png';
import extras1 from '../resources/Insomniac/extras1.png';
import extras2 from '../resources/Insomniac/extras2.png';

import appendices from '../resources/Insomniac/appendices.png';
import formats from '../resources/Insomniac/formats.png';


import HiddenDetail from "../components/HiddenDetail";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TextFieldsIcon from '@mui/icons-material/TextFields';
import PhotoSizeSelectLargeIcon from '@mui/icons-material/PhotoSizeSelectLarge';

const project = projects.insomniac;
const color = myStyles.insomniac.color;

function Insomniac() {
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
                    >

                    </img>
                    <Typography variant="h1">{project.name}</Typography>
                    <div className="project-chips" style={{ marginTop: "16px" }}>
                        {project.chips.map((c) => (
                            <span style={myStyles.chipStyle}>{c}</span>
                        ))}
                        <span
                            key={"duration"}
                            style={{
                                ...myStyles.chipStyle
                            }}
                        >
                            Duration: 14 weeks
                        </span>
                    </div>
                    <Typography variant="h3">Overview</Typography>
                    <div className="project-overview-summary">
                        <Typography variant="body2">
                            During the spring of 2022, I worked with a UX researcher masters
                            student to deliver text design standards and guidelines for our
                            client Insomniac Games.
                        </Typography>
                        <Typography variant="body2">
                            I shared research responsibilities with my partner, but my primary
                            focus was creating high fidelity mockups for our experiment,
                            adjusting content through UX writing, and designing our final
                            documents.
                        </Typography>
                        <InfoBlock
                            role={
                                <p style={{ paddingRight: "1rem" }}>
                                    I was the sole designer on the team and created all the designs
                                    for the project — prototypes, documentation, and presentations.
                                    I kept the project on track by also acting as the project manager,
                                    setting and tracking deliverable deadlines.
                                </p>
                            }
                            skills={[
                                "Leading design efforts",
                                "Visual design and prototyping",
                                "Content design and writing",
                                "Project management"
                            ]}
                            tools={[tools.figma, tools.miro, tools.qualtrics, tools.procreate]}
                        />
                    </div>
                </div>
                <div className="project-section">
                    <SectionHeader color={color}> Problem Space</SectionHeader>
                    <Typography variant="body2">
                        The <strong>presentation of text in console video games is an important aspect of game design</strong> that contributes to the sense of immersion within the game world, as well as to the overall <strong> usability and accessibility </strong> of the game. This project is about <strong>exploring trade-offs</strong> made by developers and creating a set of best practices that can be used by developers to create usable and accessible experiences for gamers with a wide range of visual abilities
                    </Typography>

                    <div className="pointed-block-left" style={{ margin: " 3rem 0 " }}>
                        <Typography variant="subtitle1">
                            {" "}
                            <strong>Problem Statement</strong>
                        </Typography>
                        <Typography variant="problemStatement">
                            {" "}
                            How can we develop a set of best practices or standards that can be used by developers to create usable and accessible experiences for gamers with a wide range of visual abilities?
                        </Typography>
                    </div>
                </div>

                <div className="project-section">
                    <SectionHeader color={color}>Solution</SectionHeader>
                    <Typography variant="body2">
                        We started with background research to orient ourselves within the problem space. Then we moved into some user research to<strong> identify different needs and challenges </strong>faced by both gamers as well as industry practitioners. Then we moved into our <strong> experiment to explore a particular aspect of text </strong> that's vitally important— text size. We compiled our findings in a <strong>comprehensive set of standards and guidelines.</strong>
                    </Typography>

                    <img src={process} className="round-image" style={{ width: "50%", margin: '24px 0px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} alt="process of creating the standards: background research (accepted guidelines), user research (empathy insights & quotes), experiment (min text size case study)" />
                    <img src={solution} className="round-image" style={{ width: "70%", margin: '24px 0px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} alt="sample of standards document" />
                </div>

                <div className="project-section">
                    <SectionHeader color={color}>Research</SectionHeader>
                    <Typography variant="body2">
                        We divided the research into three phases to familiarize ourselves with accessibility in the gaming space and understand the attitudes, behaviors, and beliefs of both gaming industry professionals and video game players.
                    </Typography>
                    <HiddenDetail
                        icon={<ManageSearchIcon />}
                        title={"Background Research"}
                        summary={"Identifying limitations and research gaps in gaming accessibility standards"}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={8}>
                                <Typography variant="body1">
                                    With our literature review, we were looking to examine the existing standards for text design in console games in order to understand their limitations and also see if there were any gaps in current research.
                                </Typography>
                                <Typography variant="body1" sx={{ marginTop: '1.5rem' }}>
                                    We found that web accessibility does not always translate to game accessibility, and research on video game-specific standards is not readily available.
                                </Typography>

                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <img
                                    src={litreview}
                                    alt="articles laid on top of each other"
                                    className="round-image"
                                    style={{ width: '100%' }}
                                >

                                </img>
                            </Grid>
                        </Grid>
                    </HiddenDetail>

                    <HiddenDetail
                        icon={<GroupsIcon />}
                        title={"Stakeholder Interviews"}
                        summary={"Understanding decisions made during the game design process"}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="body1">We interviewed 3 individuals currently working at AAA gaming studios. The goal of these interviews was to gain insight into the following questions:</Typography>
                                <ul>
                                    <li> <Typography variant="body1">What <strong>trade-offs</strong> are made when designing text for console video games?</Typography>
                                    </li>
                                </ul>
                                <ul>
                                    <li> <Typography variant="body1">What <strong>steps along the design process</strong> is text accessibility/usability considered?</Typography></li>
                                </ul>
                                <ul>
                                    <li> <Typography variant="body1">What does the <strong>evaluation process</strong> look like for game accessibility/usability?</Typography></li>
                                </ul>
                            </Grid>
                        </Grid>
                    </HiddenDetail>

                    <HiddenDetail
                        icon={<SportsEsportsIcon />}
                        title={"Player Research"}
                        summary={"Gaining insight about game accessibility and the player experience"}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body2" sx={{ color }}><strong>Interviews</strong></Typography>
                                <Typography>
                                    We interviewed <strong>6 gamers </strong> to understand subjective opinions on game accessibility and the role that text plays in the gaming experience. Of the 6 gamers we interviewed, <strong>3 identified as blind-visually impaired (BVI)</strong> and 3 as non-visually impaired.
                                </Typography>
                                <Grid item sx={{ margin: 'auto', padding: '0.5rem', backgroundColor: 'white' }}>
                                    <img
                                        src={interview}
                                        alt="Interview with gamer"
                                        className="round-image"
                                        style={{ width: '100%' }}
                                    ></img>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body2" sx={{ color }}><strong>Survey</strong></Typography>
                                <Typography>
                                    We created and deployed a survey to <strong>48 gamers.</strong> The goals of this survey were to contextualize the environmental factors of gamers’ console setups and understand the salient text features/UI elements that impact one’s gaming experience
                                </Typography>
                                <Grid item sx={{ margin: 'auto', padding: '0.5rem', backgroundColor: 'white' }}>
                                    <img
                                        src={survey}
                                        alt="Qualtrics survey preview"
                                        className="round-image"
                                        style={{ width: '100%' }}
                                    ></img>
                                </Grid>
                            </Grid>
                        </Grid>
                    </HiddenDetail>

                    <Typography variant="h3" sx={{ color }}>Research Findings</Typography>
                    <Typography variant="body2">
                        We synthesized all of our research data using <strong>affinity maps</strong> to help us generate research insights into the problem space.
                    </Typography>

                    <img src={threeAffinity} className="round-image" style={{ width: "110%", marginLeft: '-5%' }} alt="map of sticky notes" />

                    <Grid
                        container
                        spacing={3}
                        sx={{ width: "95%", margin: "auto" }}
                        justifyContent={"center"}
                    >
                        <Grid item xs={12} sm={6}>
                            <Typography
                                sx={{ fontSize: "2rem", color: color, fontWeight: "bold" }}
                            >
                                01.
                            </Typography>
                            <Typography variant="body2" sx={{ marginBottom: ".25rem" }}>
                                <strong>
                                    There are limitations to current gaming accessibility standards.
                                </strong>
                            </Typography>
                            <Typography>
                                Our background research revealed that web accessibility guidelines don't directly translate to console game accessibility are offer confusing implementation instructions (e.g. inconsistent text size units pixels to points).
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                sx={{ fontSize: "2rem", color: color, fontWeight: "bold" }}
                            >
                                02.
                            </Typography>
                            <Typography variant="body2" sx={{ marginBottom: ".25rem" }}>
                                <strong>
                                    Gaming developers should consider trade-offs throughout the design process.
                                </strong>
                            </Typography>
                            <Typography>
                                In our stakeholder interviews, we found six main goals of developing game UIs including accessibility and usability strategies that must be considered iteratively throughout the design and research process.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                sx={{ fontSize: "2rem", color: color, fontWeight: "bold" }}
                            >
                                03.
                            </Typography>
                            <Typography variant="body2" sx={{ marginBottom: ".25rem" }}>
                                <strong>
                                    Advancing accessibility in an organization is a continuous process.
                                </strong>
                            </Typography>
                            <Typography>
                                Promoting empathy for gamers with disabilities is an important first step in improving accessibility practices, and standards/guidelines are a good starting point but are not a means to an end.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                sx={{ fontSize: "2rem", color: color, fontWeight: "bold" }}
                            >
                                04.
                            </Typography>
                            <Typography variant="body2" sx={{ marginBottom: ".25rem" }}>
                                <strong>
                                    In-game text is an important issue for gamers.
                                </strong>
                            </Typography>
                            <Typography>
                                Players reported that text was a critical element to video games, and problems with text break immersion by leading to frustration or uncertainty, which can cause people to abandon games if the issues become too challenging.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography variant="h3" sx={{ color }}>Survey Highlights</Typography>
                    <Typography variant="body2">
                        From our survey, we were able to <strong> contextualize some environmental factors of gamers’ console setups </strong> and determine some of the most important text features and UI elements that impact the gaming experience. Text size and text for in-game elements were found to be most important. These findings helped inform our experiment.
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} sx={{ verticalAlign: 'middle' }}>
                            <img src={setup} alt="game setup 1" className="round-image" />
                            <Typography variant="body2">
                                One group of gamers reported playing console games on screens less than 32 inches, sitting closer than 5 feet from the screen.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ verticalAlign: 'middle' }}>
                            <img src={setup2} alt="game setup 2" className="round-image" />
                            <Typography variant="body2">
                                One group of gamers reported playing console games on screens greater than 50 inches, sitting farther than 5 feet from the screen.
                            </Typography>
                        </Grid>
                    </Grid>
                </div>

                <div className="project-section">
                    <SectionHeader color={color}>Experiment</SectionHeader>
                    <Typography variant="body2">
                        Since text size is a common accessibility barrier for gamers with and without visual impairments and the evaluation of console video game UI lacks adequate consideration of the environmental context with which games are being played, we decided to <strong>evaluate the minimum text size standard in a simulated console gaming environment.</strong> Based on our survey, we chose to look at those sitting far away and playing on a large screen since we felt it was unique to the console gaming experience.
                    </Typography>

                    <Typography variant="h3" sx={{ color }}>Experimental Design</Typography>

                    <Typography variant="body2">
                        We recruited <strong>22 participants (7F, 15M)</strong>, mostly in the 18-34 age range. Of these participants, 71% required some form of vision correction and 29% did not. Each session lasted approximately half an hour.
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>
                            <Typography variant="h4"><em>Research Questions</em></Typography>

                            <ul>
                                <li><Typography variant="body2">What is the optimal text size for console video games? (Current standards vary from 26px - 28px)</Typography></li>
                                <li><Typography variant="body2">Are there clear diminishing returns for text size in console video games?</Typography></li>
                                <li><Typography variant="body2">How does distance from the screen influence text preferences — and vice versa?</Typography></li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <img src={ExperimentPhoto} className="round-image" alt="experiment setup" />
                        </Grid>
                    </Grid>

                    <Typography variant="h3" sx={{ color }}>Experiment Prototype</Typography>
                    <Typography variant="body2">
                        I created an interactive prototype to simulate a video game. It was navigable via a Nintendo Switch controller and displayed on a 65-inch 4K TV.
                    </Typography>
                    <img src={instructions} className="round-image" alt="experiment instructions" style={{ width: '70%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />


                    <HiddenDetail
                        icon={<TextFieldsIcon />}
                        title={"Part I: Text Comprehension & Readability"}
                        summary={""}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="body1">Five different sets of 5 cards at varying pixel heights (22, 24, 26, 28, 30px) were displayed on the TV. Each card included an image followed by a Chapman-Cook-inspired text excerpt containing a single contextual error.</Typography>

                                <ul>
                                    <li><Typography variant="body1">We asked participants to read the text on each card and <strong>identify the contextual errors</strong></Typography></li>

                                </ul>
                                <ul>
                                    <li><Typography variant="body1">We <strong>quantified reading comprehension </strong> as the time taken to flip over the card and verbalize the error</Typography></li>
                                </ul>
                                <ul>
                                    <li><Typography variant="body1">We then asked participants to <strong>rate the readability</strong> of each set of cards on a 10-point QUIS Likert Scale (0 = hard to read, 9 = easy to read)</Typography></li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <img src={prototype1} className="round-image" alt="experiment prototype" style={{ width: '70%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                            </Grid>
                        </Grid>
                    </HiddenDetail>

                    <HiddenDetail
                        icon={<PhotoSizeSelectLargeIcon />}
                        title={"Part II: Optimal Size & Distance"}
                        summary={""}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="body1">Our prototype accommodated a single card displayed on the TV with one text size. The size on the card could be changed dynamically with the controller joystick to 1 of the 5 previous values.</Typography>

                                <ul>
                                    <li><Typography variant="body1">We asked participants to read the text on each card and <strong>identify the contextual errors</strong></Typography></li>

                                </ul>
                                <ul>
                                    <li><Typography variant="body1">For the second activity, we asked participants to <strong>move their chairs to the most optimal distance for 22, 26, and 30px sizes</strong> and then took measurements.</Typography></li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <img src={prototype2} className="round-image" alt="experiment prototype" style={{ width: '70%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                            </Grid>
                        </Grid>
                    </HiddenDetail>

                    <Typography variant="h4"><em>Results</em></Typography>

                    <Typography variant="body2">
                        For reading comprehension ratings, we didn't find any significant changes when text size was changed and both 26px and 28px had equal ratings for 10ft. However, participants revealed that changes in text size lead to <strong>perceived changes in other text features (e.g. font weight, white space, and line spacing).</strong>
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} sx={{ verticalAlign: 'middle' }}>
                            <img src={chairResult} className="round-image" alt="results graphic" />
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', paddingBottom: '1rem' }}>
                            <Typography variant="body1">
                                We calculated the average seating distance at each text size and found significant differences in average seating distance for all sizes.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography variant="body2">
                        When asked about their optimal text size, participants mentioned five key criteria:
                    </Typography>

                    <Typography variant="body2">
                        When asked about their optimal text size, participants mentioned five key criteria:
                    </Typography>
                    <ul>
                        <li> <Typography variant="body1">Balance of individual word legibility and passage comprehension</Typography></li>
                        <li> <Typography variant="body1">Balance of space for text versus other on-screen elements like images</Typography></li>
                        <li> <Typography variant="body1">Easy of "scannability"</Typography></li>
                        <li> <Typography variant="body1">Even alignment of multiple lines of text</Typography></li>
                        <li> <Typography variant="body1">Appropriate paragraph and line spacing</Typography></li>
                    </ul>
                </div>

                <div className="project-section">
                    <SectionHeader color={color}>Standards and Guidelines Design</SectionHeader>
                    <Typography variant="body2">
                        With the information gathered from our background research, interviews, and text size experiment, we created a set of standards and guidelines for game developers. We took great care with the UX writing and visual design to present the information in a way that the community could more easily understand and accept it.
                    </Typography>

                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} sx={{ justifyContent: 'center' }}>
                            <img src={principles1} className="round-image" alt="principles graphic"
                                style={{ width: '100%', paddingTop: '1rem' }}
                            />
                            <Typography variant="body1" sx={{ textAlign: 'center' }}>
                                UX Writing Priorities
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ justifyContent: 'center' }}>
                            <img src={principles2} className="round-image" alt="principles graphic"
                                style={{ width: '100%', paddingTop: '1rem' }}
                            />
                            <Typography variant="body1" sx={{ textAlign: 'center' }}>
                                Visual Design Priorities
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography variant="h3" sx={{ color }}>Important Features</Typography>

                    <Typography variant="body2">
                        Our final document has three main components: a section to highlight the importance of context, specific standards and guidelines for different text considerations (e.g. text size, font style, etc.), and an appendix with additional information.
                    </Typography>

                    <Typography variant="h4"><em>Establishing Context</em></Typography>

                    <Typography variant="body2">
                        The first 6 pages of our standards are dedicated to <strong>creating empathy and context.</strong> We wanted a clear and concise way to show game developers who they are designing for, and in turn, advocate for greater consideration of accessibility in the development process.
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} sx={{ justifyContent: 'center' }}>
                            <img src={p1} className="round-image" alt="page 1" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{ justifyContent: 'center' }}>
                            <img src={p2} className="round-image" alt="page 2" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{ justifyContent: 'center' }}>
                            <img src={p3} className="round-image" alt="page 3" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{ justifyContent: 'center' }}>
                            <img src={p4} className="round-image" alt="page 4" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{ justifyContent: 'center' }}>
                            <img src={p5} className="round-image" alt="page 5" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{ justifyContent: 'center' }}>
                            <img src={p6} className="round-image" alt="page 6" />
                        </Grid>
                    </Grid>

                    <Typography variant="h4"><em>Specific Text Considerations</em></Typography>

                    <Typography variant="body2">The body of our standards and guidelines focuses on a compilation of best practices for several important text considerations with examples and tools.</Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sx={{ justifyContent: 'center' }}>
                            <img src={main1} className="round-image" />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ justifyContent: 'center' }}>
                            <img src={main2} className="round-image" />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ justifyContent: 'center' }}>
                            <img src={extras1} className="round-image" />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ justifyContent: 'center' }}>
                            <img src={extras2} className="round-image" />
                        </Grid>
                    </Grid>

                    <Typography variant="h4"><em>Appendices</em></Typography>

                    <Typography variant="body2">In our appendices, we provide additional information about our minimum text size experiment, a list of accessibility setting suggestions, a tutorial for estimating pixel height of on-screen text, and a set of additional guidelines for subtitle and captions.</Typography>

                    <img src={appendices} className="round-image" alt="appendices of document" />

                    <Typography variant="h4"><em>Additional Formats</em></Typography>

                    <Typography variant="body2">
                        We created 3 additional formats of our standards and guidelines PDF:
                        <ul>
                            <li> <Typography variant="body1">The summary pdf document allows more experienced readers to easily scan the document without the added visuals and industry examples.</Typography></li>
                        </ul>
                        <ul>
                            <li> <Typography variant="body1">The separate user advocacy slides focuses on the importance of accessibility and can be shared to a greater audience in addition to the original target of game developers.</Typography></li>
                        </ul>
                        <ul>
                            <li> <Typography variant="body1">The slide deck version of the guidelines allows readers to digest the same information but in smaller chunks.</Typography></li>
                        </ul>
                    </Typography>

                    <img src={formats} className="round-image" alt="additional formats of document" />
                </div>

                <div className="project-section">
                    <SectionHeader color={color}>Impact</SectionHeader>

                    <Typography variant="h4"><em>Advocating for accessibility</em></Typography>
                    <Typography variant="body2">
                        We were able to research and capture important information about gamers with varying visual abilities. Sharing this information through our standards can spread greater awareness of the importance of accessibility in the game design process.
                    </Typography>

                    <Typography variant="h4"><em>Establishing a new experimental protocol</em></Typography>
                    <Typography variant="body2">
                        Our experiment creates a methodological framework for evaluating accessibility standards in context. Results emphasize the necessity of continued evaluation of the minimum text size standard, as well as other standards.
                    </Typography>

                    <Typography variant="h4"><em>Creating a consolidated set of standards</em></Typography>
                    <Typography variant="body2">
                        Accessibility standards and tools used by organizations are often spread across different resources, but our new standards create a single form of documentation so developers can more efficiently evaluate the accessibility of their games.
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
                    projects={[projects.aquarium, projects.mastercard, projects.fiserv]}
                    isFull={false}
                />
            </Grid>
        </div>
    );
}
export default Insomniac;
