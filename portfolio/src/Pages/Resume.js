import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkIcon from "@material-ui/icons/Link";
import resume from "./resources/Resume2021.png";
import * as myStyles from "../MyStyles";

import { Link } from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        margin: "0 0 2.5rem 0",
        textDecoration: "none",
        color: "black",
        fontWeight: "500",
    },
    icon: {
        verticalAlign: "middle",
        marginRight: "6px",
        padding: "5px",
    },
});

const resumeStyle = {
    height: "auto",
    width: "100%",
    boxShadow: "-2px 2px 4px 2px rgba(0,0,0,0.08)",
};

const Resume = () => {
    const classes = useStyles();
    return (
        <div style={{ padding: "1rem" }}>
            <Grid container spacing={1} style={{...myStyles.container}}>
                <Grid item xs={12}>
                    <Typography
                        variant="h4"
                        className={classes.title}
                        component={Link}
                        target="_blank"
                        href={
                            "https://drive.google.com/file/d/1_aFrJlBiKwfp9IdEkwJM5033XyGAAdul/view?usp=sharing"
                        }
                    >
                        resume
                        <LinkIcon style ={myStyles.icon} fontSize="large" />
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <img src={resume} alt="resume" style={resumeStyle} />
                </Grid>
            </Grid>
        </div>
    );
};
export default Resume;
