import { Grid, Typography } from "@material-ui/core";
import * as myStyles from "../MyStyles";
import MastercardCover from "./resources/Mastercard/MastercardCover.png";
import newFeatureComp from "./resources/Mastercard/newFeatureComp.png";
import appRedesign1 from "./resources/Mastercard/appRedesign1.png";
import appRedesign2 from "./resources/Mastercard/appRedesign2.png";
import appRedesign3 from "./resources/Mastercard/appRedesign3.png";
import SectionHeader from "./SectionHeader";

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
                            Mastercard Product Experience Design
                        </Typography>
                        <div style={{ paddingBottom: "32px" }}>
                            <span style={myStyles.chipStyle}>Internship</span>
                            <span style={myStyles.chipStyle}>UX Design</span>
                            <span style={myStyles.chipStyle}>B2B + B2C</span>
                        </div>
                    </div>
                </Grid>
                <Grid container item xs={12} md={8}>
                    <Grid item md={3}>
                        <Typography
                            variant="h3"
                            style={{ margin: "0  0 1.3rem 0" }}
                        >
                            Overview
                        </Typography>
                    </Grid>
                    <Grid item md={9}>
                        <Typography variant="body2" component="p">
                            During the summer of 2022, I worked as a product
                            design intern for the Product Experience Design team
                            under Mastercard’s Operations and Technology
                            department.
                        </Typography>
                        <Typography variant="body2" component="p">
                            I collaborated with designers, researchers, PMs, and
                            developers on various teams to improve the user
                            experience of different applications.
                        </Typography>
                        <Typography variant="body2" component="p">
                            This work is <strong>protected by NDA</strong>, so
                            the following includes an overview of a sample of
                            projects I worked on, focusing on my design process.
                            Please feel free to reach out to learn more.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} md={8}>
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
                        designers, I presented my findings and reccomendations
                        in a slide deck.
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
                        Comparative analysis of onboarding practices and feature
                        comparison
                    </Typography>
                </Grid>
                <Grid container item xs={12} md={8}>
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
                    <Grid container item>
                        <Grid item xs={12} md={8}>
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
                        <Grid item xs={12} md={4}>
                            <Typography variant="body2" component="p">
                                Working with a team of PMs, we had meetings to
                                walk through the product to{" "}
                                <strong>understand current usage </strong>and{" "}
                                <strong>oppurtunities for improvement.</strong>
                            </Typography>
                            <Typography variant="body2" component="p">
                                We also discussed how our efforts would fit into
                                the team’s{" "}
                                <strong>
                                    future development goals and timeline.
                                </strong>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="h3">Design and iteration</Typography>
                    <Typography variant="body2" component="p">
                        Within four weeks, following design critque sessions
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
                        Sample of insights from product walkthrough
                    </Typography>
                    <Typography variant="h3">
                        Improving Information Architecture
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
                </Grid>
            </Grid>
        </div>
    );
};

export default MastercardDetails;
