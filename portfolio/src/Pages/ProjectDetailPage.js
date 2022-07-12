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
        width:"80%"
    }
});

const coverImageStyle = {
    margin: "10px 5% 10px 5%",
    width: "90%",
    height: "auto",
    borderRadius: "10px",
};

const lineStyle = {
    backgroundColor: "#E8E8E8",
    border: "none",
    display: "block",
    height: "2px",
    margin: "1.5rem ",
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
                <Typography variant="h5" component="h2" align="center">
                    <em>{content.problemStatement} </em>
                </Typography>
                <Typography variant="h4" component="h1" style={myStyles.title}>
                    {content.title}
                </Typography>
                <Grid container spacing={2} style={myStyles.container}>
                    <Grid item xs={6} sm={6} md={3}>
                        <Typography>
                            <strong>Role:</strong>
                        </Typography>
                        {content.roles.map((role) => (
                            <Typography>{role}</Typography>
                        ))}
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Typography>
                            <strong>Timeline:</strong>
                        </Typography>
                        {content.timeline.map((data) => (
                            <Typography>{data}</Typography>
                        ))}
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Typography>
                            <strong>Tools Used:</strong>
                        </Typography>
                        {content.tools.map((tool) => (
                            <Typography>{tool}</Typography>
                        ))}
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Typography>
                            <strong>Team Members:</strong>
                        </Typography>
                        {content.teamMembers.map((member) => (
                            <Typography>{member}</Typography>
                        ))}
                    </Grid>
                </Grid>
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

                <hr style={lineStyle} />
                <Container className={classes.information}>
                    {content.details}
                </Container>
            </div>
        </div>
    );
};
export default ProjectDetail;
