import { Grid, Typography } from "@material-ui/core";
import Stakeholders from "./resources/Fiserv/fiservStakeholders.jpeg";
import * as myStyles from "../MyStyles";
import SectionHeader from "./SectionHeader";
import Quote from "./Quote";
import FiservCover from "./resources/Fiserv/FiservCover.png";
import FiservLogo from "./resources/Fiserv/Fiserv_logo.png";
import BasicInfo from "./BasicInfo";
import HiFi from "./resources/Fiserv/HiFi.png";
import litReview from "./resources/Fiserv/litReview.png";
import interview1 from "./resources/Fiserv/interview1.jpeg";
import process from "./resources/Fiserv/process.png";
import affintiy from "./resources/Fiserv/affinity.jpg";
import comp from "./resources/Fiserv/comp.png";
import researchTimeline from "./resources/Fiserv/researchTimeline.png";
import designTimeline from "./resources/Fiserv/designTimeline.png";
import coinbase from "./resources/Fiserv/coinbase-task.jpg";
import persona1 from "./resources/Fiserv/persona1.png";
import persona2 from "./resources/Fiserv/persona2.png";
import storyboard1 from "./resources/Fiserv/storyboard1.jpeg";
import storyboard2 from "./resources/Fiserv/storyboard2.jpeg";
import sketches from "./resources/Fiserv/sketches.png";
import feedback1 from "./resources/Fiserv/initial-feedback.jpeg";
import wireframes from "./resources/Fiserv/wireframes.png";
import sitemap from "./resources/Fiserv/fiserv-sitemap.png";
import userflow from "./resources/Fiserv/fiserv-userflow.png";
import annSketches from "./resources/Fiserv/annotated-sketch.png";
import newFeature from "./resources/Fiserv/newFeature.png";
import designSystem from "./resources/Fiserv/designSystem.png";
import learning from "./resources/Fiserv/learning.png";
import onboarding from "./resources/Fiserv/onboarding.png";
import convert from "./resources/Fiserv/convert.png";
import investing from "./resources/Fiserv/investing.png";
import sell from "./resources/Fiserv/sell.png";
import send from "./resources/Fiserv/send.png";
import newLearn from "./resources/Fiserv/newLearn.png";
import bigNumbers from "./resources/Fiserv/bigNumbers.png";
import ints from "./resources/Fiserv/ints.png";

import ProjectCards from "./ProjectCards";

import KlixCover from "./resources/Klix/Klix-cover.png";
import PECSSCover from "./resources/PECSS/PECSS-cover.png";
import MastercardCover from "./resources/Mastercard/Mastercard-cover.png";

const otherProjects = [
    {
        name: "Mastercard: Product Experience Design",
        image: MastercardCover,
        chips: ["Internship", "UX Design", "B2B + B2C"],
        path: "mastercard",
    },
    {
        name: "PECSS — PTSD Therapy Platform",
        image: PECSSCover,
        chips: ["Healthcare", "HCI Research / UX Design", "NSF"],
        path: "pecss",
    },

    {
        name: "Klix — Bringing Gamers Together",
        image: KlixCover,
        chips: ["Case Study", "UX Design"],
        path: "klix",
    },
];

