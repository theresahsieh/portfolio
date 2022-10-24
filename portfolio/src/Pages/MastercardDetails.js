import { Grid, Typography } from "@material-ui/core";
import * as myStyles from "../MyStyles";
import MastercardCover from "./resources/Mastercard/MastercardCover.png";
import newFeatureComp from "./resources/Mastercard/newFeatureComp.png";
import appRedesign1 from "./resources/Mastercard/appRedesign1.png";
import appRedesign2 from "./resources/Mastercard/appRedesign2.png";
import appRedesign3 from "./resources/Mastercard/appRedesign3.png";
import flow from "./resources/Mastercard/flow.png";
import prototype from "./resources/Mastercard/prototype.png";
import sketch from "./resources/Mastercard/sketch.svg";
import sitemap from "./resources/Mastercard/sitemap.png";
import teams from "./resources/Mastercard/teams.png";
import mc from "./resources/Mastercard/mc.png";
import intFinding1 from "./resources/Mastercard/intFinding1.png";
import intFinding2 from "./resources/Mastercard/intFinding2.png";
import intFinding3 from "./resources/Mastercard/intFinding3.png";
import stacked from "./resources/Mastercard/stacked.png";
import SectionHeader from "./SectionHeader";
import ProjectCards from "./ProjectCards";

import KlixCover from "./resources/Klix/Klix-cover.png";
import PECSSCover from "./resources/PECSS/PECSS-cover.png";
import FiservCover from "./resources/Fiserv/FiservCover.png";

