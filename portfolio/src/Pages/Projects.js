import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";

import KlixCover from "./resources/Klix/Klix-cover.png";
import PECSSCover from "./resources/PECSS/PECSS-cover.png";
import ReflectCover from "./resources/Reflect/Reflect-cover.png";
import FiservCover from "./resources/Fiserv/Fiserv-cover.png";
import MastercardCover from "./resources/Mastercard/Mastercard-cover.png";
import Splash from "./resources/Splash.svg";
import * as myStyles from "../MyStyles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    title: {
        margin: "0 0 1.5rem 0",
        fontWeight: "500",
    },
    splashTitle: {
        margin: "3.5rem 1.5rem 1rem 3.5rem",
        textAlign: "left",
        fontSize: "2.5rem",
    },
    splashText: {
        margin: "0 1.5rem 3rem 3.5rem",
        fontWeight: "normal",
        verticalAlign: "top",
        textAlign: "left",
        fontSize: "1rem",
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
        margin: "auto",
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
const reflectChip = { ...chipStyle, backgroundColor: "#2993FC" };
const fiservChip = { ...chipStyle, backgroundColor: "#FF9A57" };
const mastercardChip = { ...chipStyle, backgroundColor: "#ED5754" };

const Projects = () => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const projects = [
        {
            name: "PECSS",
            image: PECSSCover,
            description:
                "Prolonged Exposure Collective Sensing System. Managing personal health information to improve patient adherence to PTSD treatment.",
            chips: (
                <CardActions className={classes.cardChips}>
                    <span style={pecssChip}>
                        HCI Research + UX Design + Angular JS
                    </span>
                    <span style={yearChip}>2020 - present</span>
                </CardActions>
            ),
            path: "pecss",
        },
        {
            name: "Fiserv: Crypto + Online Banking",
            image: FiservCover,
            description:
                "Revolutionizing online banking with intergrations with cryptocurrencies",
            chips: (
                <CardActions className={classes.cardChips}>
                    <span style={fiservChip}>UX Research + UX Design</span>
                    <span style={yearChip}>2021-present</span>
                </CardActions>
            ),
            path: "fiserv",
        },
        {
            name: "Mastercard Data and Services",
            image: MastercardCover,
            description: "Improving the SpendingPulse product for users",
            chips: (
                <CardActions className={classes.cardChips}>
                    <span style={mastercardChip}>
                        ReactJS + UX Research + UX Design
                    </span>
                    <span style={yearChip}>Summer 2021</span>
                </CardActions>
            ),
            path: "mastercard",
        },
        {
            name: "Klix",
            image: KlixCover,
            description:
                "Helping gamers find friends and schedule gameplay in a safe environment.",
            chips: (
                <CardActions className={classes.cardChips}>
                    <span style={klixChip}>UX Research + Design</span>
                    <span style={yearChip}>2020</span>
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
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h4"
                        component="h1"
                        className={classes.splashTitle}
                    >
                        Hi, I'm Theresa!
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h2"
                        className={classes.splashText}
                    >
                        I'm an HCI master's student @Georgia Tech that loves UI
                        and UX. When I'm not designing or researching, you can
                        find me painting, cooking, or rock climbing.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        src={Splash}
                        alt="icons"
                        style={{
                            width: "80%",
                            maxWidth: "400px",
                            margin: "auto",
                            display: "block",
                            marginTop: "1rem"
                        }}
                    ></img>
                </Grid>
            </Grid>

            <hr style={lineStyle} />
            <div style={{ justifyContent: "center" }}>
                <Grid container spacing={1} style={myStyles.container}>
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                        <Typography
                            variant="h4"
                            component="h1"
                            className={classes.title}
                        >
                            projects
                        </Typography>
                    </Grid>
                    {projects.map((value) => (
                        <Grid item xs={12} style={{ justifyContent: "center" }}>
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
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};
export default Projects;
