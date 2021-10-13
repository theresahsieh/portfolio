import { Grid, Typography } from "@material-ui/core";
import * as myStyles from "../MyStyles";
import Projects from "./resources/Mastercard/MastercardProjects.png";

const Mastercard_BulletSquare = {
    ...myStyles.bulletSquare,
    backgroundColor: "#ED5754",
};

const MastercardDetails = () => {
    return (
        <div>
            <span style={{ display: "inline-flex" }}>
                <span style={Mastercard_BulletSquare} />
                <Typography
                    variant="h5"
                    component="h2"
                    style={myStyles.sectionHeader}
                >
                    Project Space
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                "The SpendingPulse Next Generation platform enables
                organizations to visualize consumer spending patterns in near
                real-time, powering decisions across a range of applications
                with detailed historical insights and sales forecasts."
            </Typography>
            <Typography
                variant="h5"
                component="p"
                style={{ ...myStyles.textBlock, marginLeft: "2.5rem" }}
            >
                <em>
                    How can we add value to the current experience with the
                    SpendingPulse product?
                </em>
            </Typography>
            <span style={{ display: "inline-flex" }}>
                <span style={Mastercard_BulletSquare} />
                <Typography
                    variant="h5"
                    component="h2"
                    style={myStyles.sectionHeader}
                >
                    Contributions
                </Typography>
            </span>
            <Grid container spacing={1} alignItems="top">
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlock}
                    >
                        I worked on implementing error handling for missing data
                        scenarios, enabling sharing of visualizations, and
                        creating customizable insights for users.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlock}
                    >
                        As a Software Development Engineer intern, I was part of
                        the development team in charge of implementing design
                        changes. I worked very closely with the user experience
                        designers and product managers to determine the scope of
                        the features I worked on. I also participated in
                        <strong> brainstorming sessions</strong> and
                        <strong> client interviews</strong> during the ideation
                        and evaluation phases.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        src={Projects}
                        alt="Clinician-facing dashboard"
                        style={myStyles.solutionImageStyle}
                    ></img>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlock}
                    >
                        Working as a developer, I played a large role in
                        deciding the
                        <strong> interaction design</strong> for each feature.
                        Using my technical background, I took the mockups
                        provided by the designers and iterated upon them with
                        the constraints of the codebase in mind. This process
                        allowed me to modify the original designs to better <em>fit
                        development timelines and existing technical
                        infrastructure</em>.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlock}
                    >
                        <strong>
                            <em>Project content under NDA</em>
                        </strong>
                    </Typography>
                </Grid>
            </Grid>

            <span style={{ display: "inline-flex" }}>
                <span style={Mastercard_BulletSquare} />
                <Typography
                    variant="h5"
                    component="h2"
                    style={myStyles.sectionHeader}
                >
                    Lessons Learned
                </Typography>
            </span>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                Working on this cross-functional team, I learned a lot about
                <strong> coordinating with different stakeholders </strong> -
                designers, product managers, and developers. Our team worked
                very quickly, so I worked very closely with my team members on
                rapid iterations, making design and technical changes as new
                system changes arose.
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlock}>
                A large portion of one of the projects I worked on was
                integrating the company design system into our product. During
                this process, I encountered several new use cases for common
                components and developed my{" "}
                <strong> communication skills </strong> as I worked with other
                teams to discuss how to address these different scenarios.
            </Typography>
        </div>
    );
};

export default MastercardDetails;