const otherProjects = [
    {
        name: "Fiserv: Crypto + Online Banking",
        image: FiservCover,
        chips: ["Case Study", "UX Design / UX Research"],
        path: "fiserv",
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

const MastercardDetails = () => {
    return (
        <div>
            <img
                src={MastercardCover}
                alt="Cover"
                style={myStyles.coverImageStyle}
            ></img>
            <Grid
                container
                spacing={1}
                alignItems="top"
                style={myStyles.gridInformation}
            >
                <Grid container item xs={12} md={8}>
                    <div>
                        <Typography variant="h1">
                            Mastercard: Product Experience Design
                        </Typography>
                        <div style={{ paddingBottom: "32px" }}>
                            <span style={myStyles.chipStyle}>Internship</span>
                            <span style={myStyles.chipStyle}>UX Design</span>
                            <span style={myStyles.chipStyle}>B2B + B2C</span>
                            <span
                                style={{
                                    ...myStyles.chipStyle,
                                    backgroundColor: myStyles.grey.four,
                                }}
                            >
                                Duration: 10 weeks
                            </span>
                        </div>
                    </div>
                </Grid>
                <Grid container item xs={12} md={8}>
                    <Typography
                        variant="h3"
                        style={{ margin: "0  0 1.3rem 0" }}
                    >
                        Overview
                    </Typography>
                    <Typography variant="body2" component="p">
                        During the summer of 2022, I worked as a{" "}
                        <strong> product design intern</strong> for Mastercard’s
                        Operations and Technology department.
                    </Typography>
                    <Typography variant="body2" component="p">
                        This work is <strong>protected by NDA</strong>, so the
                        following includes an overview of a sample of projects I
                        worked on, focusing on my design process. Please feel
                        free to reach out to learn more.
                    </Typography>
                    <SectionHeader
                        color={myStyles.mastercard.primary}
                        header={"Desktop platform overhaul"}
                    />
                    <Typography variant="body2" component="p">
                        I led a team of two designers and two researchers in{" "}
                        <strong>
                            transitioning a legacy desktop application{" "}
                        </strong>{" "}
                        into a more{" "}
                        <strong>streamlined web application.</strong> I
                        spearheaded the redesign, creating different mockups and
                        prototypes used for user testing.
                    </Typography>
                    <img
                        src={stacked}
                        alt="showing transition between old and new styles"
                        style={{ width: "100%" }}
                    ></img>
                </Grid>

                <Grid container item xs={12} md={8}>
                    <Typography variant="h3">Focusing On User Flows</Typography>
                    <Typography variant="body2" component="p">
                        Initially, it was challenging to{" "}
                        <strong> communicate to stakeholders</strong> that the
                        project would not be a one-to-one “reskin” of the
                        application.
                    </Typography>
                    <Typography variant="body2" component="p">
                        We explained how our team’s design process focuses on{" "}
                        <strong>user flows</strong> — designing screens that
                        optimize how a user completes a task because this allows
                        us to consider the
                        <strong> full context of the user goals</strong> and
                        best account for their needs.
                    </Typography>
                    <img
                        src={flow}
                        alt="user flow diagram"
                        style={{ width: "100%", margin: "24px 0" }}
                    ></img>
                    <Typography variant="h3">Site map</Typography>
                    <Typography variant="body2" component="p">
                        Due to the complexity of the application, our team
                        wanted to{" "}
                        <strong>organize the relationship between pages</strong>{" "}
                        through a site map. By creating such a visualization, I
                        helped the team understand the current navigation and
                        better <strong> visualize workflow pathways</strong> as
                        we worked to improve user flows.
                    </Typography>
                    <img
                        src={sitemap}
                        alt="partial site map of application"
                        style={{ width: "100%", margin: "24px 0" }}
                    ></img>
                    <Typography
                        variant="subtitle1"
                        style={{ width: "100%", textAlign: "center" }}
                    >
                        Site map of application to clarify page relationship
                    </Typography>
                    <Typography variant="h3">User interviews</Typography>
                    <Typography variant="body2" component="p">
                        We interviewed customer service users to learn how they
                        currently navigate the platform and{" "}
                        <strong> identify their pain points.</strong> We asked
                        them to walk us through an example of a daily task so we
                        could{" "}
                        <strong> understand their current behaviors.</strong>
                    </Typography>
                    <img
                        src={teams}
                        alt="screen share of application on MS Teams "
                        style={{ width: "80%", margin: "24px auto" }}
                    ></img>
                    <Typography
                        variant="subtitle1"
                        style={{ width: "100%", textAlign: "center" }}
                    >
                        User interviews with virtual screen share
                    </Typography>
                    <Typography variant="h3">Interview Findings</Typography>
                    <Typography variant="body2" component="p">
                        The user interviews helped the team develop a better
                        understanding of how the application is used by customer
                        service individuals. We also found that number of clicks
                        was important to users, as they found completion modals
                        intrusive and often made use of keyboard shortcuts
                    </Typography>
                    <Grid container item xs={12}>
                        <Grid item xs={12} sm={6} md={4}>
                            <img
                                src={intFinding1}
                                alt="graphic of interview findings"
                                style={{
                                    width: "90%",
                                    maxWidth: "270px",
                                    margin: "2rem 5%",
                                }}
                            ></img>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <img
                                src={intFinding2}
                                alt="graphic of interview findings"
                                style={{
                                    width: "90%",
                                    maxWidth: "270px",
                                    margin: "2rem 5%",
                                }}
                            ></img>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <img
                                src={intFinding3}
                                alt="graphic of interview findings"
                                style={{
                                    width: "90%",
                                    maxWidth: "270px",
                                    margin: "2rem 5%",
                                }}
                            ></img>
                        </Grid>
                    </Grid>

                    <Typography variant="h3">
                        Rethinking Information Organization
                    </Typography>
                    <Typography variant="body2" component="p">
                        One of the key ways I worked to improve the application
                        was to imagine new ways of structuring information. The
                        application previously relied on users managing multiple
                        windows and popups, and there was no easy way to pull up
                        related information for a task.
                    </Typography>
                    <Typography variant="body2" component="p">
                        To address this, I came up with better navigation
                        strategies and content layouts that grouped related
                        information and integrated features into the page rather
                        than into new popups.
                    </Typography>

                    <img
                        src={sketch}
                        alt="example of ideation sketches"
                        style={{ width: "80%", margin: "36px auto" }}
                    ></img>
                    <Typography
                        variant="subtitle1"
                        style={{ width: "100%", textAlign: "center" }}
                    >
                        Example of ideation sketches
                    </Typography>
                    <Typography variant="h3">
                        Rapid Prototyping and Concept Testing
                    </Typography>
                    <Typography variant="body2" component="p">
                        I created a number of interactive prototypes of user
                        flows to get feedback from customer service users on
                        proposed changes. We wanted to make sure we tested our
                        concepts early and often with internal users to validate
                        our assumptions and refine our understanding of the
                        application.
                    </Typography>

                    <img
                        src={prototype}
                        alt="prototype screenshot"
                        style={{ width: "100%", margin: "24px auto" }}
                    ></img>

                    <Typography variant="h3">Lessons Learned</Typography>
                    <Typography variant="body2" component="p">
                        On this project, I learned how to{" "}
                        <strong>explain UX practices to other teams</strong> and
                        ensure product managers and developers understood how
                        our team would bring value with our process.
                    </Typography>

                    <SectionHeader
                        color={myStyles.mastercard.primary}
                        header={"Application redesign"}
                    />
                    <Typography variant="body2" component="p">
                        Working with one other designer, I redesigned a
                        product’s web-based content to align with Mastercard’s
                        design system. Furthermore, we were able to{" "}
                        <strong>
                            restructure the information organization{" "}
                        </strong>
                        to improve clarity and usability.
                    </Typography>

                    <Typography variant="h3">Requirements gathering</Typography>
                    <Typography variant="body2" component="p">
                        Working with a team of PMs, we had meetings to walk
                        through the product to{" "}
                        <strong>understand current usage </strong>and{" "}
                        <strong>opportunities for improvement.</strong>
                    </Typography>
                    <Typography variant="body2" component="p">
                        We also discussed how our efforts would fit into the
                        team’s{" "}
                        <strong>future development goals and timeline.</strong>
                    </Typography>
                    <Grid item xs={12}>
                        <img
                            src={appRedesign1}
                            alt="slides with comparative analysis"
                            style={{ width: "100%", margin: "24px 0" }}
                        ></img>
                        <Typography
                            variant="subtitle1"
                            style={{ width: "100%", textAlign: "center" }}
                        >
                            Sample of insights from product walkthrough
                        </Typography>
                    </Grid>

                    <Typography variant="h3">Design and iteration</Typography>
                    <Typography variant="body2" component="p">
                        Within four weeks, following design critique sessions
                        with the UX team and check-ins with the product team, we
                        were able to deliver the final designs. I carefully
                        organized and labeled the Figma designs and meticulously
                        inspected the components to ensure the designs were
                        <strong> pixel perfect </strong> and easy for developers
                        to follow.
                    </Typography>
                    <img
                        src={appRedesign2}
                        alt="slides with comparative analysis"
                        style={{ width: "100%", margin: "24px 0" }}
                    ></img>
                    <Typography
                        variant="subtitle1"
                        style={{ width: "100%", textAlign: "center" }}
                    >
                        Sample of ideation concepts and final mockups
                    </Typography>
                    <Typography variant="h3">
                        Improving information architecture
                    </Typography>
                    <Typography variant="body2" component="p">
                        In addition to refreshing the UI elements of the
                        application, our goal was to improve the overall
                        usability of the product. We wanted to improve the
                        navigation and structure of the landing page to make it
                        easier for users to find what they needed.
                    </Typography>
                    <img
                        src={appRedesign3}
                        alt="slides with comparative analysis"
                        style={{ width: "100%", margin: "24px 0" }}
                    ></img>
                    <Typography
                        variant="subtitle1"
                        style={{ width: "100%", textAlign: "center" }}
                    >
                        Sample of annotated redesign efforts
                    </Typography>
                    <Typography variant="h3">Lessons Learned</Typography>
                    <Typography variant="body2" component="p">
                        While working on this short design effort, I was
                        introduced to
                        <strong> design operations</strong> and how to optimize
                        design practices for efficient collaboration and
                        hand-offs.
                    </Typography>
                    <Typography variant="body2" component="p">
                        I learned <strong>Figma best practices </strong> for
                        organizing files and leveraging design systems. I
                        developed very thorough habits for creating
                        pixel-perfect design files for developer hand-offs.
                    </Typography>
                    <SectionHeader
                        color={myStyles.mastercard.primary}
                        header={"New feature onboarding pattern"}
                    />
                    <Typography variant="body2" component="p">
                        To develop a <strong> reusable design pattern </strong>{" "}
                        for introducing users to new features, I conducted a
                        comparative analysis of onboarding practices. I analyzed
                        onboarding flows from a variety of desktop applications,
                        noting the use cases, advantages, and limitations of
                        each design.
                    </Typography>
                    <Typography variant="body2" component="p">
                        I created a feature audit and compiled the best
                        practices for the most relevant features from various
                        design systems. After feedback sessions with other
                        designers, I presented my findings and recommendations
                        in a monthly share-out.
                    </Typography>
                    <img
                        src={newFeatureComp}
                        alt="slides with comparative analysis"
                        style={{ width: "100%", margin: "24px 0" }}
                    ></img>
                    <Typography
                        variant="subtitle1"
                        style={{ width: "100%", textAlign: "center" }}
                    >
                        Snapshot of onboarding practices presentation
                    </Typography>
                    <Typography variant="h3">Lessons Learned</Typography>
                    <Typography variant="body2" component="p">
                        During this short assignment, I learned{" "}
                        <strong>
                            how to present research findings to business
                            stakeholders.
                        </strong>{" "}
                        In the past, most of my design presentations have been
                        focused on <em>process</em> — how I completed something,
                        but for my new feature onboarding findings, it was
                        more important to focus on <em>outcomes</em> — why I am
                        recommending future directions.
                    </Typography>
                    <SectionHeader
                        color={myStyles.mastercard.primary}
                        header={"Business Impact"}
                    />
                    <div>
                        <Typography variant="h3" style={{ marginTop: "-10px" }}>
                            Saving $2M in annual licensing costs
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            style={{ marginTop: "-8px" }}
                        >
                            My work transitioning a legacy desktop platform to a
                            web application saves $2 million in annual licensing
                            costs.
                        </Typography>
                    </div>

                    <div>
                        <Typography variant="h3">
                            Supporting design initiatives with research
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            style={{ marginTop: "-8px" }}
                        >
                            The in-depth research I conducted provided a set of
                            guidelines and recommendations for a new pattern to
                            be added to the design system.
                        </Typography>{" "}
                    </div>

                    <div>
                        <Typography variant="h3">
                            Maintaining design standards across products
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            style={{ marginTop: "-8px" }}
                        >
                            My redesign efforts helped product teams align with
                            Mastercard design standards and build confidence in
                            UX collaboration.
                        </Typography>
                    </div>

                    <img
                        src={mc}
                        alt="Me at Mastercard"
                        style={{ width: "80%", margin: "2rem 10%" }}
                    ></img>
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

export default MastercardDetails;
