import { Grid, Typography } from "@material-ui/core";
import * as myStyles from "../MyStyles";
import ReclamCover from "./resources/Reclam/ReclamCover.png";
import BasicInfo from "./BasicInfo";
import SectionHeader from "./SectionHeader";
import process from "./resources/Reclam/reclam_process.png";
import HiFi from "./resources/Reclam/Hi-Fi.png";

const ReclamDetails = () => {
    return (
        <div>
            <img
                src={ReclamCover}
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
                            Reclam — Resusable Containers for Takeout
                        </Typography>
                        <div style={{ paddingBottom: "32px" }}>
                            <span style={myStyles.chipStyle}>Case Study</span>
                            <span style={myStyles.chipStyle}>
                                UX Design / UX Research
                            </span>
                        </div>
                    </div>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    md={8}
                >
                    <BasicInfo
                        tools={["Figma", "Miro", "Qualtrics", "AdobeXD"]}
                        team={[
                            "Kyle Leinart",
                            "Xiaoyun Chen",
                            "Vidushi Jain",
                            "Rob MacDonald",
                        ]}
                        design={
                            "Brainstorming, concept designs, prototype, visual design system"
                        }
                        research={
                            "Competitive analysis, interviews, survey, diary study, user testing"
                        }
                    />
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
                        <SectionHeader
                            color={myStyles.reclam.primary}
                            header={"Problem Space"}
                        />
                        <Typography
                            variant="body2"
                            component="p"
                        >
                            During the pandemic, the percentage of people using
                            food delivery services increased, resulting in
                            higher levels of food delivery waste. The
                            convenience of these options is especially appealing
                            to students and young professionals with limited
                            interest or time for cooking.
                        </Typography>
                        <Typography
                            variant="h5"
                            component="p"
                            style={{
                                ...myStyles.textBlock,
                                marginLeft: "2.5rem",
                            }}
                        >
                            <em>
                                How can we help busy students and young
                                professionals improve their relationship with
                                sustainable dining?
                            </em>
                        </Typography>
                        <SectionHeader
                            color={myStyles.reclam.primary}
                            header={"Role and Duration"}
                        />
                        <Typography
                            variant="h6"
                            component="p"
                            style={myStyles.textBlock}
                        >
                            Over 14 weeks, I collaborated with team members to
                            understand consumers’ struggles with food
                            sustainability and design a solution to meet their
                            needs.
                        </Typography>

                        <img
                            src={process}
                            alt="Design Thinking diagram"
                            style={{ width: "100%", margin: "3rem 0" }}
                        ></img>

                        <SectionHeader
                            color={myStyles.reclam.primary}
                            header={"Proposed Solution"}
                        />
                        <Typography variant="body2" component="p">
                            A restaurant takeout system that leverages reusable
                            containers to{" "}
                            <strong> reduce food delivery waste.</strong> With
                            Reclam, users can buy delicious foods without having
                            to worry about single-use packaging.
                        </Typography>
                    </Grid>
                </Grid>

                </Grid>
            <div style={{ backgroundColor: myStyles.reclam.primary }}>
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
                }}
            >
                <Grid container item xs={12} md={8}>
                <SectionHeader
                        color={myStyles.reclam.primary}
                        header={"Work in Progress"}
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

export default ReclamDetails;
