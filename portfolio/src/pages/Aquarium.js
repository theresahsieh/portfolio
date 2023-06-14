import { Alert, Grid, Typography } from "@mui/material";

import ProjectCards from "../projects/ProjectCards";
import * as myStyles from "../MyStyles";
import * as projects from "../projects/ProjectList";
import * as tools from "../components/ToolsList";
import SectionHeader from "../components/SectionHeader";
import InfoBlock from "../components/InfoBlock";
import HiddenDetail from "../components/HiddenDetail";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import GroupsIcon from "@mui/icons-material/Groups";


import litReview from "../resources/Aquarium/litReview.png";
import observation from "../resources/Aquarium/observation.png";

import interview from "../resources/Aquarium/interviews.png";
import survey from "../resources/Aquarium/surveys.png";
import journeyMap from "../resources/Aquarium/journeyMap.png";
import highPoints from "../resources/Aquarium/highPoints.png";
import affinity from "../resources/Aquarium/affinity.png";


import feature1 from "../resources/Aquarium/gif1.gif";
import feature2 from "../resources/Aquarium/gif2.gif";
import feature3 from "../resources/Aquarium/gif3.gif";
import feature4 from "../resources/Aquarium/gif4.gif";

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import ConnectionIcon from "../resources/icons/connection.svg";
import BrainIcon from "../resources/icons/brain.svg";

import workshop1 from "../resources/Aquarium/workshop1.png";
import workshop2 from "../resources/Aquarium/workshop2.png";
import workshop3 from "../resources/Aquarium/workshop3.png";
import workshop4 from "../resources/Aquarium/workshop4.png";


import concept1 from "../resources/Aquarium/concept1.png";
import concept2 from "../resources/Aquarium/concept2.png";
import concept3 from "../resources/Aquarium/concept3.png";
import concept4 from "../resources/Aquarium/concept4.png";
import concept5 from "../resources/Aquarium/concept5.png";
import storyboard from "../resources/Aquarium/storyboard.png";
import requirements from "../resources/Aquarium/requirements.png";
import video from "../resources/Aquarium/video.png";
import results from "../resources/Aquarium/results.png";
import adjustments from "../resources/Aquarium/adjustments.png";
import { Construction, Poll } from "@mui/icons-material";
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

import flowFrame from "../resources/Aquarium/userflow-wireframe.png";
import hifidelity from "../resources/Aquarium/hifidelity.png";
import setup from "../resources/Aquarium/setup.png";
import edits from "../resources/Aquarium/edits.png";

import final1 from "../resources/Aquarium/final1.png";
import final2 from "../resources/Aquarium/final2.png";
import final3 from "../resources/Aquarium/final3.png";
import final4 from "../resources/Aquarium/final4.png";
import final5 from "../resources/Aquarium/final5.png";
import final6 from "../resources/Aquarium/final6.png";






const project = projects.aquarium;
const color = myStyles.aquarium.color;
const color2 = "#0B5351";

