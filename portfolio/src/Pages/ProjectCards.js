import * as myStyles from "../MyStyles";
import {
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
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
    fullCardImage: {
        "@media (max-width: 960px)": {
            height: "30vw",
        },
        height: "18vw",
    },
    notFullCardImage: {
        "@media (max-width: 960px)": {
            height: "10vw",
        },
        "@media (max-width: 600px)": {
            height: "30vw",
        },
        height: "12vw",
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
        marginBottom: "80px",
        justifyContent: "center",
    },
});

const ProjectCards = (props) => {
    const classes = useStyles();
    const projects = props.projects;
    const isFull = props.isFull;

    return (
        <Grid container spacing={1} style={{...myStyles.container, padding: "2rem 0"}}>
            {!isFull && (
                <Grid item xs={12} style ={{marginLeft: "6px"}}>
                    <Typography variant="body2" component="p">
                        <strong> More Projects </strong>
                    </Typography>
                </Grid>
            )}
            {projects.map((value) => (
                <Grid
                    item
                    xs={12}
                    sm={!isFull && 4}
                    md={isFull && 6}
                    style={{ justifyContent: "center" }}
                >
                    <Link
                        to={`/projects/${value.path}`}
                        className={classes.cardLink}
                        key={value.path}
                    >
                        <Card className={classes.mainCard}>
                            <CardMedia
                                className={
                                    isFull
                                        ? classes.fullCardImage
                                        : classes.notFullCardImage
                                }
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
                                {isFull && (
                                    <div style={{ marginTop: "16px" }}>
                                        {value.chips.map((c) => (
                                            <span style={myStyles.chipStyle}>
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProjectCards;
