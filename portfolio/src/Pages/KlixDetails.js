import KlixResearch from "./resources/Klix/research.png";
import KlixBrainstorm from "./resources/Klix/brainstorm.png";
import KlixDiscover1 from "./resources/Klix/discover1.png";
import KlixDiscover2 from "./resources/Klix/discover2.png";
import KlixChat1 from "./resources/Klix/chat1.png";
import KlixChat2 from "./resources/Klix/chat2.png";
import KlixWeb1 from "./resources/Klix/web1.png";
import KlixWeb2 from "./resources/Klix/web2.png";
import KlixDiscord from "./resources/Klix/discord.png";
import KlixDesignChart from "./resources/Klix/designComparison.png";
import KlixPrototype from "./resources/Klix/prototype.png";
import Andrew from "./resources/Klix/Andrew.png";
import Mia from "./resources/Klix/Mia.png";
import Jordan from "./resources/Klix/Jordan.png";
import Ava from "./resources/Klix/Ava.png";
import Clicks from "./resources/Klix/clicks.png";
import NASA from "./resources/Klix/NASA-tlx.png";

import KlixScreens from "./resources/Klix/screens.png";

import KlixFeatureGraphic from "./resources/Klix/featureGraphic.png";
import * as myStyles from "../MyStyles";

import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        margin: "1.5rem 0 1.5rem 0",
        fontWeight: "bold",
    },
    problemStatement: {
        fontStyle: "italic",
    },
    container: {
        width: "80%",
        marginRight: "10%",
        marginLeft: "10%",
    },
    subheader: {
        fontWeight: "bold",
    },
    sectionHeader: {
        fontWeight: "bold",
        display: "inline-flex",
        paddingLeft: ".5rem",
        verticalAlign: "top",
    },
    textBlock: {
        fontWeight: "normal",
        margin: "1rem 0 1rem 0",
    },
});