function Aquarium() {
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
                            Duration: 1 year
                        </span>
                    </div>

                    <Typography variant="h3">Overview</Typography>
                    <div className="project-overview-summary">
                        <Typography variant="body2">
                            For my Master's thesis project, I designed a mobile experience for the
                            Georgia Aquarium. The goal of the project was to develop a way to
                            improve the guest experience for visitors of the largest aquarium in
                            America.
                        </Typography>
                        <Alert icon={<EmojiEventsIcon />} sx={{ ".MuiAlert-icon": { marginTop: '6px' }, marginTop: "2rem" }} severity="warning">This project was 1 of 3 team projects recognized by the Georgia Tech MS-HCI program
                            for outstanding design and research.</Alert>
                        <InfoBlock
                            role={
                                <p style={{ paddingRight: "1rem" }}>
                                    I was the head designer for this project on a team with
                                    another researcher and designer. On the research front,
                                    I helped develop the protocols and synthesize data. As
                                    the lead designer, I spearheaded all brainstorming,
                                    sketching, wireframing, visual design, and prototyping efforts.
                                </p>
                            }
                            skills={[
                                "Leading design efforts",
                                "Visual design and prototyping",
                                "Storyboarding and illustration",
                                "Participant workshop design",
                                "User research and usability testing"

                            ]}
                            tools={[tools.figma, tools.miro, tools.qualtrics, tools.procreate]}
                        />
                    </div>
                </div>
                <div className="project-section">
                    <SectionHeader color={color}> Problem Space</SectionHeader>
                    <Typography variant="h4">
                        Visits to the Aquarium end at the Aquarium
                    </Typography>
                    <Typography variant="body2">
                        When guests visit the Georgia Aquarium, their experience is often confined to the physical space of the Aquarium. While purchasing a souvenir at the gift shop or sharing on social media is common, there are limited ways to interact with the Aquarium once you leave.
                        <em>
                            {" "}
                            How can you bring interaction with the Georgia Aquarium home?
                        </em>
                    </Typography>
                    <Typography variant="h4">
                        Technology at the Aquarium can be distracting
                    </Typography>
                    <Typography variant="body2">
                        The Aquarium is a rich environment with several exhibits and crowds of people. While technology is an option for bringing a new interaction to the space, it should never take away from being present during a visit.
                        <em>
                            {" "}
                            How can you incorporate novel interactions without detracting from a typical visit?
                        </em>
                    </Typography>
                    <div className="pointed-block-left" style={{ margin: " 3rem 0 " }}>
                        <Typography variant="subtitle1">
                            <strong>Problem Statement</strong>
                        </Typography>
                        <Typography variant="problemStatement">
                            How can we extend the impact of a visit to the Georgia Aquarium?
                        </Typography>
                    </div>
                </div>
                <div className="project-section">
                    <SectionHeader color={color}> Proposed Solution</SectionHeader>
                    <Typography variant="body2">
                        Our designs focus on how our experience would enhance the entirety of the visit by taking into consideration how our solution would complement multiple aspects of a visit with different touch points.
                    </Typography>

                    <Grid container>
                        <Grid item sx={12} sm={6}>
                            <Typography variant="h3" sx={{ color: color }}>
                                Match with a gallery at the Aquarium
                            </Typography>
                            <Typography variant="body2">
                                We designed a fun personality quiz to match visitors with a unique gallery only available at the Georgia Aquarium. This gallery match quiz can be taken any time before or during their visit and encourages visitors to find and connect with their perfect home gallery.
                            </Typography>
                        </Grid>
                        <Grid item sx={12} sm={6} justifyContent={"center"} display={"flex"}>
                            <img src={feature1} alt="app screens" className="round-image" style={{ borderRadius: "60px", maxWidth: "300px", marginBottom: "8rem" }}></img>
                        </Grid>
                        <Grid item sx={12} sm={6}>
                            <Typography variant="h3" sx={{ color: color }}>
                                Snap photos with exclusive gallery filters
                            </Typography>
                            <Typography variant="body2">
                                At the Aquarium, any visitor that has matched with a gallery can use exclusive
                                photo filters related to their gallery and capture memories of their visit and share them with others.
                            </Typography>
                        </Grid>
                        <Grid item sx={12} sm={6} justifyContent={"center"} display={"flex"}>
                            <img src={feature2} alt="app screens" className="round-image" style={{ borderRadius: "60px", maxWidth: "300px", marginBottom: "8rem" }}></img>
                        </Grid>
                        <Grid item sx={12} sm={5}>
                            <Typography variant="h3" sx={{ color: color }}>
                                Bring home a mystery digital animal friend
                            </Typography>
                            <Typography variant="body2">
                                Before visitors leave they can pick up a digital animal friend from the kiosks by the exit. These animals are directly tied back to their gallery match quiz and are a fun way to bring a piece of the Aquarium home. It takes one hour for the animal to appear, so the main interaction is intended to occur at home.
                            </Typography>
                        </Grid>
                        <Grid item sx={12} sm={7} justifyContent={"center"} display={"flex"}>
                            <img src={feature3} alt="app screens" className="round-image" style={{ borderRadius: "20px", maxWidth: "400px", marginBottom: "8rem" }}></img>
                        </Grid>
                        <Grid item sx={12} sm={6}>
                            <Typography variant="h3" sx={{ color: color }}>
                                Learn more about your animal and share with others
                            </Typography>
                            <Typography variant="body2">
                                Each digital animal comes with educational content like fun facts and videos. Engaging with the content unlocks grown-up versions of the animal. Visitors can also personalize their friend with a fun name, silly hat, and different backgrounds.
                            </Typography>
                        </Grid>
                        <Grid item sx={12} sm={6} justifyContent={"center"} display={"flex"}>
                            <img src={feature4} alt="app screens" className="round-image" style={{ borderRadius: "60px", maxWidth: "300px", marginBottom: "6rem" }}></img>
                        </Grid>
                    </Grid>
                </div>
                <div className="project-section">
                    <SectionHeader color={color}> Research</SectionHeader>
                    <Typography variant="body2">
                        We divided the research into two phases: exploratory research and
                        user research. The first phase focused on discovering the challenges and
                        opportunities at the Aquarium. Once we decided to focus on extending the visit,
                        we concentrated our user research on deeply understanding the guest experience.
                    </Typography>
                    <HiddenDetail
                        icon={<ManageSearchIcon />}
                        title={"Exploratory Research"}
                        summary={"Discovering the areas of opportunity within the Aquarium"}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body2" sx={{ color: color2 }}>
                                    <strong>Literature Review</strong>
                                </Typography>
                                <Typography>
                                    We reviewed online articles and research
                                    journals relating to informal learning environments including aquaria, zoos,
                                    and museums to learn about technology use in the space. We found
                                    that most research focused on before-visit or during-visit usage.
                                </Typography>
                                <img
                                    src={litReview}
                                    alt="example literature review book with notes"
                                    className="round-image"
                                ></img>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body2" sx={{ color: color2 }}>
                                    <strong>Observations</strong>
                                </Typography>
                                <Typography>
                                    We conducted 7 hours of observation across 4 different days at different times of day to learn more about how guests structure their visits and where they spend the most time. We learned that guests largely arrive with and move in groups, so these dynamics would be important to consider.
                                </Typography>
                                <img
                                    src={observation}
                                    alt="researcher sitting at bench observing visitors at Georgia Aquarium"
                                    className="round-image"
                                ></img>
                            </Grid>
                        </Grid>
                    </HiddenDetail>
                    <HiddenDetail
                        icon={<GroupsIcon />}
                        title={"User Research"}
                        summary={
                            "Understanding what visitors remember and take away from a visit"
                        }
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body2" sx={{ color: color2 }}>
                                    <strong>Interviews</strong>
                                </Typography>
                                <Typography>
                                    We interviewed <strong>12 guests</strong> with an equal number of in-state and
                                    out-of-state visitors. Our goal was to learn about their experience
                                    at the Aquarium and what stood out as memorable.
                                </Typography>
                                <img
                                    src={interview}
                                    alt="example interview questions"
                                    className="round-image"
                                ></img>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body2" sx={{ color: color2 }}>
                                    <strong>Survey</strong>
                                </Typography>
                                <Typography>
                                    We sent out a survey to <strong>109 respondents</strong> via
                                    Qualtrics and paper surveys at the Aquarium. Using the findings from our interviews,
                                    we focused on the areas of education, reminiscence, and sharing.
                                </Typography>
                                <img
                                    src={survey}
                                    alt="qualtrics survey screenshot and paper survey with whale stickers"
                                    className="round-image"
                                ></img>
                            </Grid>
                        </Grid>
                    </HiddenDetail>
                    <br />

                    <Typography variant="h4">
                        <em>What is the journey of a Georgia Aquarium visitor?</em>
                    </Typography>
                    <Typography variant="body2">
                        Using the data from our interviews and initial observations,
                        we created a journey map to depict a typical guest visit.
                        In order to extend the visit, we wanted to <strong>focus on extending
                            the high points of a visit</strong>, so guests could continue to engage
                        with the best parts of the Aquarium.
                    </Typography>
                    <img
                        src={journeyMap}
                        alt="journey map depicting a typical visit to the Aquarium"
                        className="round-image"
                        style={{ "backgroundColor": myStyles.grey.four, padding: "2rem 0", margin: "2rem 0" }}
                    ></img>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6} sx={{ paddingRight: ".5rem" }}>
                            <Typography variant="h4">
                                <em>What makes up a visit highlight?</em>
                            </Typography>
                            <Typography variant="body2">
                                From our survey data, we identified different elements visitors reported
                                to be the most impactful on their visit.
                                We found that 90.1% of respondents felt that the <strong>animals were the most memorable </strong>
                                and 95.5% of respondents said that the <strong>animals were most shareable</strong> as well.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img
                                src={highPoints}
                                alt="highpoints of a visit broken down into survey responses"
                                className="round-image"

                            ></img>
                        </Grid>
                    </Grid>
                    <Typography variant="h3" sx={{ color: color }}>
                        Research Findings
                    </Typography>
                    <img
                        src={affinity}
                        alt="affinity mapping diagram"
                        className="round-image"
                    ></img>
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
                                    Going to the Aquarium is a group decision and group activity.
                                </strong>
                            </Typography>
                            <Typography>
                                Visitors like to enjoy the Aquarium in the company of others. Small and large groups
                                go around together and interact within their own group.
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
                                    People share their experiences with others through visual media.
                                </strong>
                            </Typography>
                            <Typography>
                                Visitors are often capturing their time at the Aquarium on their phones or cameras.
                                The pictures and videos they take are what they look back on to relive their visit and share with others.
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
                                    People feel more connected to animals when they know more about them.
                                </strong>
                            </Typography>
                            <Typography>
                                Visitors enjoy learning details about the animals like their name, age, favorite food, etc.
                                Learning these facts creates a more personal connection that drives engagement.
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
                                    Seeing animals in a different context helps people establish a connection.
                                </strong>
                            </Typography>
                            <Typography>
                                Visitors remember unique moments they have with animals such as the dolphin show or animal encounter.
                                It provides a unique context to reflect back on.
                            </Typography>
                        </Grid>
                    </Grid>
                    <br />
                    <Typography variant="h3" sx={{ color: color }}>
                        Design Requirements
                    </Typography>
                    <Typography variant="body2">
                        We translated these research insights into design requirements and narrowed down
                        which were critical to include in our designs moving forwards.
                    </Typography>

                    <div
                        className="pointed-block-left"
                        style={{ margin: "3rem 0  2rem 0" }}
                    >
                        <GroupsIcon sx={{ fontSize: "3rem", padding: ".5rem", marginRight: "1rem", backgroundColor: myStyles.yellow.one, borderRadius: '30px' }} />

                        <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: ".25rem", fontWeight: "light" }}
                        >
                            Requirement #1
                        </Typography>
                        <Typography variant="h4" sx={{ margin: "0", color: color2 }}>
                            Must enable group interaction
                        </Typography>

                        <Typography variant="body2">
                            Visitors often come in groups of families, friends, partners, etc., so a post trip experience should allow these groups to extend their visit together.
                        </Typography>
                        <blockquote className="user-quote">
                            “I decided to go because a friend invited me to.” - P3 <br />
                            “I’d go again with other people, not alone.” - P10
                        </blockquote>
                    </div>

                    <div
                        className="pointed-block-left"
                        style={{ margin: "3rem 0  2rem 0" }}
                    >
                        <div style={{ width: "3rem", height: "3rem", backgroundColor: myStyles.yellow.one, borderRadius: "30px", marginBottom: ".5rem", display: "flex", justifyContent: "center", alignItems: "center" }}><PermMediaIcon sx={{ fontSize: "2.5rem", padding: ".5rem" }} /></div>
                        <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: ".25rem", fontWeight: "light" }}
                        >
                            Requirement #2
                        </Typography>
                        <Typography variant="h4" sx={{ margin: "0", color: color2 }}>
                            Must preserve and communicate positive experiences
                        </Typography>

                        <Typography variant="body2">
                            Visitors remember the high points of their visit best, so capitalizing on capturing these moments and sharing them with others can extend these positive feelings.                        </Typography>
                        <blockquote className="user-quote">
                            “We shared pictures, and took photos of the postcards and shared with other friends who couldn’t come.” - P12
                        </blockquote>
                    </div>

                    <div
                        className="pointed-block-left"
                        style={{ margin: "3rem 0  2rem 0" }}
                    >
                        <img src={BrainIcon} style={{ color: "black", width: "3rem", height: "3rem", padding: ".5rem", marginRight: "1rem", backgroundColor: myStyles.yellow.one, borderRadius: '30px' }} />


                        <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: ".25rem", fontWeight: "light" }}
                        >
                            Requirement #3
                        </Typography>
                        <Typography variant="h4" sx={{ margin: "0", color: color2 }}>
                            Must continue to provide a trustworthy source of education
                        </Typography>

                        <Typography variant="body2">
                            Visitors trust the Aquarium to offer educational information and this content can help them develop connections to the animals.
                        </Typography>
                        <blockquote className="user-quote">
                            “I expected to build more links between the information and the animals in front of me.” - P11
                        </blockquote>
                    </div>

                    <div
                        className="pointed-block-left"
                        style={{ margin: "3rem 0  2rem 0" }}
                    >
                        <img src={ConnectionIcon} style={{ color: "black", width: "3rem", height: "3rem", padding: ".5rem", marginRight: "1rem", backgroundColor: myStyles.yellow.one, borderRadius: '30px' }} />

                        <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: ".25rem", fontWeight: "light" }}
                        >
                            Requirement #4
                        </Typography>
                        <Typography variant="h4" sx={{ margin: "0", color: color2 }}>
                            Must create a personal connection to the unique animals at the Aquarium.
                        </Typography>
                        <Typography variant="body2">
                            Visitors recall the moments they have with animals when they develop a meaningful connection with the animal.
                        </Typography>

                        <Typography variant="body2">
                            <blockquote className="user-quote">
                                “We shared pictures, and took photos of the postcards and shared with other friends who couldn’t come.” - P12
                            </blockquote>
                        </Typography>
                    </div>


                </div>

                <div className="project-section">
                    <SectionHeader color={color}>Ideation</SectionHeader>
                    <Typography variant="h3" sx={{ color: color }}>
                        Brainstorming Workshop
                    </Typography>
                    <Typography variant="body2">
                        I designed a brainstorming workshop for idea generation and created prompts related to each of our design requirements.
                        We ran this workshop on a Miro whiteboard with 4 participants, all recent visitors of the Georgia Aquarium.
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <img
                                src={workshop1}
                                className="round-image"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img
                                src={workshop2}
                                className="round-image"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img
                                src={workshop3}
                                className="round-image"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img
                                src={workshop4}
                                className="round-image"
                            />
                        </Grid>
                    </Grid>

                    <Typography variant="h3" sx={{ color: color }}>
                        Storyboard Concepts
                    </Typography>
                    <Typography variant="body2">
                        Using the ideas generated by the workshop, we developed 5 storyboard concepts and
                        recruited 6 participants to evaluate them based on how well they met our design criteria.
                        We recruited both Aquarium goers and employees of the Aquarium to gather their feedback.
                    </Typography>
                    <Typography variant="body2">
                        I illustrated the first storyboards and lead the feedback evaluation sessions.
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <img
                                src={concept1}
                                className="round-image"
                            />
                            <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center' }}>
                                Taking home a digital animal
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <img
                                src={concept2}
                                className="round-image"
                            />
                            <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center' }}>
                                QR codes to save animal info
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <img
                                src={concept3}
                                className="round-image"
                            />
                            <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center' }}>
                                Frankenfish - design a unique animal
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <img
                                src={concept4}
                                className="round-image"
                            />
                            <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center' }}>
                                Automated social media reel
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <img
                                src={concept5}
                                className="round-image"
                            />
                            <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center' }}>
                                Gallery match quiz
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography variant="h3" sx={{ color: color }}>
                        Final Storyboard
                    </Typography>
                    <Typography variant="body2">
                        Combining the two storyboard concepts, I created a final storyboard
                        that illustrates how our experience takes into account the entirety of
                        a visit: previsit, during visit, after visit, and return visit. By having
                        our experience include several touchpoints throughout the visit, we aimed to
                        create buy-in early on and create a seamless integration of our experience.
                    </Typography>
                    <img
                        src={storyboard}
                        className="round-image"
                        style={{
                            borderRadius: 8,
                            border: `solid ${myStyles.grey.three}`,
                        }}
                    />

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <div style={{ display: 'flex' }}>
                                <Typography
                                    sx={{ fontSize: "1.5rem", color: color, fontWeight: "bold", marginRight: ".5rem" }}
                                >
                                    01.
                                </Typography>
                                <Typography sx={{ marginTop: ".5rem" }}>
                                    Take a personality quiz to find your perfect home gallery.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div style={{ display: 'flex' }}>
                                <Typography
                                    sx={{ fontSize: "1.5rem", color: color, fontWeight: "bold", marginRight: ".5rem" }}
                                >
                                    02.
                                </Typography>
                                <Typography sx={{ marginTop: ".5rem" }}>
                                    Unlock exclusive filters related to your gallery at the start of your visit.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div style={{ display: 'flex' }}>
                                <Typography
                                    sx={{ fontSize: "1.5rem", color: color, fontWeight: "bold", marginRight: ".5rem" }}
                                >
                                    03.
                                </Typography>
                                <Typography sx={{ marginTop: ".5rem" }}>
                                    Pick up a digital animal related to your gallery before you leave.
                                </Typography>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <div style={{ display: 'flex' }}>
                                <Typography
                                    sx={{ fontSize: "1.5rem", color: color, fontWeight: "bold", marginRight: ".5rem" }}
                                >
                                    04.
                                </Typography>
                                <Typography sx={{ marginTop: ".5rem" }}>
                                    Reveal what your animal is to learn more and unlock an AR version on your return.
                                </Typography>
                            </div>

                        </Grid>

                    </Grid>
                    <br />
                    <img
                        src={requirements}
                        className="round-image"
                        style={{ "backgroundColor": myStyles.grey.four, padding: "2rem 0", margin: "2rem 0" }}
                    ></img>
                    <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'center' }}>
                        Storyboard annotated with design requirements
                    </Typography>
                    <br />

                    <Typography variant="h4">
                        <em>Video Storyboard Feedback</em>
                    </Typography>
                    <Typography variant="body2">
                        We created a short 3 minute video explaining our storyboard idea and sent it out with a survey
                        to collect feedback on our new direction. We wanted to validate our idea with both Georgia Aquarium
                        stakeholders along with potential users.
                    </Typography>
                    <img
                        src={video}
                        className="round-image"
                        style={{ "backgroundColor": myStyles.grey.four, margin: "2rem 0" }}
                    ></img>

                    <HiddenDetail
                        icon={<Poll />}
                        title={"Survey Concept Validation"}
                        summary={"Quantitative support for our proposed experience"}
                    >
                        <img
                            src={results}
                            className="round-image"
                            style={{ "backgroundColor": myStyles.grey.four, margin: "-2rem 0" }}
                        ></img>
                    </HiddenDetail>
                    <HiddenDetail
                        icon={<Construction />}
                        title={"Feature Adjustment Suggestions"}
                        summary={"Ideas for feature-specific components"}
                    >
                        <img
                            src={adjustments}
                            className="round-image"
                            style={{ "backgroundColor": myStyles.grey.four, margin: "-1rem 0" }}
                        ></img>
                    </HiddenDetail>

                </div>
                <div className="project-section">
                    <SectionHeader color={color}> Design and Iteration</SectionHeader>
                    <Typography variant="h3" sx={{ color: color }}>
                        Wireframes and User Flows
                    </Typography>
                    <Typography variant="body2">
                        We created user flow diagrams and wireframes to plan
                        how a user would interact with our experience on the Aquarium's
                        mobile app. This allowed us to start detailing how our experience
                        would fit into the Aquarium's existing ecosystem.
                    </Typography>
                    <img
                        src={flowFrame}
                        className="round-image"
                        style={{ "backgroundColor": myStyles.grey.four }}
                    ></img>

                    <Typography variant="h4">
                        <em>Wireframe Feedback Session</em>
                    </Typography>
                    <Typography variant="body2">
                        We ran short feedback sessions with 5 users and asked them to complete a series of tasks.
                        This provided us with information on the flow of the experience and helped us identify
                        areas of confusion.
                    </Typography>
                    <Typography variant="body2">
                        We learned that users needed more support understanding how the
                        experience connects to different parts of the visit and clear
                        prompts to follow. Users often got lost at different points
                        of the experience.
                    </Typography>
                    <br />

                    <Typography variant="h3" sx={{ color: color }}>
                        High Fidelity Prototype
                    </Typography>
                    <Typography variant="body2">
                        We designed high fidelity prototypes using the Georgia Aquarium mobile app's
                        design system and created flows for <strong>11 different tasks.</strong> We used this clickable
                        prototype to begin usability testing with our target population.
                    </Typography>
                    <img
                        src={hifidelity}
                        className="round-image"
                        style={{
                            borderRadius: 8,
                            border: `solid ${myStyles.grey.three}`,
                        }}
                    ></img>
                    <Typography variant="h4">
                        <em>User Testing</em>
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={5}>
                            <Typography variant="body2">
                                We recruited small groups of individuals to participate in
                                <strong> group usability testing sessions</strong> where they completed the 11 tasks
                                on their own devices but in a shared space. This allowed us to observe
                                the group dynamics and engage in a focus group debrief.
                            </Typography>
                            <br />
                            <Typography variant="body2">
                                We designed a <strong>simulated aquarium environment</strong> that required users
                                to navigate around a physical space, so we could better mirror
                                what it would be like using our system at the Aquarium.
                            </Typography>

                        </Grid>
                        <Grid item xs={12} sm={12} md={7} justifyContent={"center"} display={"flex"}>
                            <img
                                src={setup}
                                className="round-image"
                                style={{ width: '100%', borderRadius: '12px', maxWidth: "500px" }}
                            ></img>
                        </Grid>
                    </Grid>
                    <Typography variant="h4">
                        <em>Iterating on Feedback</em>
                    </Typography>
                    <Typography variant="body2">
                        I took the feedback we got from our user testing and recorded all the issues 
                        and then prioritized them based on severity (3 - Major issue, important to fix, 
                        2 - Minor issue, low priority, 1 - Cosmetic issue, fix if time permits). 
                    </Typography>
                    <img
                        src={edits}
                        className="round-image"
                        style={{ "backgroundColor": myStyles.grey.four, padding: "1rem" }}
                    ></img>
                    <br/>
                    {/* <Typography variant="h4">
                        <em>Cognitive Walkthrough</em>
                    </Typography>
                    <Typography variant="body2">
                        With our updated prototype, we conducted expert usability testing with 5 HCI students. 
                        For each task of our prototype they were asked to answer 'Yes' or 'No' to the following 4 questions:

                    </Typography>
                    <img
                        src={edits}
                        className="round-image"
                        style={{ "backgroundColor": myStyles.grey.four, padding: "1rem" }}
                    ></img> */}



                </div>
                <div className="project-section">
                    <SectionHeader color={color}> Final Designs</SectionHeader>
                    <Typography variant="h4" sx={{ marginTop: ".5rem" }}>
                        <em>Previsit— Gallery Match Quiz</em>
                    </Typography>
                    <Typography variant="body2">
                        Visitors are asked to buy a ticket. At the end of the purchase, they are prompted to start the Explorer Experience with the Gallery Quiz and find their perfect home gallery.
                    </Typography>
                    <img
                        src={final1}
                        className="round-image"
                        style={{ "backgroundColor": myStyles.grey.four, padding: "1rem" }}
                    ></img>

                    <Typography variant="h4">
                        <em>During Visit— Gallery Photo Filters</em>
                    </Typography>
                    <Typography variant="body2">
                        At the Aquarium, visitors are reminded to visit their home gallery and use the exclusive photo filters unlocked at the beginning of their visit.
                    </Typography>
                    <img
                        src={final2}
                        className="round-image"
                        style={{ "backgroundColor": myStyles.grey.four, padding: "1rem" }}
                    ></img>

                    <Typography variant="h4">
                        <em>End of Visit— Kiosk Animal Pickup</em>
                    </Typography>
                    <Typography variant="body2">
                        Before they leave, visitors are reminded to pick up a digital animal friend at the kiosk that will be revealed 1 hour later.
                    </Typography>
                    <img
                        src={final3}
                        className="round-image"
                        style={{ "backgroundColor": myStyles.grey.four, padding: "1rem" }}
                    ></img>

                    <Typography variant="h4">
                        <em>Post Visit— Animal Friend Interaction</em>
                    </Typography>
                    <Typography variant="body2">
                        After visitors reveal their animal and name them, they can learn more, share and customize.
                    </Typography>
                    <img
                        src={final4}
                        className="round-image"
                        style={{ "backgroundColor": myStyles.grey.four, padding: "1rem" }}
                    ></img>
                    <img
                        src={final5}
                        className="round-image"
                        style={{ "backgroundColor": myStyles.grey.four, padding: "1rem" }}
                    ></img>

                    <Typography variant="h4">
                        <em>Return Visit— 3D Animal Interaction</em>
                    </Typography>
                    <Typography variant="body2">
                        They can unlock the 3D feature and see their animal friend in augmented reality after sharing with 3 friends or on their return visit.
                    </Typography>
                    <img
                        src={final6}
                        className="round-image"
                        style={{ "backgroundColor": myStyles.grey.four, padding: "1rem" }}
                    ></img>
                    

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
export default Aquarium;
