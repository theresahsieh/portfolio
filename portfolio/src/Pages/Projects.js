import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";

import KlixCover from "./resources/Klix/Klix-cover.png";
import PECSSCover from "./resources/PECSS/PECSS-cover.png";
import FiservCover from "./resources/Fiserv/FiservCover.png";
import MastercardCover from "./resources/Mastercard/MastercardCover.png";
import InsomniacCover from "./resources/Insomniac/InsomniacCover.png";
import ReclamCover from "./resources/Reclam/ReclamCover.png";
import Splash from "./resources/Me.svg";
import * as myStyles from "../MyStyles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    title: {
        margin: ".5rem",
        fontWeight: "500",
        "@media (max-width: 600px)": {
            left: "56px",
        },
    },
    splashTitle: {
        margin: "3.5rem 1.5rem 1rem 3.5rem",
        textAlign: "left",
        //fontSize: "2.5rem",
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
        margin: ".5rem",
        borderRadius: 10,
        marginBottom: "1.5rem",
        transition: "all 0.3s ease-in-out 0s",
        boxShadow: "0px 2px 12px -1px rgba(0,0,0,0.09)",
        "&:hover": {
            boxShadow: "rgba(0, 0, 0, 0.22) 0px 19px 43px",
            transform: "translate3d(2px, -1px, 0px)",
        },
    },
    cardImage: {
        "@media (max-width: 960px)": {
            height: "30vw",
        },
        height: "18vw",
    },
    cardChips: {
        display: "flex",
        float: "left",
        margin: ".5rem",
        overflow: "none",
        fontSize: ".75rem",
    },
    container: {
        "@media (max-width: 600px)": {
            marginTop: "40px",
            marginBottom: "40px",
        },
        marginTop: "140px",
        marginBottom: "140px",
        justifyContent: "center",
    },
});

const lineStyle = {
    backgroundColor: "#E8E8E8",
    border: "none",
    display: "block",
    height: "2px",
    margin: "1.5rem ",
};

const Projects = () => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const projects = [
        {
            name: "Mastercard: Product Experience Design",
            image: MastercardCover,
            chips: ["Internship", "UX Design", "B2B + B2C"],
            path: "mastercard",
        },
        {
            name: "Fiserv: Crypto + Online Banking",
            image: FiservCover,
            chips: ["Case Study", "UX Design / UX Research"],
            path: "fiserv",
        },
        {
            name: "PECSS — PTSD Therapy Platform",
            image: PECSSCover,
            chips: ["Healthcare", "HCI Research / UX Design", "NSF"],
            path: "pecss",
        },
        
        {
            name: "Klix — Bringing Gamers Together",
            image: KlixCover,
            chips: ["Case Study", "UX Design"],
            path: "klix",
        },

    ];
    const inProgress = [
        {
            name: "Insomniac Games: Text Design Guidelines",
            image: InsomniacCover,
            chips: ["Accessibility", "UX Research / UX Writing"],
            path: "insomniac",
        },
        {
            name: "Reclam — Resusable Containers for Takeout",
            image: ReclamCover,
            chips: ["Case Study", "UX Design / UX Research"],
            path: "reclam",
        },
    ]

    return (
        <div>
            <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
                className={classes.container}
            >
                <Grid item xs={12} sm={6} md={4}>
                    <Typography
                        variant="h4"
                        component="h1"
                        className={classes.splashTitle}
                    >
                        Hi, I'm Terri!
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h2"
                        className={classes.splashText}
                    >
                        I’m an HCI master’s student{" "}
                        <span style={{ color: myStyles.purple.zero }}>
                            @Georgia Tech
                        </span>{" "}
                        with a passion for human-centered design looking a full
                        time product design role
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <img
                        src={Splash}
                        alt="icons"
                        style={{
                            width: "80%",
                            maxWidth: "500px",
                            margin: "auto",
                            display: "block",
                        }}
                    ></img>
                </Grid>
            </Grid>

            <hr style={lineStyle} />
            <div style={{ justifyContent: "center" }}>
                <Grid container spacing={1} style={myStyles.container}>
                    <Grid item xs={12} md={12} style={{ textAlign: "left" }}>
                        <Typography
                            variant="h6"
                            component="h2"
                            className={classes.title}
                        >
                            Check out some of my work!
                        </Typography>
                    </Grid>
                    {projects.map((value) => (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            style={{ justifyContent: "center" }}
                        >
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
                                        <div style={{ marginTop: "16px" }}>
                                            {value.chips.map((c) => (
                                                <span
                                                    style={myStyles.chipStyle}
                                                >
                                                    {c}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                    <Grid item xs={12}><Typography
                            variant="h6"
                            component="h2"
                            className={classes.title}
                        >
                            Work in progress
                        </Typography></Grid>
                    
                    {inProgress.map((value) => (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            style={{ justifyContent: "center" }}
                        >
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
                                        <div style={{ marginTop: "16px" }}>
                                            {value.chips.map((c) => (
                                                <span
                                                    style={myStyles.chipStyle}
                                                >
                                                    {c}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
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
