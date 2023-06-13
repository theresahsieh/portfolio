import { Grid, Typography } from "@mui/material";

import ProjectCards from "../projects/ProjectCards";
import * as myStyles from "../MyStyles";
import * as projects from "../projects/ProjectList";
import * as tools from "../components/ToolsList";
import SectionHeader from "../components/SectionHeader";
import InfoBlock from "../components/InfoBlock";
import HiddenDetail from "../components/HiddenDetail";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import feature1 from "../resources/Fiserv/feature1.png";
import feature2 from "../resources/Fiserv/feature2.png";
import feature3 from "../resources/Fiserv/feature3.png";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsIcon from "@mui/icons-material/Groups";
import litReview from "../resources/Fiserv/lit-review.png";
import stakeholders from "../resources/Fiserv/stakeholders.jpeg";
import compAnalysis from "../resources/Fiserv/comp-analysis.png";
import taskAnalysis from "../resources/Fiserv/task-analysis.jpg";
import interview from "../resources/Fiserv/interview.jpeg";
import survey from "../resources/Fiserv/survey.png";
import affinity from "../resources/Fiserv/affinity.jpg";
import sketch1 from "../resources/Fiserv/sketch1.png";
import sketch2 from "../resources/Fiserv/sketch2.png";
import sketch3 from "../resources/Fiserv/sketch3.png";
import paperPrototypes from "../resources/Fiserv/paper-prototypes.jpeg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import siteMap from "../resources/Fiserv/site-map.png";
import userFlow from "../resources/Fiserv/user-flow.png";
import StartIcon from "@mui/icons-material/Start";
import wireframe1 from "../resources/Fiserv/wireframe1.png";
import wireframe2 from "../resources/Fiserv/wireframe2.png";
import wireframe3 from "../resources/Fiserv/wireframe3.png";
import wireframes from "../resources/Fiserv/wireframes.png";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import onboarding from "../resources/Fiserv/onboarding.png";
import shortcut from "../resources/Fiserv/shortcut.png";
import designSystem from "../resources/Fiserv/designSystem.png";
import hifi from "../resources/Fiserv/hifi.png";
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import sus from "../resources/Fiserv/sus.png";
import he from "../resources/Fiserv/he.png";
import hifi1 from "../resources/Fiserv/hifi1.png";
import hifi2 from "../resources/Fiserv/hifi2.png";
import hifi3 from "../resources/Fiserv/hifi3.png";
import hifi4 from "../resources/Fiserv/hifi4.png";

const project = projects.fiserv;
const color = myStyles.fiserv.color;
const color2 = "#054064";

