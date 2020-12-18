import { Grid, Link, makeStyles, Typography } from "@material-ui/core";
import me from "./resources/TheresaHsieh.png";

const useStyles = makeStyles({
    title: {
        margin: "0 0 1.5rem 1.5rem",
    },
    intro: {
        color: "#AB72E3",
    },
    text: {
        fontSize: "1rem",
        fontWeight: "normal",
        marginTop: "0.5rem",
        lineHeight: "1.6rem",
    },
    link: {
        fontSize: "1rem",
        fontWeight: "normal",
        color: "#AB72E3",
    },
    container: {
        width: "80%",
        marginRight: "10%",
        marginLeft: "10%",
    },
});

const picStyle = {
    display: "block",
    width: "100%",
    height: "auto",
    margin: "auto",
    borderRadius: "20px",
    boxShadow: "-2px 2px 4px 2px rgba(0,0,0,0.08)",
};

const About = () => {
    const classes = useStyles();
    return (
        <div style={{ padding: "1rem" }}>
            <Typography variant="h4" component="h1" className={classes.title}>
                about
            </Typography>
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
                <Grid item xs={12} sm={5} md={4}>
                    <img src={me} alt="MyPicture" style={picStyle} />
                </Grid>
                <Grid item xs={12} sm={7} md={8}>
                    <Typography
                        variant="h4"
                        component="h2"
                        className={classes.intro}
                    >
                        Hi, I'm Theresa!
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h3"
                        className={classes.text}
                    >
                        I'm a computer science student at Georgia Tech with a
                        passion for UX design and frontend development. For my
                        undergraduate degree, my concentration is in "People and
                        Media" - where "computing meets users and design". I
                        enjoy designing rich user experiences and bringing them
                        to life with code.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h3"
                        className={classes.text}
                    >
                        Outside of class, I enjoy applying my creative skills to
                        art. At Tech, I led the Gourd Visual Artists club, which
                        provides community space for student artists. In my free
                        time, I enjoy drawing, painting and digital art.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h3"
                        className={classes.text}
                        style={{ fontWeight: "500" }}
                    >
                        Contact Me:
                    </Typography>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                            variant="h6"
                            component={Link}
                            href="mailto:thsieh37@gatech.edu"
                            className={classes.link}
                        >
                            thsieh37@gatech.edu
                        </Typography>
                        <Typography
                            variant="h6"
                            component={Link}
                            href="https://www.linkedin.com/in/theresa-hsieh/"
                            className={classes.link}
                        >
                            LinkedIn
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
export default About;
