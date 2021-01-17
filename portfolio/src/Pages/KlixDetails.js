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

import {
    Grid,
    Typography,
    makeStyles,
    Container,
    Toolbar,
} from "@material-ui/core";

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

const textBlockStyle = {
    fontWeight: "normal",
    margin: "1rem 0 1rem 0",
};
const listStyle = {
    fontWeight: "normal",
    fontSize: "16px",
};
const subHeaderStyle = {
    fontWeight: "450",
    margin: "1rem 0 1rem 0",
    fontSize: "22px",
};

const imageStyle = {
    margin: "1rem auto",
    width: "90%",
    maxWidth: "800px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "-2px 2px 4px 2px rgba(0,0,0,0.08)",
    display: "block",
};

const blockStyle = {
    backgroundColor: "#8576ed",
    height: "2rem",
    width: "2rem",
    borderRadius: "6px",
    display: "inline-flex",
};

const KlixDetails = () => {
    const classes = useStyles();
    return (
        <div>
            <span style={{ verticalAlign: "top" }}>
                <span style={blockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    User Research
                </Typography>
            </span>
            <Typography variant="h5" component="h4" style={subHeaderStyle}>
                Online Survey
            </Typography>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                We used an online survey to to reach gamers on Twitter to get a
                general idea about the gaming habits of people online. After one
                week, we received 18 responses from a diverse set of gamers. We
                learned that Twitter, Discord, Twitch and Reddit were the top
                social media sites for gamers but many felt it was hard to find
                friends on the massive platforms. Furthermore, many though
                respondents reported a desire to socialize with others online,
                they also said this was hard to a toxic culture.
            </Typography>
            <Typography variant="h5" component="h4" style={subHeaderStyle}>
                Semi Structured Interivews
            </Typography>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                To gain a better understanding of the socialization practices of
                the gaming community we conducted semi-structured interviews.
                These interviews were helpful for taking into account personal
                experience and identifying themes and current pain points.
            </Typography>
            <Typography variant="ul" component="ul" style={listStyle}>
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
            <Typography variant="h6" component="p" style={textBlockStyle}>
                We interviewed 18 people (11 male, 7 female) with an age range
                of 18-50 years old. Most people expressed some type of
                difficulty with finding people to play with. Amongst current
                friends, people cited scheduling issues as the number one
                blocker. For finding strangers online, people said they wished
                there was less toxicity, more acceptance of LGBT people and
                people of color, and more acceptance of casual players
            </Typography>

            <img
                src={KlixResearch}
                alt="interview results"
                style={imageStyle}
            ></img>

            <Typography variant="h6" component="p" style={textBlockStyle}>
                This information helped us form a set of system requirements
                that detailed the functionality we wanted our design solutions
                to include.
            </Typography>
            <Typography variant="ul" component="ul" style={listStyle}>
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
                <span style={blockStyle} />
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
                    md={6}
                    style={{ verticalAlign: "middle" }}
                    lg={5}
                >
                    <Typography
                        variant="h6"
                        component="p"
                        style={textBlockStyle}
                    >
                        Using the results of our interviews and survey, we
                        decided to address 3 major paint points: finding new
                        players, scheduling game play, and mitigating toxicity.
                        Through group brain storming meetings and individual
                        ideation sessions, we came up with three unique designs.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={7}>
                    <img
                        src={KlixBrainstorm}
                        alt="brainstorming"
                        style={imageStyle}
                    ></img>
                </Grid>
            </Grid>

            <Typography variant="h5" component="h4" style={subHeaderStyle}>
                Design Option #1: Mobile Application
            </Typography>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                Our first design was a mobile application that allows users to
                find and create social networks with other gamers. By creating a
                profile and entering their gameplay schedule, the application
                populates a deck of profile cards and offers filtering options
                so users can easily find other gamers who share similar
                interests and schedules. The application offers messaging
                services, scheduling functionality and provides extremely
                intuitive capabilities for reporting inappropriate users.
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
                        style={imageStyle}
                    ></img>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img
                        src={KlixDiscover2}
                        alt="Klix app design screenshot 2"
                        style={imageStyle}
                    ></img>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img
                        src={KlixChat1}
                        alt="Klix app designscreenshot 3"
                        style={imageStyle}
                    ></img>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img
                        src={KlixChat2}
                        alt="Klix app design screenshot 4"
                        style={imageStyle}
                    ></img>
                </Grid>
            </Grid>
            <Typography variant="h5" component="h4" style={subHeaderStyle}>
                Design Option #2: Website
            </Typography>
            <Typography variant="h6" component="p" style={textBlockStyle}>
                Our second design was a web application that drew from the
                strengths and weaknesses of the popular gaming platforms Discord
                and Reddit. Based on the Looking For Game (LFG) pages on Reddit,
                we designed a customizable LFG posting section where users can
                filter and find people or groups with openings for players.
                Additionally, improving upon on Discord, where users have to
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
                        style={imageStyle}
                    ></img>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img
                        src={KlixWeb2}
                        alt="Klix web design screenshot 2"
                        style={imageStyle}
                    ></img>
                </Grid>
            </Grid>
            <Typography variant="h5" component="h4" style={subHeaderStyle}>
                Design Option #3: Discord Plugin
            </Typography>
            <Typography variant="h6" component="p" style={textBlockStyle}>
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
                style={imageStyle}
            ></img>
            <Typography variant="h5" component="h4" style={subHeaderStyle}>
                Choosing a Design
            </Typography>
            <Grid container spacing={1} alignItems="top">
                <Grid item xs={12} md={6} lg={7}>
                    <Typography
                        variant="h6"
                        component="p"
                        style={textBlockStyle}
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
                        style={textBlockStyle}
                    >
                        Ultimately, we chose the mobile app design as it best
                        addressed the pain points we had identified.
                        Furthermore, at the poster session, people expressed the
                        most interest in the app idea and provided us helpful
                        feedback on how to best improve it.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                    <img
                        src={KlixDesignChart}
                        alt="Klix design comparisons"
                        style={imageStyle}
                    ></img>
                </Grid>
            </Grid>

            <span style={{ verticalAlign: "top" }}>
                <span style={blockStyle} />
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
                prototype
            </Typography>

            <span style={{ verticalAlign: "top" }}>
                <span style={blockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Evaluation
                </Typography>
            </span>
            <Typography
                variant="h6"
                component="p"
                className={classes.textBlock}
            >
                eval
            </Typography>

            <span style={{ verticalAlign: "top" }}>
                <span style={blockStyle} />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.sectionHeader}
                >
                    Key takeaways
                </Typography>
            </span>
            <Typography
                variant="h6"
                component="p"
                className={classes.textBlock}
            >
                takeaways
            </Typography>

            <span style={{ verticalAlign: "top" }}>
                <span style={blockStyle} />
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
                future work
            </Typography>
        </div>
    );
};

export default KlixDetails;
