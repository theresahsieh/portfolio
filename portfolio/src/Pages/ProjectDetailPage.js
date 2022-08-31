import { Grid, Typography, Container } from "@material-ui/core";

import { useEffect } from "react";
import nsf from "./resources/nsf.png";

import * as myStyles from "../MyStyles";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    information: {
        "@media (max-width: 600px)": {
            width: "100%",
        },
        width: "80%",
    },
});

const coverImageStyle = {
    width: "100%",
    height: "auto",
};

const ProjectDetail = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const content = props.content;
    const classes = useStyles();
    return (
        <div>
            <img
                src={content.coverImage}
                alt="Cover"
                style={coverImageStyle}
            ></img>
            <div style={{ margin: "1rem 1.5rem 1rem 1.5rem" }}>
                <Typography variant="h1">
                    {content.title}
                </Typography>
                <div style={{ marginTop: "16px" }}>
                    {content.chips.map((c) => (
                        <span style={myStyles.chipStyle}>{c}</span>
                    ))}
                </div>
                {content.nsf && (
                    <div style={{ verticalAlign: "middle", margin: "auto" }}>
                        <img
                            src={nsf}
                            alt="nsf logo"
                            style={{
                                maxWidth: "45px",
                                display: "inline-flex",
                                verticalAlign: "middle",
                                margin: ".5rem",
                            }}
                        />
                        <Typography style={{ display: "inline-flex" }}>
                            This project is funded by the National Science
                            Foundation grant #{content.nsf}.
                        </Typography>
                    </div>
                )}
                <Container className={classes.information}>
                    {content.details}
                </Container>
            </div>
        </div>
    );
};
export default ProjectDetail;