function Fiserv() {
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
                        <span key={"duration"} style={myStyles.chipStyle}>
                            Duration: 14 weeks
                        </span>
                    </div>
                    <Typography variant="h3">Overview</Typography>
                    <div className="project-overview-summary">
                        <Typography variant="body2">
                            During the fall of 2021, I designed and prototyped a proof of
                            concept application for integrating cryptocurrency tools into
                            traditional online banking platforms. My team's aim was to
                            understand how people view cryptocurrencies, wealth management,
                            and online banking in order to discover how we could support banks
                            in offering cryptocurrency services.
                        </Typography>
                        <InfoBlock
                            role={
                                <p style={{ paddingRight: "1rem" }}>
                                    I assumed both design and research roles on my team with two
                                    designers and two researchers. As a researcher, I took charge
                                    of the background research and user interview process. For
                                    design, I shared responsibilities for the sketches,
                                    wireframes, design system, and all prototypes.
                                </p>
                            }
                            skills={[
                                "Visual design and prototyping",
                                "Sketching and wireframing",
                                "Background and user research",
                                "Usability testing",
                            ]}
                            tools={[tools.figma, tools.miro, tools.qualtrics, tools.userZoom]}
                        />
                    </div>
                </div>
                <div className="project-section">
                    <SectionHeader color={color}> Problem Space</SectionHeader>
                    <Typography variant="h4">
                        Average consumers think crypto-only platforms are intimidating.
                    </Typography>
                    <Typography variant="body2">
                        New users can feel overwhelmed when starting out on their
                        cryptocurrency journey.
                        <em>
                            {" "}
                            What is blockchain? Do I need a private key? How do I know which
                            coins are too risky?
                        </em>
                    </Typography>
                    <Typography variant="h4">
                        Cryptocurrency owners are looking for new avenues for investment.
                    </Typography>
                    <Typography variant="body2">
                        Existing owners are constantly looking for new ways to diversify
                        their assets.
                        <em>
                            {" "}
                            How can I make my crypto investments less vulnerable to hacks?
                        </em>
                    </Typography>
                    <div className="pointed-block-left" style={{ margin: " 3rem 0 " }}>
                        <Typography variant="subtitle1">
                            {" "}
                            <strong>Problem Statement</strong>
                        </Typography>
                        <Typography variant="problemStatement">
                            {" "}
                            How might we support users' cryptocurrency management within
                            familiar banking services?
                        </Typography>
                    </div>
                </div>
                <div className="project-section">
                    <SectionHeader color={color}>Proposed Solution</SectionHeader>
                    <Typography variant="body2">
                        Our mobile app design focuses on how to make buying, selling, and
                        managing cryptocurrencies{" "}
                        <strong>easy to understand for new users</strong> while still{" "}
                        <strong>
                            meeting the functional expectations of seasoned experts.
                        </strong>
                    </Typography>
                    <Typography variant="h3" sx={{ color: color }}>
                        Introducing a Cryptocurrency Tab
                    </Typography>
                    <Typography variant="body2">
                        We created a separate navigation tab to contain all of the new
                        cryptocurrency features and included a guided walkthrough to
                        introduce it to new users. This allowed us to highlight the new
                        features and potential benefits of the functionalities available.
                    </Typography>
                    <img src={feature1} alt="app screens" className="round-image"></img>
                    <Typography variant="h3" sx={{ color: color }}>
                        Providing Comprehensive Tools & Learning Resources
                    </Typography>
                    <Typography variant="body2">
                        The Cryptocurrency tab offers all the necessary tools for total
                        management of crypto investments: buy, sell, send, receive, and
                        convert. It also provides educational resources to help new owners
                        learn how to start investing.
                    </Typography>
                    <img src={feature2} alt="app screens" className="round-image"></img>
                    <Typography variant="h3" sx={{ color: color }}>
                        Offering Familiar Investment Features
                    </Typography>
                    <Typography variant="body2">
                        We styled screens after the look-and-feel of traditional banking and
                        investment platforms so users would feel comfortable with an
                        interface they trust. Though the features may be new to some users,
                        the screens' balance of information and whitespace aims to not
                        overwhelm users.
                    </Typography>
                    <img src={feature3} alt="app screens" className="round-image"></img>
                </div>
                <div className="project-section">
                    <SectionHeader color={color}>Research</SectionHeader>
                    <Typography variant="body2">
                        We divided the research into three phases to familiarize ourselves
                        with the crypto space and understand the attitudes, behaviors, and
                        beliefs of both crypto owners and non-crypto owners. I led
                        background research and user interviews.
                    </Typography>
                    <HiddenDetail
                        icon={<ManageSearchIcon />}
                        title={"Background Research"}
                        summary={"Discovering the history and people in the crypto space"}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body2" sx={{ color: color2 }}>
                                    <strong>Literature Review</strong>
                                </Typography>
                                <Typography>
                                    We gathered information from online articles, research
                                    journals, and websites to learn the basics of cryptocurrencies
                                    and identify known areas of concern.
                                </Typography>
                                <img
                                    src={litReview}
                                    alt="literature review word cloud"
                                    className="round-image"
                                ></img>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body2" sx={{ color: color2 }}>
                                    <strong>Stakeholder Analysis</strong>
                                </Typography>
                                <Typography>
                                    We created a stakeholder analysis to depict the people and
                                    companies who may be affected by the integration of
                                    cryptocurrency technologies.
                                </Typography>
                                <img
                                    src={stakeholders}
                                    alt="stakeholder analysis diagram"
                                    className="round-image"
                                ></img>
                            </Grid>
                        </Grid>
                    </HiddenDetail>
                    <HiddenDetail
                        icon={<StorefrontIcon />}
                        title={"Competitive Research"}
                        summary={"Analyzing the current crypto platforms"}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body2" sx={{ color: color2 }}>
                                    <strong>Competitive Analysis</strong>
                                </Typography>
                                <Typography>
                                    We compared and analyzed the capabilities of the most popular
                                    cryptocurrency management platforms to gain insight on their
                                    features.
                                </Typography>
                                <img
                                    src={compAnalysis}
                                    alt="competitive analysis table"
                                    className="round-image"
                                ></img>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body2" sx={{ color: color2 }}>
                                    <strong>Task Analysis</strong>
                                </Typography>
                                <Typography>
                                    We analyzed Coinbase to understand the current capabilities of
                                    the leading cryptocurrency platform and see the interactions
                                    it offers.{" "}
                                </Typography>
                                <img
                                    src={taskAnalysis}
                                    alt="task analysis diagram"
                                    className="round-image"
                                ></img>
                            </Grid>
                        </Grid>
                    </HiddenDetail>
                    <HiddenDetail
                        icon={<GroupsIcon />}
                        title={"User Research"}
                        summary={
                            "Understanding what people think about crypto and online banking"
                        }
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body2" sx={{ color: color2 }}>
                                    <strong>Interviews</strong>
                                </Typography>
                                <Typography>
                                    We interviewed <strong>10 users</strong> including expert
                                    crypto owners, non crypto owners with online banking
                                    experience, and financial experts. Our goal was to understand
                                    the behaviors of crypto owners and understand the reservations
                                    of non owners.
                                </Typography>
                                <img
                                    src={interview}
                                    alt="interview with a professor photo"
                                    className="round-image"
                                ></img>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body2" sx={{ color: color2 }}>
                                    <strong>Survey</strong>
                                </Typography>
                                <Typography>
                                    We sent out a survey to <strong>114 respondents</strong> via
                                    Qualtrics and UserZoom to reach a larger population of people.
                                    Our goal was to understand people's motivations for crypto
                                    ownership and barriers to use.
                                </Typography>
                                <img
                                    src={survey}
                                    alt="qualtrics survey screenshot"
                                    className="round-image"
                                ></img>
                            </Grid>
                        </Grid>
                    </HiddenDetail>
                    <Typography variant="h3" sx={{ color: color }}>
                        Research Findings
                    </Typography>
                    <img
                        src={affinity}
                        alt="affinity mapping diagram"
                        className="round-image"
                        style={{ width: "110%", marginLeft: "-5%" }}
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
                                    Users see value in managing crypto through their online
                                    banking.
                                </strong>
                            </Typography>
                            <Typography>
                                Non owners expressed that they felt more comfortable trusting a
                                platform they already use. Current owners also said they thought
                                it would be convenient to leverage an app they already own.
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
                                    New users need educational resources to succeed with
                                    cryptocurrencies.
                                </strong>
                            </Typography>
                            <Typography>
                                Users expressed that a top reason for not owning
                                cryptocurrencies was a lack of knowledge. Experts also
                                emphasized how important being informed about cryptocurrencies
                                is for ownership.
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
                                    Need for simple, easy to follow transaction features.
                                </strong>
                            </Typography>
                            <Typography>
                                Users expressed that when it came to financial technology, the
                                intuitiveness of the interface really affected their feelings of
                                safety and willingness to use the platform.
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
                                    Users want to feel safe when dealing with crypto.{" "}
                                </strong>
                            </Typography>
                            <Typography>
                                Experts and newcomers both agree that there are a lot of
                                inherent risks associated with crypto. Therefore, a crypto
                                platform would need to address concerns of volatility,
                                uncertainty, and security.
                            </Typography>
                        </Grid>
                    </Grid>
                    <br />
                    <Typography variant="h3" sx={{ color: color }}>
                        Design Requirements
                    </Typography>
                    <Typography variant="body2">
                        With these insights in mind, we created a list of design
                        requirements that we felt would be important to include in the final
                        designs.
                    </Typography>
                    <div
                        className="pointed-block-left"
                        style={{ margin: "3rem 0  2rem 0" }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: ".25rem", fontWeight: "light" }}
                        >
                            Requirement #1
                        </Typography>
                        <Typography variant="h4" sx={{ margin: "0", color: color2 }}>
                            Volatility Awareness
                        </Typography>
                        <Typography variant="body2">
                            Provide relevant purchasing information to help manage risk. Users
                            need to be aware of a coin's history in order to make informed
                            decisions about whether they should buy, sell, or hold it.
                        </Typography>
                        <blockquote className="user-quote">
                            "In the short term, volatility is a major risk"
                        </blockquote>
                    </div>
                    <div className="pointed-block-right" style={{ marginBottom: "2rem" }}>
                        <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: ".25rem", fontWeight: "light" }}
                        >
                            Requirement #2
                        </Typography>
                        <Typography variant="h4" sx={{ margin: "0", color: color2 }}>
                            Easy Management
                        </Typography>
                        <Typography variant="body2">
                            Must have useful, intuitive management tools users can navigate
                            with ease. Users should be presented with information in an easily
                            digestible format that doesn't interfere with making transactions.
                        </Typography>
                        <blockquote className="user-quote">
                            "The bad UI on their online banking makes it really annoying to
                            use their service"
                        </blockquote>
                    </div>
                    <div className="pointed-block-right" style={{ marginBottom: "2rem" }}>
                        <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: ".25rem", fontWeight: "light" }}
                        >
                            Requirement #3
                        </Typography>
                        <Typography variant="h4" sx={{ margin: "0", color: color2 }}>
                            Access to Top Coins
                        </Typography>
                        <Typography variant="body2">
                            Should offer a selection of the most popular cryptocurrencies.
                            Users should only be able to purchase reputable coins so they have
                            the best options for investment and don't have to worry about
                            scams.
                        </Typography>
                        <blockquote className="user-quote">
                            "Banks could start with the big three cryptos"
                        </blockquote>
                    </div>
                    <div className="pointed-block-left" style={{ marginBottom: "2rem" }}>
                        <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: ".25rem", fontWeight: "light" }}
                        >
                            Requirement #4
                        </Typography>
                        <Typography variant="h4" sx={{ margin: "0", color: color2 }}>
                            Trust and Safety
                        </Typography>
                        <Typography variant="body2">
                            The system must have clear documentation, error prevention text,
                            and security features. Users should be able to confirm that their
                            financial purchases are secure and have confidence that they
                            understand the process.
                        </Typography>
                        <blockquote className="user-quote">
                            "When transferring from one wallet to another, if you miss the
                            letters you could lose all your coins"
                        </blockquote>
                    </div>
                    <div className="pointed-block-left" style={{ marginBottom: "2rem" }}>
                        <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: ".25rem", fontWeight: "light" }}
                        >
                            Requirement #5
                        </Typography>
                        <Typography variant="h4" sx={{ margin: "0", color: color2 }}>
                            Knowledge and Understanding
                        </Typography>
                        <Typography variant="body2">
                            Should support educational resources for users to make informed
                            decisions. New users should be able to learn everything required
                            for them to begin investing in cryptocurrencies through accessible
                            content on the platform.
                        </Typography>
                        <blockquote className="user-quote">
                            "There should be an educational class option for crypto like the
                            first time homeowner class I had to attend"
                        </blockquote>
                    </div>
                </div>
                <div className="project-section">
                    <SectionHeader color={color}>Design and Iteration</SectionHeader>
                    <Typography variant="body2">
                        We divided the research into three phases to familiarize ourselves
                        with the crypto space and understand the attitudes, behaviors, and
                        beliefs of both crypto owners and non-crypto owners. I led
                        background research and user interviews.
                    </Typography>
                    <Typography variant="h3" sx={{ color: color }}>
                        Sketched Concepts
                    </Typography>
                    <Typography variant="body2">
                        Given our research findings, we came up with three preliminary
                        sketched concepts that tackled our problem space. Our goal with
                        these sketches was to find out the{" "}
                        <strong>degree of control</strong> users would want over their
                        cryptocurrencies in their online banking.
                    </Typography>
                    <Grid
                        container
                        sx={{ width: "110%", marginLeft: "-5%" }}
                        justifyContent={"center"}
                    >
                        <Grid item sx={12} sm={6} md={4}>
                            <img
                                src={sketch1}
                                alt="sketch design 1"
                                className="round-image"
                            ></img>
                        </Grid>
                        <Grid item sx={12} sm={6} md={4}>
                            <img
                                src={sketch2}
                                alt="sketch design 2"
                                className="round-image"
                            ></img>
                        </Grid>
                        <Grid item sx={12} sm={6} md={4}>
                            <img
                                src={sketch3}
                                alt="sketch design 3"
                                className="round-image"
                            ></img>
                        </Grid>
                    </Grid>
                    <Typography variant="h4">
                        <em>Feedback Session 1</em>
                    </Typography>
                    <Typography variant="body2">
                        We held <strong>think-aloud sessions</strong> with 4 participants
                        using <strong>paper prototypes</strong> so they would focus on the
                        ideas behind each concept and not the look and feel. We hoped to
                        test the perceived benefits and feature awareness.
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={7}>
                            <img
                                src={paperPrototypes}
                                alt="paper prototypes"
                                className="round-image"
                            ></img>
                        </Grid>
                        <Grid item xs={12} sm={5} sx={{ padding: "1rem" }}>
                            <div className="pointed-block-right">
                                <em>
                                    "I think the option with the separate crypto section on the
                                    navigation bar made the most sense" ~ P1
                                </em>
                            </div>
                        </Grid>
                    </Grid>
                    <Typography variant="body2">
                        We analyzed what participants said they liked/disliked and where
                        they were confused. Participants preferred the amount of control
                        they had over their crypto holdings in the second and third
                        concepts. Therefore, we combined the best two concepts moving
                        forwards.
                    </Typography>
                    <Grid
                        container
                        justifyContent={"center"}
                        spacing={2}
                        sx={{ marginTop: "2rem", marginBottom: "4rem" }}
                    >
                        <Grid item xs={12} sm={6} md={4}>
                            <div
                                style={{
                                    border: `3px solid ${myStyles.grey.three}`,
                                    padding: "1rem 1rem ",
                                    borderRadius: "8px",
                                    height: "100%"
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: ".5rem",
                                    }}
                                >
                                    <Typography variant="body2" sx={{ margin: "0 .25rem 0 0" }}>
                                        <strong>Concept 1</strong>
                                    </Typography>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <CheckIcon sx={{ color: "rgba(39, 174, 96, 1)" }} />
                                    <Typography variant="body1" sx={{ margin: "0 0 1rem .5rem" }}>
                                        Showing crypto with the other accounts is a useful aggregate
                                        view
                                    </Typography>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <CloseIcon sx={{ color: "#E94B48" }} />
                                    <Typography variant="body1" sx={{ margin: "0 0 1rem .5rem" }}>
                                        Linking an external account doesn’t give enough in-app
                                        control
                                    </Typography>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <CloseIcon sx={{ color: "#E94B48" }} />
                                    <Typography variant="body1" sx={{ margin: "0 0 1rem .5rem" }}>
                                        Would rather directly buy and sell crypto through the bank
                                        they trust
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div
                                style={{
                                    border: "3px solid rgba(39, 174, 96, 0.6)",
                                    padding: "1rem 1rem ",
                                    borderRadius: "8px",
                                    height: "100%"
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: ".5rem",
                                    }}
                                >
                                    <Typography variant="body2" sx={{ margin: "0 .25rem 0 0" }}>
                                        <strong>Concept 2</strong>
                                    </Typography>
                                    <CheckCircleIcon sx={{ color: "rgba(39, 174, 96, 1)" }} />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <CheckIcon sx={{ color: "rgba(39, 174, 96, 1)" }} />
                                    <Typography variant="body1" sx={{ margin: "0 0 1rem .5rem" }}>
                                        Feels very familiar to online banking applications so it
                                        isn’t intimidating
                                    </Typography>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <CheckIcon sx={{ color: "rgba(39, 174, 96, 1)" }} />
                                    <Typography variant="body1" sx={{ margin: "0 0 1rem .5rem" }}>
                                        Buying and selling crypto through the bank feels more secure
                                    </Typography>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <CloseIcon sx={{ color: "#E94B48" }} />
                                    <Typography variant="body1" sx={{ margin: "0 0 1rem .5rem" }}>
                                        Several features were not intuitive to non-crypto users and
                                        need help text
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div
                                style={{
                                    border: "3px solid rgba(39, 174, 96, 0.6)",
                                    padding: "1rem 1rem ",
                                    borderRadius: "8px",
                                    height: "100%"
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: ".5rem",
                                    }}
                                >
                                    <Typography variant="body2" sx={{ margin: "0 .25rem 0 0" }}>
                                        <strong>Concept 3</strong>
                                    </Typography>
                                    <CheckCircleIcon sx={{ color: "rgba(39, 174, 96, 1)" }} />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <CheckIcon sx={{ color: "rgba(39, 174, 96, 1)" }} />
                                    <Typography variant="body1" sx={{ margin: "0 0 1rem .5rem" }}>
                                        Having a separate crypto navigation item makes the most
                                        sense
                                    </Typography>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <CheckIcon sx={{ color: "rgba(39, 174, 96, 1)" }} />
                                    <Typography variant="body1" sx={{ margin: "0 0 1rem .5rem" }}>
                                        The explicit learning section seems very useful for new
                                        users
                                    </Typography>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <CloseIcon sx={{ color: "#E94B48" }} />
                                    <Typography variant="body1" sx={{ margin: "0 0 1rem .5rem" }}>
                                        The organization of all the crypto functions was too
                                        overwhelming
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Typography variant="h4">
                        <em>Iterating on Feedback</em>
                    </Typography>
                    <Typography variant="body2">
                        From these sessions, we found that many users didn't understand how
                        information was organized and new users especially needed support to
                        understand new concepts.
                    </Typography>
                    <HiddenDetail
                        icon={<AccountTreeIcon />}
                        title={"Site Map"}
                        summary={"Clarify information hierarchy"}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={8}>
                                <Typography>
                                    We put together a site map to organize the content and
                                    articulate the structure for navigation. And because users
                                    liked the new crypto tab in their navigation, we focused our
                                    design efforts on how to include all the functionality in one
                                    navigation tab.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <img
                                    src={siteMap}
                                    alt="site map diagram"
                                    className="round-image"
                                ></img>
                            </Grid>
                        </Grid>
                    </HiddenDetail>
                    <HiddenDetail
                        icon={<StartIcon />}
                        title={"User Flows"}
                        summary={"Identify interaction points"}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={8}>
                                <Typography>
                                    We created user flow diagrams to document the interaction
                                    points for the tasks we pinpointed and communicate the flow of
                                    our product.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <img
                                    src={userFlow}
                                    alt="user flow diagram"
                                    className="round-image"
                                ></img>
                            </Grid>
                        </Grid>
                    </HiddenDetail>
                    <br />
                    <Typography variant="h3" sx={{ color: color }}>
                        Mid-Fidelity Prototypes
                    </Typography>
                    <Typography variant="body2">
                        With our second iteration of designs, we created a prototype to
                        flesh out the flows of important tasks. This allowed us to dive
                        deeper and figure out more specifics for navigation, layout, and
                        points of interaction.{" "}
                    </Typography>
                    <Grid
                        container
                        sx={{ width: "110%", marginLeft: "-5%" }}
                        justifyContent={"center"}
                    >
                        <Grid item sx={12} sm={6} md={4}>
                            <img
                                src={wireframe1}
                                alt="wireframe design 1"
                                className="round-image"
                            ></img>
                        </Grid>
                        <Grid item sx={12} sm={6} md={4}>
                            <img
                                src={wireframe2}
                                alt="wireframe design 2"
                                className="round-image"
                            ></img>
                        </Grid>
                        <Grid item sx={12} sm={6} md={4}>
                            <img
                                src={wireframe3}
                                alt="wireframe design 3"
                                className="round-image"
                            ></img>
                        </Grid>
                    </Grid>
                    <Typography variant="h4">
                        <em>Feedback Session 2</em>
                    </Typography>
                    <Typography variant="body2">
                        We held <strong>think-aloud sessions</strong> with 4 participants
                        using <strong>paper prototypes</strong> so they would focus on the
                        ideas behind each concept and not the look and feel. We hoped to
                        test the perceived benefits and feature awareness.
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={7}>
                            <img
                                src={wireframes}
                                alt="wireframe design 4"
                                className="round-image"
                            ></img>
                        </Grid>
                        <Grid item xs={12} sm={5} sx={{ padding: "1rem" }}>
                            <div className="pointed-block-right">
                                <em>
                                    "I would expect some brief introduction in a small blurb
                                    before I create a crypto account" ~ P2{" "}
                                </em>
                            </div>
                        </Grid>
                    </Grid>
                    <Typography variant="h4">
                        <em>Adding functionality</em>
                    </Typography>
                    <Typography variant="body2">
                        We collected a lot of feedback on how users interacted with each
                        screen for completing crypto transaction tasks.
                    </Typography>
                    <HiddenDetail
                        icon={<LiveHelpIcon />}
                        title={"Missing Feature: Onboarding Guide"}
                        summary={
                            "Users wanted additional assitance when first being introduced to the crypto features"
                        }
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={4}>
                                <Typography sx={{ marginBottom: "1rem" }}>
                                    Participants said they would expect that the app would tell
                                    them about a new crypto management function through a guided
                                    tutorial.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <img
                                    src={onboarding}
                                    alt="onboarding ideas"
                                    style={{ width: "100%" }}
                                ></img>
                            </Grid>
                        </Grid>
                    </HiddenDetail>
                    <HiddenDetail
                        icon={<AddCircleIcon />}
                        title={"Missing Feature: Shortcut Actions"}
                        summary={"Users wanted a faster way to reach different pages"}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={4}>
                                <Typography sx={{ marginBottom: "1rem" }}>
                                    Participants said they wanted to be able to quickly complete
                                    transactions without having to navigate through so many
                                    screens.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <img
                                    src={shortcut}
                                    alt="shortcut ideas"
                                    style={{ width: "100%" }}
                                ></img>
                            </Grid>
                        </Grid>
                    </HiddenDetail>
                    <br />
                    <Typography variant="h3" sx={{ color: color }}>
                        Visual Design System
                    </Typography>
                    <Typography variant="body2">
                        Taking inspiration from traditional online banking styles, we felt it was important to curate a look and feel that matched users’ expectations for a trustworthy, corporate application and<strong> promote a sense of security when dealing with cryptocurrencies.</strong>
                    </Typography>
                    <Typography variant="body2">
                        We chse a <strong>sans-serif font</strong> because it is easy to read. The clean lines and sharp edges lend to feelings of reputability important for banking applications. We chose <strong>blue</strong> because it is commonly used in corporate applications where trust is valued.
                    </Typography>
                    <img
                        src={designSystem}
                        alt="design system"
                        className="round-image"
                        style={{ border: `solid ${myStyles.grey.three}`, borderRadius: 8, }}
                    />
                    <img
                        src={hifi}
                        alt="high fidelity overview"
                        className="round-image"
                        style={{ backgroundColor: color, padding: "1rem" }}
                    />
                </div>
                <div className="project-section">
                    <SectionHeader color={color}>Final Designs</SectionHeader>
                    <Typography variant="h4">
                        <em>Onboarding Tutorial</em>
                    </Typography>
                    <Typography variant="body2">
                        Onboarding callouts introduce users to the new Crptocurrency tab and highlight the educational resources and investment tools.                    </Typography>

                    <img
                        src={hifi1}
                        className="round-image"
                        style={{ width: "100%" }}
                    />
                    <Typography variant="h4">
                        <em>Educational Resources</em>
                    </Typography>
                    <Typography variant="body2">
                        Short videos, guides, and walkthroughs offer users in-app resources for helping new users learn about crypto ownership. Learning modules are short (less than 10 minutes), and digestible as to not overwhelm users.
                    </Typography>

                    <img
                        src={hifi2}
                        className="round-image"
                        style={{ width: "100%" }}
                    />
                    <Typography variant="h4">
                        <em>Investment Tools
                        </em>
                    </Typography>
                    <Typography variant="body2">
                        Users can safely buy, sell, send, receive, and convert crypto using straightforward tools connected to their bank account. Only the top coins are offered and users are able to access the history of each coin to inform their decisions.</Typography>

                    <img
                        src={hifi3}
                        className="round-image"
                        style={{ width: "100%" }}
                    />
                    <img
                        src={hifi4}
                        className="round-image"
                        style={{ width: "100%" }}
                    />
                    <Typography variant="h4">
                        <em>Summative Evaluation</em>
                    </Typography>
                    <Typography variant="body2">
                        We completed a final round of evaluations with users and design experts to assess whether users could easily complete key tasks within the application, the overall ease of use of the prototype, and user satisfaction with the interface's content and aesthetics.
                    </Typography>
                    <HiddenDetail
                        icon={<AdUnitsIcon />}
                        title={"Usability Test"}
                        summary={
                            "Task-based user testing with crypto and non-crypto users"
                        }>

                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={9}>
                                <Typography>
                                    We had 6 users (3 crypto users, 3 non-crypto users))complete a set of tasks and complete a <strong>System Usability Scale (SUS)</strong> survey to evaluate the usability of our system
                                </Typography>
                                <Typography sx={{ marginBottom: "1rem" }}>
                                    Our SUS data suggests that our system has an acceptable usability with 84.58 / 100. It indicates that there are some small changes that still need to be made.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={3} justifyContent={"center"}>
                                <img
                                    src={sus}
                                    alt="sus diagram"
                                    style={{ width: "100%", maxWidth: '200px', margin: "auto", display: "flex", justifyContent: "center" }}
                                ></img>
                            </Grid>
                        </Grid>
                    </HiddenDetail>
                    <HiddenDetail
                        icon={<ContentPasteSearchIcon />}
                        title={"Heuristic Evaluation"}
                        summary={"Expert analysis of application of design principles"}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={9}>
                                <Typography>
                                    We had 6 users (3 crypto users, 3 non-crypto users))complete a set of tasks and complete a <strong>System Usability Scale (SUS)</strong> survey to evaluate the usability of our system
                                </Typography>
                                <Typography sx={{ marginBottom: "1rem" }}>
                                    We had 3 design experts review our mockups based on Jakob Nielsen's 10 Usability Heuristics to evaluate our adherence to design principles.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={3} justifyContent={"center"}>
                                <img
                                    src={he}
                                    alt="heuristic evaluation diagram"
                                    style={{ width: "100%", maxWidth: '200px', margin: "auto", display: "flex", justifyContent: "center" }}
                                ></img>
                            </Grid>
                        </Grid>
                    </HiddenDetail>
                </div>
                <div className="project-section">
                    <SectionHeader color={color}>Impact</SectionHeader>

                    <Typography variant="h4"><em>Validating A Business Opportunity</em></Typography>
                    <Typography variant="body2">
                        The research we conducted to understand the cryptocurrency community, digital wallet 
                        market, and user population established a foundation of product and user research 
                        for the client to justify a future venture in the space. The results from the testing
                        with our mobile application further supports the product idea. 
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
                    projects={[projects.mastercard, projects.pecss, projects.insomniac]}
                    isFull={false}
                />
            </Grid>
        </div>
    );
}
export default Fiserv;
