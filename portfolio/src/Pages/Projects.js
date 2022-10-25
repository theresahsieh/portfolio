import {
    Typography,
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
import arrow from "./resources/arrowDown.png";
import ProjectCards from "./ProjectCards";

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
    },
    splashText: {
        margin: "0 1.5rem 3rem 3.5rem",
        fontWeight: "normal",
        verticalAlign: "top",
        textAlign: "left",
        fontSize: "1rem",
    },
    container: {
        "@media (max-width: 600px)": {
            marginTop: "40px",
            marginBottom: "40px",
        },
        marginTop: "140px",
        marginBottom: "80px",
        justifyContent: "center",
    },
});

export const topProjects = [
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
        chips: ["Healthcare", "HCI Research / UX Design", "NSF" ],
        path: "pecss",
    },

    {
        name: "Klix — Bringing Gamers Together",
        image: KlixCover,
        chips: ["Case Study", "UX Design / UX Research"],
        path: "klix",
    },
];
export const inProgressProjects = [
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
];

const Projects = () => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        variant="h5"
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
                        with a passion for human-centered design looking for a
                        full time product design role
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
            <img
                src={arrow}
                alt="down arrow"
                style={{
                    width: "100%",
                    maxWidth: "2rem",
                    margin: "auto",
                    display: "block",
                }}
            ></img>
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
                </Grid>
                <ProjectCards projects={topProjects}  isFull={true}/>
                <Grid container spacing={1} style={myStyles.container}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h6"
                            component="h2"
                            className={classes.title}
                        >
                            Work in progress
                        </Typography>
                    </Grid>
                </Grid>
                <ProjectCards projects={inProgressProjects} isFull={true}/>
            </div>
        </div>
    );
};
export default Projects;