const KlixBlockStyle = {
    ...myStyles.blockStyle,
    backgroundColor: "#8576ed"
}
const KlixDetails = () => {
    const classes = useStyles();
    return (
        <div>
            <span style={{ verticalAlign: "top" }}>
                <span style={KlixBlockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    User Research
                </Typography>
            </span>
            <Typography variant="h5" component="h4" style={myStyles.subHeaderStyle}>
                Online Survey
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlockStyle}>
                We used an online survey to to reach gamers on Twitter to get a
                general idea about people's gaming habits. After one week, we
                received 18 responses from a diverse set of gamers. We learned
                that Twitter, Discord, Twitch and Reddit are the top social
                media sites for gamers, but many feel it is hard to find friends
                on these massive platforms. Furthermore, many respondents
                reported that their desire to socialize with others online was
                often hindered by the toxic culture within the gaming community.
            </Typography>
            <Typography variant="h5" component="h4" style={myStyles.subHeaderStyle}>
                Semi Structured Interivews
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlockStyle}>
                To gain a better understanding of the socialization practices of
                the gaming community, we conducted semi-structured interviews.
                These interviews were helpful for taking into account personal
                experience and identifying themes and current pain points.
            </Typography>
            <Typography variant="ul" component="ul" style={myStyles.listStyle}>
                <li>How do you typically find people to play with you?</li>
                <li>
                    What matchmaking systems do those video games use? Do you
                    like it?
                </li>
                <li>
                    Do you want to make friends with the people you play with?
                </li>
                <li>How do you find people to socialize with?</li>

                <li>
                    Where do you socialize with other players online? What would
                    you change about it?
                </li>
                <li>
                    Do you feel connected with the online gamer community? Why
                    or why not?
                </li>
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlockStyle}>
                We interviewed 18 people (11 male, 7 female) with an age range
                of 18-50 years old. Most people expressed some type of
                difficulty with finding people to play with. Amongst current
                friends, people cited scheduling issues as the number one
                blocker. For finding strangers online, people said they wished
                there was less toxicity, more acceptance of LGBTQ+ people and
                people of color, and more acceptance of novice players
            </Typography>

            <img
                src={KlixResearch}
                alt="interview results"
                style={myStyles.imageStyle}
            ></img>
            <Typography variant="h5" component="h4" style={myStyles.subHeaderStyle}>
                User Personas
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlockStyle}>
                We created a set of user personas that would help us understand
                the goals and motivations of our users.
            </Typography>
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} sm={6}>
                    <img
                        src={Andrew}
                        alt="user persona 1"
                        style={myStyles.imageStyle}
                    ></img>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={Mia} alt="user person 2" style={myStyles.imageStyle}></img>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img
                        src={Jordan}
                        alt="user persona 3"
                        style={myStyles.imageStyle}
                    ></img>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={Ava} alt="user person 4" style={myStyles.imageStyle}></img>
                </Grid>
            </Grid>
            <Typography variant="h5" component="h4" style={myStyles.subHeaderStyle}>
                System Requirements
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlockStyle}>
                This information helped us form a set of system requirements
                that detailed the functionality we wanted our design solutions
                to include.
            </Typography>
            <Typography variant="ul" component="ul" style={myStyles.listStyle}>
                <li>Allows users to report other users for harassment.</li>
                <li>
                    Allows users to enter their availability to match with other
                    users.
                </li>
                <li>
                    Allows users to automatically match with other users based
                    on similar availability schedules.
                </li>
                <li>
                    Allows users to find other players who are online to play
                    with.
                </li>

                <li>
                    Allows users to find potential new friends based on similar
                    interests.
                </li>
                <li>
                    Allows users to enter filters for a more specific search of
                    potential friends
                </li>
                <li>
                    Allows users to create new communities based on interests.
                </li>
                <li>
                    Allows users to find other users within specific
                    communities.
                </li>
                <li>
                    Allows users to contact each other via a messaging system.
                </li>
            </Typography>

            <div style={{ verticalAlign: "top", marginTop: "1rem" }}>
                <span style={KlixBlockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Design Solutions
                </Typography>
            </div>
            <Grid container spacing={1} alignItems="center">
                <Grid
                    item
                    xs={12}
                >
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlockStyle}
                    >
                        Using the results of our interviews and survey, we
                        decided to address 3 major paint points: finding new
                        players, scheduling game play, and mitigating toxicity.
                        Through group brain storming meetings and individual
                        ideation sessions, we came up with three unique designs.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <img
                        src={KlixBrainstorm}
                        alt="brainstorming"
                        style={myStyles.imageStyle}
                    ></img>
                </Grid>
            </Grid>

            <Typography variant="h5" component="h4" style={myStyles.subHeaderStyle}>
                Design Option #1: Mobile Application
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlockStyle}>
                Our first design was a mobile application that allows users to
                find and create social networks with other gamers. By creating a
                profile and entering their gameplay schedule, the application
                populates a deck of profile cards and offers filtering options
                so users can easily find other gamers who share similar
                interests and schedules. The application offers messaging
                services, scheduling functionality and provides avenues for
                reporting inappropriate users.
            </Typography>
            <Grid
                container
                spacing={1}
                style={{ maxWidth: "900px", margin: "auto" }}
            >
                <Grid item xs={6} sm={3}>
                    <img
                        src={KlixDiscover1}
                        alt="Klix app design screenshot 1"
                        style={myStyles.imageStyle}
                    ></img>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img
                        src={KlixDiscover2}
                        alt="Klix app design screenshot 2"
                        style={myStyles.imageStyle}
                    ></img>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img
                        src={KlixChat1}
                        alt="Klix app designscreenshot 3"
                        style={myStyles.imageStyle}
                    ></img>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img
                        src={KlixChat2}
                        alt="Klix app design screenshot 4"
                        style={myStyles.imageStyle}
                    ></img>
                </Grid>
            </Grid>
            <Typography variant="h5" component="h4" style={myStyles.subHeaderStyle}>
                Design Option #2: Website
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlockStyle}>
                Our second design was a web application that drew from the
                strengths and weaknesses of the popular gaming platforms Discord
                and Reddit. Based on the Looking For Game (LFG) pages on Reddit,
                we designed a customizable LFG posting section where users can
                filter and find people or groups with openings for players.
                Additionally, improving upon Discord, where users have to
                sign into specific servers to access those server’s channels,
                our website design allows users to see a master list of the
                group chats they are a member of on their Chat page
            </Typography>
            <Grid
                container
                spacing={1}
                style={{ maxWidth: "900px", margin: "auto" }}
            >
                <Grid item xs={12} sm={6}>
                    <img
                        src={KlixWeb1}
                        alt="Klix web design screenshot 1"
                        style={myStyles.imageStyle}
                    ></img>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img
                        src={KlixWeb2}
                        alt="Klix web design screenshot 2"
                        style={myStyles.imageStyle}
                    ></img>
                </Grid>
            </Grid>
            <Typography variant="h5" component="h4" style={myStyles.subHeaderStyle}>
                Design Option #3: Discord Plugin
            </Typography>
            <Typography variant="h6" component="p" style={myStyles.textBlockStyle}>
                Our third design was a Discord plugin that helps players form
                one-on-one relationships with the gamers already on their
                server. By typing into a special channel with their time
                availability and potential filters, the users are automatically
                paired with another user for a play session and to get to know
                each other. The scheduling with the bot is easy to set up for
                any user, and it should allow the target users to grow their
                one-on-one bonds within large servers.
            </Typography>
            <img
                src={KlixDiscord}
                alt="Klix discord plugin design"
                style={myStyles.imageStyle}
            ></img>
            <Typography variant="h5" component="h4" style={myStyles.subHeaderStyle}>
                Choosing a Design
            </Typography>
            <Grid container spacing={1} alignItems="top">
                <Grid item xs={12}>
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlockStyle}
                    >
                        We analyzed each design on 5 pieces of criteria:
                        Efficiency of finding new friends, Ease of schedule
                        coordination, Effectiveness for community building,
                        Learnability, and Effectiveness of Moderation. We also
                        had our peers and instructors evaluate our designs in a
                        poster session. They gave us valuable feedback on what
                        they viewed as the strengths and weaknesses of each
                        design.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlockStyle}
                    >
                        Ultimately, we chose the mobile app design as it best
                        addressed the pain points we had identified.
                        Furthermore, at the poster session, people expressed the
                        most interest in the app idea and provided us helpful
                        feedback on how to best improve it such as using badges
                        to promote non-toxic behavior.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <img
                        src={KlixDesignChart}
                        alt="Klix design comparisons"
                        style={myStyles.imageStyle}
                    ></img>
                </Grid>
            </Grid>

            <span style={{ verticalAlign: "top" }}>
                <span style={KlixBlockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Prototype
                </Typography>
            </span>
            <Typography
                variant="h6"
                component="p"
                className={classes.textBlock}
            >
                We used Figma to create high fidelity mockups and a working
                prototype. The purple theme mirrors the Twitch purple branding
                to align itself with the popular gamer site's aesthetic. One of
                the features that we changed from the initial app design was
                swapping “Notifications” for “Events.” We realized that we
                didn’t have a page for creating events and that the
                “Notifications” for matches would be redundant since it would
                also appear in the “Messages” section.
            </Typography>
            <img
                src={KlixScreens}
                alt="Klix prototype screens"
                style={myStyles.screenStyle}
            ></img>
            <Typography variant="h6" component="p" style={myStyles.textBlockStyle}>
                The screens illustrate the components needed for the five major
                functions of the application: user signup, profile management,
                player discovery, messaging, and event planning. We created the
                necessary screens for users to accomplish three tasks for
                evaluation: (1) Find a specific profile on the Discover page,
                (2) Report an offensive message, and (3) Schedule an event with
                contacts.
            </Typography>
            <img
                src={KlixPrototype}
                alt="Klix prototype screens"
                style={myStyles.imageStyle}
            ></img>

            <span style={{ verticalAlign: "top" }}>
                <span style={KlixBlockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Evaluation
                </Typography>
            </span>
            <Typography variant="h5" component="h4" style={myStyles.subHeaderStyle}>
                Think Aloud
            </Typography>
            <Typography
                variant="h6"
                component="p"
                className={classes.textBlock}
            >
                We decided to use the think aloud technique to gather
                qualitative data for our app. We felt it was important to figure
                out what people were thinking when using our app. This technique
                allows us to figure out if the users comprehend what they are
                doing instead of guessing what they are thinking.
            </Typography>

            <Grid container spacing={1} alignItems="top">
                <Grid item xs={12} md={6} lg={7}>
                    <Typography
                        variant="h5"
                        component="h4"
                        style={myStyles.subHeaderStyle}
                    >
                        Number of Clicks
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        className={classes.textBlock}
                    >
                        We decided to count the number of clicks to complete the
                        task so we could gather quantitative data concerning the
                        intuitiveness of our task. This allows us to have
                        numerical data to compare between participants and tasks
                        so that we could pinpoint weaknesses efficiently.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                    <img
                        src={Clicks}
                        alt="Number of Clicks"
                        style={myStyles.imageStyle}
                    ></img>
                </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="top">
                <Grid item xs={12} md={6} lg={7}>
                    <Typography
                        variant="h5"
                        component="h4"
                        style={myStyles.subHeaderStyle}
                    >
                        NASA TLX Survey
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        className={classes.textBlock}
                    >
                        We included the NASA TLX Survey to get quantitative
                        feedback about the usability of our app. Similar to the
                        Number of Clicks measure, this quantitative data can
                        help us compare experiences across participants
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                    <img src={NASA} alt="NASA TLX" style={myStyles.imageStyle}></img>
                </Grid>
            </Grid>
            <Typography variant="h5" component="h4" style={myStyles.subHeaderStyle}>
                Open-ended Questions
            </Typography>
            <Typography
                variant="h6"
                component="p"
                className={classes.textBlock}
            >
                We also included a number of open ended questions after each
                task, to get more qualitative feedback from the user. The
                following is a summary of the feedback we received from
                participants:
            </Typography>
            <Typography variant="h6" component="ul" style={myStyles.listStyle}>
                <li>Creating the gameplay schedule was not intuitive.</li>
                <li>Profiles could use a bio section.</li>
                <li>
                    The profile cards could have more information about
                    expertise level.
                </li>
                <li>
                    The report feature was good but, on the messaging page it
                    shouldn't be included in the reactions.
                </li>
                <li>
                    The badges were met with mixed options. Some people felt
                    they would be useless and some thought they were a good
                    addition. People were also unsure how badges were earned.
                </li>
            </Typography>
            <Typography variant="h5" component="h4" style={myStyles.subHeaderStyle}>
                Results
            </Typography>
            <Typography
                variant="h6"
                component="p"
                className={classes.textBlock}
            >
                We found that the usability and task flow were adequate and most
                participants enjoyed the visual designs. Based on the feedback
                and discussion regarding the evaluation results, we found
                potential avenues for improvements in Klix such as allowing for
                a more detailed and in-depth profile, creating a more intuitive
                process for scheduling, and making the process for earning
                badges and reporting users clearer.
            </Typography>
            <span style={{ verticalAlign: "top" }}>
                <span style={KlixBlockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Lessons Learned
                </Typography>
            </span>
            <Typography
                variant="h6"
                component="p"
                className={classes.textBlock}
            >
                This project was my first experience thoroughly following the
                user-centered design process. I learned how to take the
                information gained from our user research and create user
                personas that would remind us of the users we were designing for
                and gained experience conducting user interviews. This was also
                my first time using Figma, so I learned how to utilize the tool
                for creating mockups and working prototypes.
            </Typography>
            <span style={{ verticalAlign: "top" }}>
                <span style={KlixBlockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Future Work
                </Typography>
            </span>
            <Typography
                variant="h6"
                component="p"
                className={classes.textBlock}
            >
                With another group of teammates (Kevin Chen, Sabrina Aang, Suraj
                Masand, and Benson Huang), I helped develop Klix into an Android
                application. 
            </Typography>
            <img
                src={KlixFeatureGraphic}
                alt="Klix feature graphic"
                style={myStyles.screenStyle}
            ></img>
        </div>
    );
};

export default KlixDetails;
