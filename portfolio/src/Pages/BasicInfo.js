import { Grid, Typography } from "@material-ui/core";

const BasicInfo = (props) => {
    const headingStyle = { marginBottom: ".25rem" };

    return (
        <Grid container style={{padding:"4px"}}>
            <Grid item xs={6} sm={3} style={{ marginTop: "2rem" }}>
                <Typography variant="h4" component="h3" style={headingStyle}>
                    Tools
                </Typography>
                {props.tools.map((value) => (
                    <Typography variant="subtitle2" component="p">
                        {value}
                    </Typography>
                ))}
            </Grid>
            <Grid item xs={6} sm={3} style={{ marginTop: "2rem" }}>
                <Typography variant="h4" component="h3" style={headingStyle}>
                    Team
                </Typography>
                <Typography variant="subtitle2" component="p">
                    Terri Hsieh (me)
                </Typography>
                {props.team.map((value) => (
                    <Typography variant="subtitle2" component="p">
                        {value}
                    </Typography>
                ))}
            </Grid>
            <Grid item xs={12} sm={6} style={{ marginTop: "2rem" }}>
                <Typography variant="h4" component="h3" style={headingStyle}>
                    My Role
                </Typography>
                <Typography variant="subtitle2" component="p">
                    <strong>Design — </strong> {props.design}
                </Typography>
                <Typography
                    variant="subtitle2"
                    component="p"
                    style={{ marginTop: "1rem" }}
                >
                    <strong>Research — </strong> {props.research}
                </Typography>
                {props.dev && <Typography
                    variant="subtitle2"
                    component="p"
                    style={{ marginTop: "1rem" }}
                >
                    <strong>Programming — </strong> {props.dev}
                </Typography>}
            </Grid>
        </Grid>
    );
};

export default BasicInfo;
