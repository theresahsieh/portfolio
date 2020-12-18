import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import resume from "./resources/HsiehResume_2020.jpg";

import { Link } from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        margin: "0 0 1.5rem 1.5rem",
        textDecoration: "none",
        color: "black",
    },
});

const resumeStyle = {
    minWidth: "300px",
    maxWidth: "800px",
    height: "auto",
    width: "90%",
    boxShadow: "-2px 2px 4px 2px rgba(0,0,0,0.08)",
};

const Resume = () => {
    const classes = useStyles();
    return (
        <div style={{ padding: "1rem" }}>
            <Typography
                variant="h4"
                className={classes.title}
                component={Link}
                target="_blank"
                href={
                    "https://drive.google.com/file/d/1TT1UD8u8KMfPCol2rkA24XiNeVH6Dky7/view?usp=sharing"
                }
            >
                resume
            </Typography>
            <div
                style={{
                    padding: "1rem",
                    flexDirection: "column",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justify: "center",
                }}
            >
                <img src={resume} alt="resume" style={resumeStyle} />
            </div>
        </div>
    );
};
export default Resume;
