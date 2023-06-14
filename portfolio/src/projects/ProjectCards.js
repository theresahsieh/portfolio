import {
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent
} from '@mui/material';
import { Link } from "react-router-dom";
import * as myStyles from "../MyStyles";

const mainCard = {
    margin: ".5rem",
    borderRadius: 4,
    marginBottom: "1.5rem",
    transition: "all 0.3s ease-in-out 0s",
    
    boxShadow: "none",
    "&:hover": {
        //boxShadow: "rgba(0, 0, 0, 0.22) 0px 19px 43px",
        transform: "translate3d(4px, -6px, 0px)",
    },
}

const fullCardImage = {
    "@media (max-width: 900px)": {
        height: "30vw",
    },
    height: "18vw",
    maxHeight: "340px"
};

const notFullCardImage = {
    "@media (max-width: 900px)": {
        height: "10vw",
    },
    "@media (max-width: 600px)": {
        height: "30vw",
    },
    height: "12vw",
    maxHeight: "200px"
}

const ProjectCards = (props) => {
    const projects = props.projects;
    const isFull = props.isFull;
    return (
        <Grid container sx={{
            //justifyContent: "center",
            width: "80%",
            maxWidth: "1400px",
            margin: "auto",
        }}>
            {!isFull && (
                <Grid item xs={12} style={{ marginLeft: "6px", marginTop: "2rem" }}>
                    <Typography variant="body2" component="p">
                        <strong> More Projects </strong>
                    </Typography>
                </Grid>
            )}
            {isFull && (
                <Grid item xs={12} style={{ marginLeft: "6px", marginTop: "2rem", marginBottom:"2rem" }}>
                    <Typography variant="h4" component="p">
                        <strong>Check out some of my work!</strong>
                    </Typography>
                </Grid>
            )}
            {projects.map((value) => (
                <Grid
                    key={`${value.path}`}
                    item
                    xs={12}
                    sm={!isFull && 4}
                    md={isFull && 6}
                    style={{ justifyContent: "center" }}
                >
                    <Link
                        to={`/projects/${value.path}`}
                        key={`${value.path}`}
                        style={{ textDecoration: "none" }}
                    >
                        <Card sx={mainCard}>
                            <CardMedia
                                image={value.image}
                                title={value.name}
                                sx={isFull
                                    ? fullCardImage
                                    : notFullCardImage}
                            ></CardMedia>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h2"
                                >
                                    <strong>{value.name}</strong>
                                </Typography>
                                {isFull && (
                                    <div style={{ marginTop: "16px" }}>
                                        {value.chips.map((c) => (
                                            <span key={`${c}`} style={myStyles.chipStyle}>
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

    )
}
export default ProjectCards;