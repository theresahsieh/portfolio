import {
    Typography,
    Grid,
} from '@mui/material';
import { useEffect } from "react";
import ProjectCards from "./ProjectCards";
import { projects } from "./ProjectList";
import * as myStyles from "../MyStyles";
import me from "../resources/me.svg";

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="custom-container" style={{ padding: "2rem 1.5rem" }}>
                <Grid container alignItems={"center"}>
                    <Grid item sm={12} md={6} sx={{ paddingBottom: "2rem" }}>
                        <Typography component="h1" variant="h2" sx={{ paddingBottom: "2rem" }}> Hi there, I'm Terri!</Typography>
                        <Typography variant="h6"> I'm a product designer who loves to
                            create delightful experiences. I'm currently looking for a full-time
                            UX design role.
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <img src={me} alt="graphic of me waving hello"
                            style={{
                                width: "80%",
                                maxWidth: "500px",
                                margin: "auto",
                                display: "block",
                            }}></img>
                    </Grid>
                </Grid>

            </div>

            <div>
                <Grid
                    container
                    spacing={1}
                    style={{
                        backgroundColor: myStyles.grey.four,
                        "@media (maxWidth: 600px)": {
                            marginTop: "40px",
                            marginBottom: "40px",
                        },
                        justifyContent: "center"
                    }}
                >
                    <ProjectCards projects={projects} isFull={true} />
                </Grid>
            </div>
        </div>
    );
};
export default Projects;