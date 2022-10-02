import { Grid, Typography } from "@material-ui/core";
import * as myStyles from "../MyStyles";
import InsomniacCover from "./resources/Insomniac/InsomniacCover.png";
import methods from "./resources/Insomniac/methods.png";
import litreview from "./resources/Insomniac/litreview.png";
import SectionHeader from "./SectionHeader";

const InsomniacDetails = () => {
    return (
        <div>
            <img
                src={InsomniacCover}
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
                            Insomniac Games: Text Design Guidelines
                        </Typography>
                        <div style={{ paddingBottom: "32px" }}>
                            <span style={myStyles.chipStyle}>
                                Accessibility
                            </span>
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
                            During the spring of 2022, I worked with a UX
                            researcher masters student to deliver text design
                            standards and guidelines for our client the gaming
                            studio Insomniac Games.
                        </Typography>
                        <Typography variant="body2" component="p">
                            I shared research responsibilities with my partner,
                            but my primary focus was creating high fidelity
                            mockups for our experiment, adjusting content
                            through UX writing, and designing our final
                            documents.
                        </Typography>
                    </Grid>
                    <SectionHeader
                        color={myStyles.insomniac.primary}
                        header={"Problem Space"}
                    />
                    <Typography variant="body2" component="p">
                        The{" "}
                        <strong>
                            presentation of text in console video games is an
                            important aspect of game design
                        </strong>{" "}
                        that contributes to the sense of immersion within the
                        game world, as well as to the overall{" "}
                        <strong> usability and accessibility </strong> of the
                        game. This project is about exploring{" "}
                        <strong>trade-offs</strong> made by developers and
                        creating a set of best practices that can be used by
                        developers to create usable and accessible experiences
                        for gamers with a wide range of visual abilities
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        style={{ ...myStyles.textBlock, marginLeft: "2.5rem" }}
                    >
                        <em>
                            “How can we develop a set of best practices or
                            standards that can be used by developers to create
                            usable and accessible experiences for gamers with a
                            wide range of visual abilities?”
                        </em>
                    </Typography>

                    <SectionHeader
                        color={myStyles.insomniac.primary}
                        header={"Proposed Solution"}
                    />
                    <Typography variant="body2" component="p">
                        We started with background research to kind of orient
                        ourselves within the problem space. Then we moved into
                        some user research to
                        <strong>
                            {" "}
                            identify different needs and challenges{" "}
                        </strong>
                        faced by both gamers as well as industry practitioners.
                        Then we moved into our experiment to explore a
                        particular aspect of text that's vitally important—
                        <strong>text size.</strong> We compiled our findings in
                        a comprehensive set of{" "}
                        <strong>standards and guidelines.</strong>
                    </Typography>
                    <img
                        src={methods}
                        alt="methods used: research, experiment, ux writing "
                        style={{ width: "100%", margin: "24px 0" }}
                    ></img>

                    <SectionHeader
                        color={myStyles.insomniac.primary}
                        header={"Research"}
                    />
                    <Typography variant="h3" style={{ marginTop: "0" }}>Literature Review</Typography>
                    <Grid container item>
                        <Grid item xs={12} md={8} style={{ paddingRight: "1rem" }}>
                            <Typography variant="body2" component="p">
                                With our literature review, we were looking to
                                examine the existing standards for text design
                                in console games in order to understand their
                                limitations and also see if there were any gaps
                                in current research.
                            </Typography>
                            <Typography variant="body2" component="p">
                                We found that web accessibility does not always
                                translate to game accessibility, and research on
                                video game-specific standards is not readily
                                available.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <img
                                src={litreview}
                                alt="articles laid on top of each other"
                                style={{ width: "100%"}}
                            ></img>
                            <Typography
                                variant="subtitle1"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                Screenshots of literature review resources{" "}
                            </Typography>
                        </Grid>
                    </Grid>
                    <SectionHeader
                        color={myStyles.insomniac.primary}
                        header={"Future Work"}
                    />
                    <Typography variant="body2" component="p">
                        Documentation of this work is still in progress. Please
                        check back later for full details or reach out and ask
                        me about it!
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default InsomniacDetails;
