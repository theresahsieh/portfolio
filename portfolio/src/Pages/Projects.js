import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import KlixCover from "./resources/Klix-cover.png";
import PECSSCover from "./resources/PECSS-cover.png";
import PEQCover from "./resources/PEQ-cover.png"

const useStyles = makeStyles({
    title: {
        marginBottom: "1.5rem",
    },
    projectName: {
      fontWeight:"bold"
    },
    mainCard: {
        "@media (min-width: 960px)": {
            width: 768,
        },
        width: "80vw",
        borderRadius: 10,
        marginBottom: "1.5rem",
        transition: "all 0.3s ease-in-out 0s",
        boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.08)",
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
      float: 'right'
    }
});

const chipStyle = {
  padding:"3px 6px 3px 6px",
  borderRadius:"6px",
  fontSize:'0.775rem',
  fontWeight:'bold',
}
const klixChip = {...chipStyle, backgroundColor:"#8576ed"}
const pecssChip = {...chipStyle, backgroundColor:"#54D0E0"}
const yearChip = {...chipStyle, backgroundColor:'#E5E5E5'}
const peqChip = {...chipStyle, backgroundColor:"#FF4BAF"}


const Projects = () => {
    const classes = useStyles();
    return (
        <div style={{ padding: "1rem" }}>
            <div
                style={{
                    flexDirection: "column",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justify: "center",
                }}
            >
              <Typography variant="h4" component="h1" className={classes.title}>
                projects
            </Typography>
                <Card className={classes.mainCard}>
                    <CardMedia
                        className={classes.cardImage}
                        image={PECSSCover}
                        title="PECSS Cover Photo"
                    ></CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2" className={classes.projectName}>
                            PECSS Clinician Dashboard
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Prolonged Exposure Collective Sensing System.
                            Improving PTSD treatment for veterans.
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardChips}>
                      <span style={pecssChip}>UX Design + Angular JS</span>
                      <span style={yearChip}>2019 - present</span>
                    </CardActions>
                </Card>
                <Card className={classes.mainCard}>
                    <CardMedia
                        className={classes.cardImage}
                        image={PEQCover}
                        title="PEQ Cover Photo"
                    ></CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2" className={classes.projectName}>
                            PEQ Widget
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Patient Engagement Quotient. Visualizing electronic personal health 
                            information to improve patient adherence to treatment protocols.
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardChips}>
                      <span style={peqChip}>UX Research + Design</span>
                      <span style={yearChip}>2020 - present</span>
                    </CardActions>
                </Card>
                <Card className={classes.mainCard}>
                    <CardMedia
                        className={classes.cardImage}
                        image={KlixCover}
                        title="Klix Cover Photo"
                    ></CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2" className={classes.projectName}>
                            Klix
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Helping gamers find friends and schedule gameplay in
                            a safe environment.
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardChips}>
                      <span style={klixChip}>UX Research + Design</span>
                      <span style={yearChip}>2019</span>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};
export default Projects;
