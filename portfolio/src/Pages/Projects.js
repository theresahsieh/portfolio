import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {useEffect} from 'react';

import KlixCover from "./resources/Klix/Klix-cover.png";
import PECSSCover from "./resources/PECSS/PECSS-cover.png";
import PEQCover from "./resources/PEQ/PEQ-cover.png";
import ReflectCover from "./resources/Reflect/Reflect-cover.png";
import Icons from "./resources/icons.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    title: {
        margin: "0 0 1.5rem 1.5rem",
    },
    splashTitle: {
        margin: "1.5rem 0 1rem 1.5rem",
    },
    splashText: {
        margin: "0 0 1rem 1.5rem",
        fontWeight: "normal",
        display: "inline-flex",
        verticalAlign:"top"
    },
    projectName: {
        fontWeight: "bold",
    },
    cardLink: {
        textDecoration: "none",
    },
    mainCard: {
        "@media (min-width: 960px)": {
            width: 768,
        },
        width: "80vw",
        borderRadius: 10,
        marginBottom: "1.5rem",
        transition: "all 0.3s ease-in-out 0s",
        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.08)",
        "&:hover": {
            boxShadow: "rgba(0, 0, 0, 0.22) 0px 19px 43px",
            transform: "translate3d(2px, -1px, 0px)",
        },
    },
    cardImage: {
        "@media (min-width: 960px)": {
            height: 288,
        },
        height: "30vw",
    },
    cardChips: {
        display: "flex",
        float: "right",
    },
});

const lineStyle = {
    backgroundColor: "#E8E8E8",
    border: "none",
    display: "block",
    height: "2px",
    margin: "1.5rem ",
};

const chipStyle = {
    padding: "3px 6px 3px 6px",
    borderRadius: "6px",
    fontSize: "0.775rem",
    fontWeight: "bold",
};

const klixChip = { ...chipStyle, backgroundColor: "#8576ed" };
const pecssChip = { ...chipStyle, backgroundColor: "#54D0E0" };
const yearChip = { ...chipStyle, backgroundColor: "#E5E5E5" };
const peqChip = { ...chipStyle, backgroundColor: "#FF4BAF" };
const reflectChip = { ...chipStyle, backgroundColor: "#2993FC" };

const Projects = () => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const projects = [
        {
            name: "PECSS Clinician Dashboard",
            image: PECSSCover,
            description:
                "Prolonged Exposure Collective Sensing System. Improving PTSD treatment for veterans.",
            chips: (
                <CardActions className={classes.cardChips}>
                    <span style={pecssChip}>UX Design + Angular JS</span>
                    <span style={yearChip}>2019 - present</span>
                </CardActions>
            ),
            path: "pecss",
        },
        {
            name: "PEQ Widget",
            image: PEQCover,
            description:
                "Patient Engagement Quotient. Visualizing electronic personal health information to improve patient adherence to treatment protocols.",
            chips: (
                <CardActions className={classes.cardChips}>
                    <span style={peqChip}>UX Research + Design</span>
                    <span style={yearChip}>2020 - present</span>
                </CardActions>
            ),
            path: "peq",
        },
        {
            name: "Klix",
            image: KlixCover,
            description:
                "Helping gamers find friends and schedule gameplay in a safe environment.",
            chips: (
                <CardActions className={classes.cardChips}>
                    <span style={klixChip}>UX Research + Design</span>
                    <span style={yearChip}>2019</span>
                </CardActions>
            ),
            path: "klix",
        },
        {
            name: "Reflect!",
            image: ReflectCover,
            description:
                "Facilitating collaborative problem solving for small teams.",
            chips: (
                <CardActions className={classes.cardChips}>
                    <span style={reflectChip}>UX Design + React JS</span>
                    <span style={yearChip}>2019-2020</span>
                </CardActions>
            ),
            path: "reflect",
        },
    ];

    return (
        <div>
            <Typography
                variant="h4"
                component="h1"
                className={classes.splashTitle}
            >
                Hi, I'm Theresa
            </Typography>
            <Typography
                variant="h6"
                component="h2"
                className={classes.splashText}
            >
                I'm a UX designer and UI developer focused on creating
                meaningful experiences.
            </Typography>
            <img src={Icons} alt="icons" style={{maxWidth:"80%", margin:"auto", display: "block"}}></img>
            <hr style={lineStyle}/>
            <div style={{ padding: "1rem" }}>
                <Typography
                    variant="h4"
                    component="h1"
                    className={classes.title}
                >
                    projects
                </Typography>
                <div
                    style={{
                        flexDirection: "column",
                        margin: "auto",
                        display: "flex",
                        alignItems: "center",
                        justify: "center",
                    }}
                >
                    {projects.map((value) => (
                        <Link
                            to={`/projects/${value.path}`}
                            className={classes.cardLink}
                            key={value.path}
                        >
                            <Card className={classes.mainCard}>
                                <CardMedia
                                    className={classes.cardImage}
                                    image={value.image}
                                    title={value.name}
                                ></CardMedia>
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="h2"
                                        className={classes.projectName}
                                    >
                                        {value.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        {value.description}
                                    </Typography>
                                </CardContent>
                                {value.chips}
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Projects;
