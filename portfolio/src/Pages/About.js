import { Grid, Link, makeStyles, Typography } from "@material-ui/core";
import me from "./resources/Theresa.JPG";
import * as myStyles from "../MyStyles";

const useStyles = makeStyles({
    title: {
        margin: "0 0 1.5rem 0",
        fontWeight: "700",
    },
    text: {
        fontSize: "1rem",
        fontWeight: "normal",
        marginTop: "1.5rem",
        lineHeight: "1.6rem",
    },
    link: {
        fontSize: "1rem",
        fontWeight: "normal",
        color: myStyles.purple.zero,
    },
    container: {
        width: "80%",
        marginRight: "10%",
        marginLeft: "10%",
        justifyContent: "center",
        "@media (max-width: 600px)": {
            marginTop: "40px",
            marginBottom: "40px",
        },
        marginTop: "100px",
        marginBottom: "100px",
    },
});

const picStyle = {
    display: "block",
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    margin: "auto",
    borderRadius: "20px",
    boxShadow: "-2px 2px 4px 2px rgba(0,0,0,0.08)",
};

const About = () => {
    const classes = useStyles();
    return (
        <div style={{ padding: "1rem" }}>
            <div
                style={{
                    flexDirection: "column",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justify: "center",
                }}
            ></div>

            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={12} sm={6} md={5}>
                    <img src={me} alt="MyPicture" style={picStyle} />
                </Grid>
                <Grid item xs={12} sm={5} md={6} lg={5}>
                    <Typography
                        variant="h4"
                        component="h2"
                    >
                        Hi again, I'm Theresa Hsieh!
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h3"
                        className={classes.text}
                    >
                        I’m a product designer and researcher with a background
                        in computer science. My experience as a software
                        engineer allows me to approach projects with an
                        additional technical perspective.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h3"
                        className={classes.text}
                    >
                        As a designer, I am an advocate for users, so empathy
                        and understanding drive my design process. I have a
                        passion for creating accessible experiences that empower
                        all users.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h3"
                        className={classes.text}
                    >
                        Outside of work, I enjoy painting, reading, fishing and
                        cooking!
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h3"
                        className={classes.text}
                    >
                        If you have any questions or just want to chat, please
                        connect with me on{" "}
                        <Typography
                            variant="h6"
                            component={Link}
                            href="https://www.linkedin.com/in/theresa-hsieh/"
                            className={classes.link}
                        >
                            LinkedIn
                        </Typography>{" "}
                        or send me an{" "}
                        <Typography
                            variant="h6"
                            component={Link}
                            href="mailto:theresaying.hsieh@gmail.com"
                            className={classes.link}
                        >
                            email
                        </Typography>
                        !
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};
export default About;
