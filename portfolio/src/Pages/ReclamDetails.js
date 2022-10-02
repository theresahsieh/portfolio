import { Grid, Typography } from "@material-ui/core";
import * as myStyles from "../MyStyles";
import ReclamCover from "./resources/Reclam/ReclamCover.png";
import SectionHeader from "./SectionHeader";

const ReclamDetails = () => {
    return (
        <div>
            <img
                src={ReclamCover}
                alt="Cover"
                style={myStyles.coverImageStyle}
            ></img>
            <Grid
                container
                spacing={1}
                alignItems="top"
                style={myStyles.gridInformation}
            >
                <Grid container item xs={12} md={8}>
                    <div>
                        <Typography variant="h1">
                            Reclam — Resusable Containers for Takeout
                        </Typography>
                        <div style={{ paddingBottom: "32px" }}>
                            <span style={myStyles.chipStyle}>
                                Case Study
                            </span>
                            <span style={myStyles.chipStyle}>UX Design / UX Research</span>
                        </div>
                    </div>
                </Grid>
                <Grid container item xs={12} md={8}>
                    <Typography variant="body2" component="p">
                        Documentation of this work is still in progress. Please
                        check back later for full details or reach out and ask
                        me about it!
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default ReclamDetails;