const FiservDetails = () => {
    return (
        <div>
            <img
                src={FiservCover}
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
                            Fiserv: Crypto + Online Banking
                        </Typography>
                        <div style={{ paddingBottom: "32px" }}>
                            <span style={myStyles.chipStyle}>Case Study</span>
                            <span style={myStyles.chipStyle}>
                                UX Design / UX Research
                            </span>
                            <span
                                style={{
                                    ...myStyles.chipStyle,
                                    backgroundColor: myStyles.grey.four,
                                }}
                            >
                                Duration: 14 weeks
                            </span>
                        </div>
                    </div>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    md={8}
                    style={{ marginBottom: "2rem" }}
                >
                    <BasicInfo
                        tools={[
                            "Figma",
                            "Miro",
                            "Qualtrics",
                            "UserTesting",
                            "AdobeXD",
                        ]}
                        team={[
                            "Kyle Leinart",
                            "Xiaoyun Chen",
                            "Vidushi Jain",
                            "Rob MacDonald",
                        ]}
                        design={
                            "Brainstorming, concept designs, wireframes, mid and high-fidelity prototypes, visual design system"
                        }
                        research={
                            "Background research, stakeholder analysis, competitive analysis, interviews, survey, personas, user testing"
                        }
                    />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={1}
                alignItems="top"
                style={{
                    ...myStyles.gridInformation,
                    marginTop:"-2rem"
                }}
            >
                <Grid container item xs={12} md={8}>
                    <SectionHeader
                        color={myStyles.fiserv.primary}
                        header={"Problem Space"}
                    />
                    <Typography variant="body2" component="p">
                        In the past decade, cryptocurrencies have gained
                        popularity as a potentially powerful digital currency.
                        One way for it to take the next step towards widespread
                        acceptance is to integrate it into everyday banking
                        services and experiences.
                    </Typography>
                    <Typography
                        variant="h4"
                        component="em"
                        style={{ ...myStyles.textBlock, marginLeft: "2.5rem" }}
                    >
                        How might we support users' cryptocurrency management
                        within familiar banking services?
                    </Typography>
                    <SectionHeader
                        color={myStyles.fiserv.primary}
                        header={"Design Process"}
                    />
                    <img
                        src={process}
                        alt="Design Thinking diagram"
                        style={{ width: "100%", margin: "3rem 0" }}
                    ></img>

                    <SectionHeader
                        color={myStyles.fiserv.primary}
                        header={"Proposed Solution"}
                    />
                    <Typography variant="body2" component="p">
                        We designed a mobile app integration of crypto
                        management tools for{" "}
                        <strong>
                            buying, selling, monitoring, and sending
                            cryptocurrencies
                        </strong>{" "}
                        that match the visual styling of traditional online
                        banking services.
                    </Typography>
                    <Typography variant="body2" component="p">
                        In order to appeal to first time crypto-users, we
                        emphasized <strong>onboarding activities</strong> and{" "}
                        <strong>learning opportunities for novices.</strong>
                    </Typography>
                </Grid>
            </Grid>
            <div style={{ backgroundColor: myStyles.fiserv.primary }}>
                <img
                    src={HiFi}
                    alt="High fidelity mockups"
                    style={{ width: "80%", marginLeft: "10%" }}
                ></img>
            </div>
            <Grid
                container
                spacing={1}
                alignItems="top"
                style={{
                    ...myStyles.gridInformation,
                    paddingBottom: "10vh",
                }}
            >
                <Grid item xs={12} md={8}>
                    <SectionHeader
                        color={myStyles.fiserv.primary}
                        header={"Research Methods"}
                    />
                    <Typography variant="body2" component="p">
                        In order to better understand our problem space and
                        determine user needs, we employed a series of research
                        methods to explore the attitudes, behaviors, and beliefs
                        of both crypto owners and non-crypto owners.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                    <img
                        src={researchTimeline}
                        alt="research timeline "
                        style={{
                            width: "100%",
                        }}
                    />
                </Grid>

                <Grid
                    container
                    item
                    spacing={3}
                    alignItems="top"
                    style={{ padding: "2rem 0" }}
                    xs={12}
                    md={8}
                >
                    <Grid item>
                        <Typography variant="h3">
                            What is the broader context of the cryptocurrency
                            space?
                        </Typography>
                        <Typography variant="body2" component="p">
                            We began with researching the context for our
                            problem space, including the history of
                            cryptocurrencies, existing issues, and important
                            concepts like blockchain and private keys. Knowing
                            this background was the foundation for understanding
                            our target users' goals, needs, and frustrations in
                            the space.
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} sm={6}>
                        <Grid item>
                            <Typography variant="subtitle1" component="em">
                                History of concerns
                            </Typography>
                            <Typography
                                variant="h4"
                                component="p"
                                style={{
                                    color: myStyles.fiserv.secondary,
                                    margin: "-.4rem 0 .5rem 0",
                                }}
                            >
                                Literature review
                            </Typography>
                            <Typography variant="subtitle2" component="p">
                                We gathered information from online articles,
                                research journals, and websites to learn the
                                basics of cryptocurrencies and identify known
                                areas of concern.
                            </Typography>
                        </Grid>
                        <Grid
                            style={{
                                alignContent: "center",
                            }}
                        >
                            <img
                                src={litReview}
                                alt="common crypto concerns "
                                style={{
                                    width: "85%",
                                    maxWidth: "500px",
                                    display: "flex",
                                    margin: "1rem auto",
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container item xs={12} sm={6}>
                        <Grid item>
                            <Typography variant="subtitle1" component="em">
                                Business impact
                            </Typography>
                            <Typography
                                variant="h4"
                                component="p"
                                style={{
                                    color: myStyles.fiserv.secondary,
                                    margin: "-.4rem 0 .5rem 0",
                                }}
                            >
                                Stakeholder Map
                            </Typography>
                            <Typography variant="subtitle2" component="p">
                                We created a stakeholder analysis to depict the
                                people and companies who may be affected by the
                                integration of cryptocurrency technologies.
                            </Typography>
                        </Grid>
                        <Grid
                            style={{
                                margin: "auto",
                            }}
                        >
                            <img
                                src={Stakeholders}
                                alt="Stakeholder Anaylsis"
                                style={{
                                    width: "90%",
                                    maxWidth: "350px",
                                    display: "flex",
                                    justifyContent: "center",
                                    margin: "auto",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="top"
                style={{
                    ...myStyles.gridInformation,
                    backgroundColor: myStyles.grey.four,
                }}
            >
                <Grid container item xs={12} md={8}>
                    <Grid>
                        <Typography variant="h3">
                            What are the existing technologies for
                            cryptocurrency management?
                        </Typography>
                        <Typography variant="body2" component="p">
                            We reviewed some of the top cryptocurrency tools to
                            understand their functionalities. Exploring current
                            offerings allowed us to investigate users' mental
                            models and find opportunities for improvement.
                        </Typography>
                    </Grid>

                    <Grid
                        container
                        item
                        alignItems="top"
                        style={{ padding: "2rem 0" }}
                    >
                        <Grid
                            container
                            item
                            xs={12}
                            sm={6}
                            style={{ padding: "1rem" }}
                        >
                            <Grid item>
                                <Typography variant="subtitle1" component="em">
                                    Current capabilities
                                </Typography>
                                <Typography
                                    variant="h4"
                                    component="p"
                                    style={{
                                        color: myStyles.fiserv.secondary,
                                        margin: "-.4rem 0 .5rem 0",
                                    }}
                                >
                                    Competitive Analysis
                                </Typography>
                                <Typography variant="subtitle2" component="p">
                                    We compared and analyzed capabilities of the
                                    most popular cryptocurrency management
                                    platforms to gain insight on their features.
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                style={{
                                    margin: "auto",
                                    alignContent:"top",
                                    padding:".5rem",
                                    backgroundColor:"white"
                                }}
                            >
                                <img
                                    src={comp}
                                    alt="competitive analysis diagram"
                                    style={{
                                        width: "90%",
                                        display: "flex",
                                        justifyContent: "center",
                                        margin: "0 auto",
                                        
                                    }}
                                ></img>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={12}
                            sm={6}
                            style={{ padding: "1rem" }}
                        >
                            <Grid item>
                                <Typography variant="subtitle1" component="em">
                                    Current user flows
                                </Typography>
                                <Typography
                                    variant="h4"
                                    component="p"
                                    style={{
                                        color: myStyles.fiserv.secondary,
                                        margin: "-.4rem 0 .5rem 0",
                                    }}
                                >
                                    Task Analysis
                                </Typography>
                                <Typography variant="subtitle2" component="p">
                                    We analyzed <strong>Coinbase</strong> to
                                    understand the current capabilities of the
                                    leading cryptocurrency platform and see the
                                    interactions it offers.
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                style={{
                                    alignContent: "top",
                                    padding:".5rem",
                                    backgroundColor:"white"
                                }}
                            >
                                <img
                                    src={coinbase}
                                    alt="task analysis diagram"
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        margin: "0 auto",
                                    }}
                                ></img>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="top"
                style={{
                    ...myStyles.gridInformation,
                }}
            >
                <Grid container item xs={12} md={8}>
                    <Typography variant="h3" >
                        How do people feel about cryptocurrencies and online
                        banking?
                    </Typography>
                    <Typography variant="body2" component="p">
                        We reached out to crypto users of various skill level,
                        financial experts, and online banking consumers to
                        understand current financial management practices and
                        attitudes toward the future of cryptocurrencies.
                    </Typography>
                    <Grid container item>
                        <Grid
                            container
                            xs={11}
                            style={{ padding: ".5rem 0", margin: "auto" }}
                        >
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                style={{
                                    display: "grid",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <img
                                    src={ints}
                                    alt="Interview numbers"
                                    style={{ width: "100%", maxWidth: "600px" }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <img
                                    src={bigNumbers}
                                    alt="Survey and interview numbers"
                                    style={{ width: "100%", maxWidth: "600px" }}
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            item
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "2rem 0",
                            }}
                        >
                            <Grid item xs={12}>
                                <img
                                    src={interview1}
                                    alt="Interview with professor"
                                    style={{ width: "80%", marginLeft: "10%" }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    style={{
                                        width: "100%",
                                        textAlign: "center",
                                        marginBottom: "2rem",
                                    }}
                                >
                                    Interview with Georgia Tech finance
                                    professor
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" component="p">
                                We synthesized all the data from our interviews
                                and surveys and organized them through affinity
                                mapping. We used the themes from our affinity
                                map findings to come up with design
                                implications.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <img
                    src={affintiy}
                    alt="map of sticky notes"
                    style={{ width: "90%", marginLeft: "5%" }}
                />
                <Grid
                    container
                    spacing={1}
                    alignItems="top"
                    style={{
                        ...myStyles.gridInformation,
                    }}
                >
                    <Grid item xs={12} md={8}>
                        <Typography variant="h3">Research Findings</Typography>{" "}
                    </Grid>

                    <Grid
                        container
                        item
                        spacing={3}
                        alignItems="top"
                        xs={12}
                        md={8}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            style={{ verticalAlign: "middle" }}
                        >
                            <Typography variant="h5" component="p">
                                <strong
                                    style={{ color: myStyles.fiserv.primary }}
                                >
                                    01.
                                </strong>
                            </Typography>
                            <Typography variant="body2" component="p">
                                Cryptocurrency needs stability and safety
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            style={{ verticalAlign: "middle" }}
                        >
                            <Typography variant="h5" component="p">
                                <strong
                                    style={{ color: myStyles.fiserv.primary }}
                                >
                                    02.
                                </strong>
                            </Typography>
                            <Typography variant="body2" component="p">
                                Education is essential to own cryptocurrency
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            style={{ verticalAlign: "middle" }}
                        >
                            <Typography variant="h5" component="p">
                                <strong
                                    style={{ color: myStyles.fiserv.primary }}
                                >
                                    03.
                                </strong>
                            </Typography>
                            <Typography variant="body2" component="p">
                                Cryptocurrency is seen as a growth investment
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            style={{ verticalAlign: "middle" }}
                        >
                            <Typography variant="h5" component="p">
                                <strong
                                    style={{ color: myStyles.fiserv.primary }}
                                >
                                    04.
                                </strong>
                            </Typography>
                            <Typography variant="body2" component="p">
                                There is perceived risk involved with
                                cryptocurrencies
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            style={{ verticalAlign: "middle" }}
                        >
                            <Typography variant="h5" component="p">
                                <strong
                                    style={{ color: myStyles.fiserv.primary }}
                                >
                                    05.
                                </strong>
                            </Typography>
                            <Typography variant="body2" component="p">
                                Crypto owners and non-owners see value in
                                managing crypto within their online banking
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            style={{ verticalAlign: "middle" }}
                        >
                            <Typography variant="h5" component="p">
                                <strong
                                    style={{ color: myStyles.fiserv.primary }}
                                >
                                    06.
                                </strong>
                            </Typography>
                            <Typography variant="body2" component="p">
                                Current technologies employ, simple, easy to
                                follow designs
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} md={8}>
                        <SectionHeader
                            color={myStyles.fiserv.primary}
                            qual
                            header={"Defining User Needs"}
                        />

                        <Typography variant="body2" component="p">
                            From our primary and secondary research, we were
                            able to define user needs and design implications
                            for our future concepts.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="top"
                style={{
                    backgroundColor: myStyles.fiserv.primary,
                    padding: "1rem",
                    justifyContent: "center",
                }}
            >
                <Grid
                    container
                    item
                    xs={12}
                    md={8}
                    style={{
                        verticalAlign: "middle",
                        backgroundColor: "white",
                        margin: ".5rem",
                        padding: "0 2rem",
                        borderRadius: "6px",
                    }}
                >
                    <Grid item xs={6}>
                        <Typography
                            variant="h4"
                            component="p"
                            style={{ color: myStyles.fiserv.secondary }}
                        >
                            Volatility Awareness
                        </Typography>
                        <Typography component="p">
                            Provide relevant purchasing information to help
                            manage risk
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Quote
                            quote={
                                "In the short term, volatility is a major risk"
                            }
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    md={8}
                    style={{
                        verticalAlign: "middle",
                        backgroundColor: "white",
                        margin: ".5rem",
                        padding: "0 2rem",
                        borderRadius: "6px",
                    }}
                >
                    <Grid item xs={6}>
                        <Typography
                            variant="h4"
                            component="p"
                            style={{ color: myStyles.fiserv.secondary }}
                        >
                            Easy Management
                        </Typography>
                        <Typography component="p">
                            Must have useful, intuitive management tools users
                            can navigate with ease
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Quote
                            quote={
                                "The bad UI on their online banking makes it really annoying to use their service"
                            }
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    md={8}
                    style={{
                        verticalAlign: "middle",
                        backgroundColor: "white",
                        margin: ".5rem",
                        padding: "0 2rem",
                        borderRadius: "6px",
                    }}
                >
                    <Grid item xs={6}>
                        <Typography
                            variant="h4"
                            component="p"
                            style={{ color: myStyles.fiserv.secondary }}
                        >
                            Access to Top Coins
                        </Typography>
                        <Typography component="p">
                            Should offer a selection of the most popular
                            cryptocurrencies
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Quote
                            quote={
                                "Bank could start with the big three cryptos"
                            }
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    md={8}
                    style={{
                        verticalAlign: "middle",
                        backgroundColor: "white",
                        margin: ".5rem",
                        padding: "0 2rem",
                        borderRadius: "6px",
                    }}
                >
                    <Grid item xs={6}>
                        <Typography
                            variant="h4"
                            component="p"
                            style={{ color: myStyles.fiserv.secondary }}
                        >
                            Trust and Safety
                        </Typography>
                        <Typography component="p">
                            The system must have clear documentation, error
                            prevention text, and security features
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Quote
                            quote={
                                "When transferring from one wallet to another, if you miss the letters you could lose all your coins"
                            }
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    md={8}
                    style={{
                        verticalAlign: "middle",
                        backgroundColor: "white",
                        margin: ".5rem",
                        padding: "0 2rem",
                        borderRadius: "6px",
                    }}
                >
                    <Grid item xs={6}>
                        <Typography
                            variant="h4"
                            component="p"
                            style={{ color: myStyles.fiserv.secondary }}
                        >
                            Knowledge and Understanding
                        </Typography>
                        <Typography component="p">
                            Should support educational resources for users to
                            make informed decisions
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Quote
                            quote={
                                "There should be an educational class option for crypto like the first time homeowner class I had to attend"
                            }
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={1}
                alignItems="top"
                style={{
                    ...myStyles.gridInformation,
                }}
            >
                <Grid container item xs={12} md={8}>
                    <Grid xs={12}>
                        <Typography variant="h3">Personas</Typography>
                        <Typography variant="body2" component="p">
                            We created a set of personas for potential users of
                            varying levels of expertise with cryptocurrencies to
                            contextualize our user research data. This helped in{" "}
                            <strong>promoting empathy</strong> with the end user
                            defining the{" "}
                            <strong> goals and frustrations</strong> so we could
                            identify core areas to address.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <img
                            src={persona1}
                            alt="Persona of amateur crypto user"
                            style={{ width: "100%", padding: "0 .25rem" }}
                        ></img>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img
                            src={persona2}
                            alt="Persona of amateur crypto user"
                            style={{ width: "100%", padding: "0 .25rem" }}
                        ></img>
                    </Grid>
                    <Grid xs={12} style={{margin: "10vh 0"}}>
                        <Typography variant="h3">Storyboards</Typography>
                        <Typography variant="body2" component="p">
                            We designed a couple of storyboards to illustrate
                            two usage scenarios that we thought would capture
                            important opportunities for our solution. I helped
                            come up with the narrative while Vidushi illustrated
                            each panel.
                        </Typography>
                        <Typography
                            variant="h4"
                            component="p"
                            style={{ color: myStyles.fiserv.secondary }}
                        >
                            Storyboard 1: Instant global transfers
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            style={{ width: "100%" }}
                        >
                            Storyboard for user leveraging cryptocurrency to
                            send and receive transactions across the globe
                            quickly
                        </Typography>
                        <img
                            src={storyboard1}
                            alt="storyboard"
                            style={{ width: "100%", maxWidth: "700px" }}
                        ></img>

                        <Typography
                            variant="h4"
                            component="p"
                            style={{ color: myStyles.fiserv.secondary }}
                        >
                            Storyboard 2: Built in knowledge building
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            style={{ width: "100%" }}
                        >
                            Storyboard for new user learning about
                            cryptocurrency through their online banking
                        </Typography>
                        <img
                            src={storyboard2}
                            alt="storyboard"
                            style={{
                                width: "100%",
                                maxWidth: "700px"
                            }}
                        ></img>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="top"
                style={{
                    ...myStyles.gridInformation,
                    backgroundColor: myStyles.grey.four,
                }}
            >
                <Grid container item xs={12} md={8}>
                    <SectionHeader
                        color={myStyles.fiserv.primary}
                        qual
                        header={"Design and Iteration"}
                    />
                    <Grid item>
                        <img
                            src={designTimeline}
                            alt="design timeline "
                            style={{
                                width: "100%",
                                margin:"2rem 0"
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="h3">Sketched Concepts</Typography>
                </Grid>
                <Grid container spacing={1} xs={12} md={8}>
                    <Grid item sm={8}>
                        <Typography variant="body2" component="p">
                            Given our research findings, we came up with three
                            preliminary sketched concepts that tackled our
                            problem space. Our goal with these sketches was to
                            find out the degree of control users would want over
                            their cryptocurrencies in their online banking.
                        </Typography>
                        <ol>
                            <Typography variant="list" component="li">
                                Crypto on the homepage with management tools
                            </Typography>
                            <Typography variant="list" component="li">
                                Integrated navigation with educational component
                            </Typography>
                            <Typography variant="list" component="li">
                                Externally linked crypto accounts
                            </Typography>
                        </ol>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <img
                            src={sketches}
                            alt="sketches"
                            style={{
                                width: "80%",
                                marginLeft: "10%",
                            }}
                        ></img>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="top"
                style={{
                    ...myStyles.gridInformation,
                }}
            >
                <Grid xs={12} md={8}>
                    <Typography variant="h3">
                        Feedback Session #1
                    </Typography>
                    <Typography variant="body2" component="p">
                        We held <strong>think-aloud</strong> sessions with 4
                        participants using <strong>paper prototypes</strong> so
                        they would focus on the ideas behind each concept and
                        not the look and feel. We hoped to test the{" "}
                        <strong>
                            perceived benefits, feature awareness and intention
                            of use
                        </strong>
                    </Typography>
                    <Grid
                        container
                        spacing={1}
                        style={{ justifyContent: "center" }}
                    >
                        <Grid item xs={7}>
                            <img
                                src={feedback1}
                                alt="paper prototyping feedback session"
                                style={{
                                    width: "100%",
                                }}
                            ></img>
                            <Typography
                                variant="subtitle1"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                Paper prototyping session
                            </Typography>
                        </Grid>
                        <Grid xs={12}>
                            <Typography variant="body2" component="p">
                                We analyzed what participants said they
                                liked/disliked, areas of confusion, and
                                subjective ratings of the concept. We compiled
                                the findings from our participants to evaluate
                                what direction to move forwards with.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Quote
                                quote={
                                    "I think the option with the separate crypto section on the navigation bar made the most sense ~ P1"
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Quote
                                quote={
                                    "I can see the educational section being really useful for new learners ~ P3"
                                }
                            />
                        </Grid>
                        <Grid xs={12}>
                            <Typography variant="body2" component="p">
                                Participants preferred the amount of control
                                they had over their crypto holdings in the first
                                and second concepts. Moving forwards, we chose
                                to combine the preferred navigation method and
                                learning resources section of the second concept
                                with the in-depth crypto transaction options of
                                the first concept.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <img
                                src={annSketches}
                                alt="annotated sketches"
                                style={{
                                    width: "100%",
                                }}
                            ></img>
                            <Typography
                                variant="subtitle1"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                Example of some feedback we got from the
                                sketches
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">
                            Information Architecture
                        </Typography>
                    </Grid>
                    <Grid container item style={{ justifyContent: "center" }}>
                        <Grid item xs={12} sm={5}>
                            <Typography variant="body2" component="p">
                                After deciding on a direction for our product,
                                we put together a site map to{" "}
                                <strong>organize the content</strong> and{" "}
                                <strong>
                                    articulate the structure for navigation.
                                </strong>
                            </Typography>
                        </Grid>

                        <Grid item xs={8} sm={7}>
                            <img
                                src={sitemap}
                                alt="sitemap"
                                style={{
                                    width: "100%",
                                    padding: "1rem",
                                }}
                            ></img>
                            <Typography
                                variant="subtitle1"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                Site map of product by Xiaoyun Chen
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h3">
                                User Flow Diagrams
                            </Typography>
                            <Typography variant="body2" component="p">
                                We created user flow diagrams to{" "}
                                <strong>document the interaction points</strong>{" "}
                                for the tasks we pinpointed and{" "}
                                <strong>communicate the flow</strong> of our
                                product.
                            </Typography>
                            <img
                                src={userflow}
                                alt="userflow diagrams"
                                style={{ width: "100%" }}
                            ></img>
                            <Typography
                                variant="subtitle1"
                                style={{
                                    width: "100%",
                                    textAlign: "center",
                                    marginBottom: "2rem",
                                }}
                            >
                                Example of user flows diagrams by Xiaoyun Chen
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="top"
                style={{
                    ...myStyles.gridInformation,
                    backgroundColor: myStyles.grey.four,
                }}
            >
                <Grid item xs={12} md={8}>
                    <Typography variant="h3">
                        Mid Fidelity Prototypes
                    </Typography>
                    <Typography variant="body2" component="p">
                        With our second iteration of designs, we created a
                        prototype to flesh out the{" "}
                        <strong>flows of important tasks.</strong> This allowed
                        us to dive deeper and figure out more specifics for
                        <strong>
                            {" "}
                            navigation, layout, and points of interaction.
                        </strong>
                    </Typography>
                    <img
                        src={wireframes}
                        alt="wireframes"
                        style={{ width: "100%" }}
                    ></img>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="h3">Feedback Session #2</Typography>
                    <Typography variant="body2" component="p">
                        For our prototype, we conducted{" "}
                        <strong>
                            moderated, task-based usability testing{" "}
                        </strong>
                        with 3 users — a cryptocurrency owner, a Fiserv staff
                        member and a non-owner of cryptocurrency to cover three
                        areas of owner, non-owner and industry expert.
                    </Typography>
                </Grid>

                <Grid container item xs={12} md={8}>
                    <Grid item xs={12} sm={6}>
                        <Quote
                            quote={
                                "I would expect some brief introduction in a small blurb before I create a crypto account ~ P2"
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Quote
                            quote={
                                "I was confused on how many times I had to hit back to get to the portfolio page ~ P3"
                            }
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="body2" component="p">
                        We received a lot of positive feedback about the content
                        and layout of our designs. We created a list of areas to
                        address in our next iteration — such as missing features
                        and improved flows.
                    </Typography>
                    <img
                        src={newFeature}
                        alt="New features"
                        style={{ width: "100%", margin: "1rem 0" }}
                    ></img>
                    <Typography
                        variant="subtitle1"
                        style={{ width: "100%", textAlign: "center" }}
                    >
                        Example iterations with new design ideas
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="top"
                style={{
                    ...myStyles.gridInformation,
                }}
            >
                <Grid container item xs={12} md={8}>
                    <SectionHeader
                        color={myStyles.fiserv.primary}
                        qual
                        header={"High Fidelity Designs"}
                    />
                    <Typography variant="body2" component="p">
                        With the feedback on our wireframes, we iterated on the
                        designs and began creating a high-fidelity prototype.
                    </Typography>
                    <Typography variant="h3">Visual Design System</Typography>
                    <Typography variant="body2" component="p">
                        Taking inspiration from traditional online banking
                        styles, I created a shared visual design system to
                        ensure our prototype had consistent typography, colors,
                        spacing, and components. We felt it was important to
                        curate a look and feel that matched users’ expectations
                        for a trustworthy, corporate application and{" "}
                        <strong>
                            {" "}
                            promote a sense of security when dealing with
                            cryptocurrencies.
                        </strong>
                    </Typography>
                    <img
                        src={designSystem}
                        alt="Visual design system"
                        style={{ width: "100%", margin: "1rem 0" }}
                    ></img>
                    <Grid
                        container
                        item
                        alignItems="top"
                        style={{
                            justifyContent: "center",
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            style={{
                                padding: "1rem 2rem",
                                borderRadius: "6px",
                            }}
                        >
                            <Typography variant="h4" component="p">
                                <strong
                                    style={{ color: myStyles.fiserv.secondary }}
                                >
                                    Typography
                                </strong>
                            </Typography>
                            <Typography component="p">
                                We chose a <strong>sans-serif</strong> font
                                because it is easy to read. The clean lines and
                                sharp edges lend to{" "}
                                <strong>feelings of reputability</strong>{" "}
                                important for banking applications.
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            style={{
                                padding: "1rem 2rem",
                                borderRadius: "6px",
                            }}
                        >
                            <Typography variant="h4" component="p">
                                <strong
                                    style={{ color: myStyles.fiserv.secondary }}
                                >
                                    Color
                                </strong>
                            </Typography>
                            <Typography component="p">
                                The primary colors we used are black, white, and
                                shades of blue. We chose <strong>blue</strong>{" "}
                                because it is commonly used in corporate
                                applications where <strong>trust</strong> is
                                valued.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item>
                        <Grid item xs={12}>
                            <Typography variant="h3">
                                Leveraging a Shared Design Language
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={7} md={8}>
                            <Typography
                                component="p"
                                style={{
                                    marginRight: "1rem",
                                }}
                            >
                                By creating this design system in Figma, I was
                                able to{" "}
                                <strong> collaboratively design </strong> our
                                prototype with my group members Xiaoyun and
                                Vidushi and ensure that we were able to come up
                                with a <strong> cohesive product.</strong>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <img
                                src={newLearn}
                                alt="transition from mid to high fidelity designs"
                                style={{
                                    width: "80%",
                                    marginTop: "1rem",
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h3">Sample Workflows</Typography>
                        <Typography component="p">
                            The following is a selection of the most important
                            user workflows that we designed for our
                            high-fidelity prototype.
                        </Typography>
                        <Typography
                            variant="h4"
                            style={{
                                color: myStyles.fiserv.secondary,
                            }}
                        >
                            Onboarding Tutorial + Floating Action Button
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "-1rem" }}>
                        <ul>
                            <Typography variant="list" component="li">
                                Onboarding callouts addressed suggestions from
                                our wireframe feedback session to create a
                                tutorial to help new users.{" "}
                            </Typography>
                            <Typography variant="list" component="li">
                                The floating action button was our team’s
                                solution to providing quicker methods of
                                navigating between key transaction functions.{" "}
                            </Typography>
                        </ul>
                    </Grid>
                    <Grid item xs={12}>
                        <img
                            src={onboarding}
                            alt="onboarding screen shots"
                            style={{
                                width: "100%",
                                backgroundColor: myStyles.grey.four,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3"
                        style={{
                            color: myStyles.fiserv.secondary,
                        }}>
                            Educational Resources
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        style={{ paddingRight: "1rem", marginTop: "-1rem" }}
                    >
                        <ul>
                            <Typography variant="list" component="li">
                                Our research pointed to a need for increased
                                knowledge of cryptocurrencies, especially for
                                new users.
                            </Typography>
                            <Typography variant="list" component="li">
                                Learning modules are short (less than 10
                                minutes), and digestible as to not overwhelm
                                users
                            </Typography>
                            <Typography variant="list" component="li">
                                Transcripts are available for videos in order to
                                be more accessible to all users and offer an
                                alternative way to consume the video content.
                            </Typography>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img
                            src={learning}
                            alt="educational resources screen shots"
                            style={{
                                width: "100%",
                                backgroundColor: myStyles.grey.four,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h4" style={{
                                color: myStyles.fiserv.secondary,
                            }}
                            >
                            New User Buying Crypto
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "-1rem" }}>
                        <ul>
                            <Typography variant="list" component="li">
                                Following our initial research finding, all the
                                top coins are available for purchase with past
                                history to support decision making.
                            </Typography>
                            <Typography variant="list" component="li">
                                The Crypto landing page shows the empty account
                                balance and encourages users to start buying.
                            </Typography>
                            <Typography variant="list" component="li">
                                We added a summary review page as a safeguard
                                measure before purchase.
                            </Typography>
                        </ul>
                    </Grid>
                    <Grid item xs={12}>
                        <img
                            src={investing}
                            alt="investing in crypto screen shots"
                            style={{
                                width: "100%",
                                backgroundColor: myStyles.grey.four,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h3" style={{
                                color: myStyles.fiserv.secondary,
                            }}>Selling Crypto</Typography>
                    </Grid>

                    <Grid item xs={12} style={{ marginTop: "-1rem" }}>
                        <ul>
                            <Typography variant="list" component="li">
                                Our research found that users saw immediate
                                benefits of directly connecting their crypto
                                wallets to their bank accounts for ease of
                                management
                            </Typography>
                            <Typography variant="list" component="li">
                                This flow closely mirrors the buying workflow to
                                maintain standards across the product
                            </Typography>
                        </ul>
                    </Grid>
                    <Grid item xs={12}>
                        <img
                            src={sell}
                            alt="selling crypto screen shots"
                            style={{
                                width: "100%",
                                backgroundColor: myStyles.grey.four,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" style={{
                                color: myStyles.fiserv.secondary,
                            }}>
                            Converting One Crypto to Another
                        </Typography>
                    </Grid>

                    <Grid item xs={12} style={{ marginTop: "-1rem" }}>
                        <ul>
                            <Typography variant="list" component="li">
                                Our first feedback session made it clear that
                                users felt full control over their crypto
                                accounts included having all possible
                                transaction functionality, including conversion
                                between coins.
                            </Typography>
                            <Typography variant="list" component="li">
                                In our wireframe session, there was some
                                confusion over a conversion symbol to switch
                                between the cryptocurrencies, so we eliminated
                                it in the final design.
                            </Typography>
                        </ul>
                    </Grid>
                    <Grid item xs={12}>
                        <img
                            src={convert}
                            alt="converting crypto screen shots"
                            style={{
                                width: "100%",
                                backgroundColor: myStyles.grey.four,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" style={{
                                color: myStyles.fiserv.secondary,
                            }}>
                            Sending Crypto to Contacts
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "-1rem" }}>
                        <ul>
                            <Typography variant="list" component="li">
                                QR code sharing was a feature that came up in
                                our initial research that users expressed was a
                                useful feature they wanted to see.
                            </Typography>
                            <Typography variant="list" component="li">
                                This flow also mirrors the buy/sell flows with
                                similar input fields and feedback pages.
                            </Typography>
                        </ul>
                    </Grid>
                    <Grid item xs={12}>
                        <img
                            src={send}
                            alt="sending crypto screen shots"
                            style={{
                                width: "100%",
                                backgroundColor: myStyles.grey.four,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <SectionHeader
                            color={myStyles.fiserv.primary}
                            qual
                            header={"Summative Evaluation"}
                        />
                        <Typography variant="body2" component="p">
                            We completed a final round of evaluations with users
                            and design experts to assess whether users could
                            easily complete key tasks within the application,
                            the overall ease of use of the prototype, and user
                            satisfaction with the interface's content and
                            aesthetics.
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        style={{ justifyContent: "center" }}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            style={{
                                verticalAlign: "middle",
                                padding: "1rem",
                            }}
                        >
                            <Typography variant="h4" component="p">
                                <strong
                                    style={{ color: myStyles.fiserv.secondary }}
                                >
                                    Usability Test
                                </strong>
                            </Typography>
                            <Typography component="p">
                                We had users complete a set of tasks and
                                complete a{" "}
                                <strong>System Usability Scale (SUS)</strong>{" "}
                                survey to evaluate the usability of our system
                            </Typography>
                            <Typography
                                component="p"
                                style={{ marginTop: "1rem" }}
                            >
                                <em>
                                    6 users were recruited — (3 crypto users, 3
                                    non-crypto users)
                                </em>
                            </Typography>
                            <ul>
                                <Typography variant="body1" component="li">
                                    Our SUS data suggests that our system has an
                                    acceptable usability with{" "}
                                    <strong>84.58 / 100</strong>. It indicates
                                    that there are some small changes that still
                                    need to be made.
                                </Typography>
                            </ul>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            style={{
                                verticalAlign: "middle",
                                padding: "1rem",
                            }}
                        >
                            <Typography variant="h4" component="p">
                                <strong
                                    style={{ color: myStyles.fiserv.secondary }}
                                >
                                    Heuristic Evaluation
                                </strong>
                            </Typography>
                            <Typography component="p">
                                We had design experts review our mockups based
                                on Jakob Nielsen's 10 Usability Heuristics to
                                evaluate our adherence to design principles
                            </Typography>
                            <Typography
                                component="p"
                                style={{ marginTop: "1rem" }}
                            >
                                <em>3 experts were interviewed</em>
                            </Typography>
                            <ul>
                                <Typography variant="body1" component="li">
                                    User Control and Freedom - "Cancel" buttons
                                    are lacking
                                </Typography>
                            </ul>
                            <ul>
                                <Typography variant="body1" component="li">
                                    Help and Documentation - additional prompts
                                    needed to explain what wallet addresses are
                                    needed for
                                </Typography>
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="top"
                style={{
                    ...myStyles.gridInformation,
                }}
            >
                <Grid container item xs={12} md={8}>
                    <SectionHeader
                        color={myStyles.fiserv.primary}
                        qual
                        header={"Lessons Learned"}
                    />
                    <ul>
                        <Typography variant="body2" component="li">
                            <strong>Communicating with stakeholders —</strong>{" "}
                            When working with our industry partner, we struggled
                            to communicate with our initial contact. After we
                            were able to realign our schedules, we began a more
                            productive relationship with a different Fiserv
                            employee who was able to support us on a more
                            regular basis.
                        </Typography>
                        <Typography variant="body2" component="li">
                            <strong>Creating a visual design system —</strong>{" "}
                            For this project, I had my first opportunity to
                            create a visual design system in Figma. I enjoyed
                            the process of thinking through the details of
                            reusable components and styles.
                        </Typography>
                        <Typography variant="body2" component="li">
                            <strong>Practicing new techniques —</strong> During
                            the research phase of the project, I was able to
                            practice affinity diagramming and qualitative coding
                            — 2 tools that helped me gain some insights into
                            qualitative data.
                        </Typography>
                    </ul>
                </Grid>
            </Grid>

            <Grid
                container
                style={{
                    backgroundColor: myStyles.grey.four,
                }}
            >
                <ProjectCards projects={otherProjects} isFull={false} />
            </Grid>
        </div>
    );
};

export default FiservDetails;
