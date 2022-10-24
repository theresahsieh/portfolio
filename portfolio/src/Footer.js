import { Grid, Link, Typography } from "@material-ui/core";
import * as myStyles from "./MyStyles";

const Footer = () => {
    return (
        <footer
            style={{
                bottom: 0,
                margin: " 0 0 -1rem 0",
                padding: "1.5rem",
                backgroundColor: "#FFF2C6",
            }}
        >
            <Grid
                container
                spacing={1}
                alignItems="top"
                style={myStyles.gridInformation}
            >
                <Grid container item xs={12} sm={1}></Grid>
                <Grid container item xs={12} sm={5}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="body2" component="p">
                            <strong>Get in touch!</strong>
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        md={8}
                        style={{ marginTop: "-.5rem" }}
                    >
                        <Typography variant="body1" component="p">
                            Reach me at{" "}
                            <Typography
                                variant="body1"
                                component={Link}
                                href="mailto:theresaying.hsieh@gmail.com"
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                    fontWeight: "bold",
                                }}
                            >
                                theresaying.hsieh@gmail.com
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} md={8}>
                        <Typography
                            variant="subtitle1"
                            component="p"
                            style={{
                                fontSize: ".85rem",
                                padding: "1rem 0",
                                fontWeight: "bold",
                            }}
                        >
                            &copy; 2022 Design + Code by Theresa Hsieh
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={1}></Grid>
                <Grid container item xs={12} sm={4}>
                    <Grid item xs={12}>
                        <Typography
                            variant="body2"
                            component="p"
                            style={{ margin: " 0rem" }}
                        >
                            <strong>Terri.</strong>
                        </Typography>
                        <Grid container item xs={12} style={{ paddingTop: " .9rem" }}>
                            <Typography
                                variant="body1"
                                component="p"
                                style={{ paddingRight: " 1rem" }}
                            >
                                Designer
                            </Typography>
                            <Typography
                                variant="body1"
                                component="p"
                            >
                                Developer
                            </Typography>
                        </Grid>
                        <Grid container item xs={6}>
                            <Typography
                                variant="body1"
                                component="p"
                                style={{ paddingRight: " 1rem" }}
                            >
                                Researcher
                            </Typography>
                            <Typography
                                variant="body1"
                                component="p"
                                
                            >
                                Artist
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    );
};
export default Footer;
