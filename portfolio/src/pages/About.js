import profileImage from "../resources/about/about-photo.png";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedIn from "../resources/about/linkedin.svg";
import me1 from "../resources/about/me1.svg";
import me2 from "../resources/about/me2.svg";
import me3 from "../resources/about/me3.svg";
import me4 from "../resources/about/me4.svg";
import me5 from "../resources/about/me5.svg";
import me6 from "../resources/about/me6.svg";
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import * as myStyles from "../MyStyles";


const manyMes = [
    { img: me1, title: "Designer" },
    { img: me2, title: "Researcher" },
    { img: me3, title: "Programmer" },
    { img: me4, title: "Artist" },
    { img: me5, title: "Fisherman" },
    { img: me6, title: "Chef" },
]


const About = () => {

    return (<div className="outer-block">
        <div className="centered-block">
            <Grid container sx={{ borderBottom: "solid rgba(216, 222, 226, 0.5)", marginBottom:"3rem" }}>
                <Grid xs={12} sm={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <img src={profileImage} alt="Theresa Hsieh profile" style={{ maxWidth: "400px", width: "100%", height: "auto", alignSelf: "center" }} />
                </Grid>
                <Grid xs={12} sm={6} sx={{
                    padding: ".5rem",
                    alignSelf: "center"
                }}>
                    <div style={{
                        display: "flex", flexDirection: "column",
                        height: "100%",
                        '@media(minWidth: 380px)': {
                            height: 'auto',
                        },
                        justifyContent: "center",
                        paddingBottom: "2rem"
                    }}>
                        <Typography component="h2" variant="h4"
                            sx={{ fontSize: "1.5rem" }}
                        >
                            <strong>Nice to meet you!</strong>
                        </Typography>
                        <Typography component="body" variant="body1" sx={{ paddingTop: "1rem" }}>
                            I’m an experienced product designer with a Master’s in
                            Human-Computer Interaction and a Bachelor’s in Computer
                            Science from Georgia Tech. I have worked on several end-to-end
                            user-centered design projects and enjoy crafting delightful
                            experiences. I’m currently looking for full time UX design roles.
                        </Typography>
                    </div>
                    <div>
                        <a href="mailto:theresaying.hsieh@gmail.com" target="_blank" rel="noreferrer">
                            <MailOutlineIcon fontSize="large" sx={{ color: "rgb(172, 179, 184)", paddingRight: "16px" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/theresa-hsieh/" target="_blank" rel="noreferrer">
                            <img src={LinkedIn} alt="LinkedIn logo" style={{ paddingBottom: "8px" }}></img>
                        </a>
                    </div>
                </Grid>
            </Grid>
        </div>
        
        <div className="centered-block">
            <Grid container>
            <Grid xs={12}>
                    <Typography component="h2" variant="h4"
                        sx={{ fontSize: "1.2rem" }}
                    >
                        All the hats I like to wear!
                    </Typography>
                </Grid>
                <Grid container paddingTop={".7rem"} paddingBottom={"2rem"}>
                    {manyMes.map((me) => (
                        <Grid xs={4} md={2} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} padding={'1rem .5rem'}>
                            <img src={me.img} alt={`Me stylized as a ${me.title}`} style={{ maxWidth: "100px", width: "100%", height: "auto", alignSelf: "center" }} />
                            <Typography>
                                {me.title}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
                <Grid xs={12}>
                    <Typography component="h2" variant="h4"
                        sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                    >
                        Experience
                    </Typography>

                </Grid>
                <Grid container padding={".7rem 0"} spacing={2} margin={"1rem"}>
                    <Grid xs={12} sm={6} padding={".5rem"}>
                        <div className="pointed-block-right" style={{ display: "flex" }}>
                            <WorkOutlineIcon fontSize="large" sx={{ padding: ".5rem", marginRight: "1rem", color: "white", backgroundColor: myStyles.blue.one, borderRadius: '20px' }} />
                            <div>
                                <Typography fontWeight={"bold"}>Product Designer / Georgia Aquarium</Typography>
                                <Typography sx={{ fontSize: ".8rem" }}> Apr 2022 - May 2023</Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} padding={".5rem"}>
                        <div className="pointed-block-right" style={{ display: "flex" }}>
                            <WorkOutlineIcon fontSize="large" sx={{ padding: ".5rem", marginRight: "1rem", color: "white", backgroundColor: myStyles.blue.one, borderRadius: '20px' }} />
                            <div>
                                <Typography fontWeight={"bold"}>Head TA: HCI Course / Georgia Tech</Typography>
                                <Typography sx={{ fontSize: ".8rem" }}> Aug 2021 - May 2023</Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} padding={".5rem"}>
                        <div className="pointed-block-right" style={{ display: "flex" }}>
                            <WorkOutlineIcon fontSize="large" sx={{ padding: ".5rem", marginRight: "1rem", color: "white", backgroundColor: myStyles.blue.one, borderRadius: '20px' }} />
                            <div>
                                <Typography fontWeight={"bold"}>Product Design Intern / Mastercard</Typography>
                                <Typography sx={{ fontSize: ".8rem" }}> Jun - Aug 2022</Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} padding={".5rem"}>
                        <div className="pointed-block-right" style={{ display: "flex" }}>
                            <WorkOutlineIcon fontSize="large" sx={{ padding: ".5rem", marginRight: "1rem", color: "white", backgroundColor: myStyles.blue.one, borderRadius: '20px' }} />
                            <div>
                                <Typography fontWeight={"bold"}>Content Designer / Insomniac Games</Typography>
                                <Typography sx={{ fontSize: ".8rem" }}> Jan - May 2022</Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} padding={".5rem"}>
                        <div className="pointed-block-right" style={{ display: "flex" }}>
                            <WorkOutlineIcon fontSize="large" sx={{ padding: ".5rem", marginRight: "1rem", color: "white", backgroundColor: myStyles.blue.one, borderRadius: '20px' }} />
                            <div>
                                <Typography fontWeight={"bold"}>Product Designer / Fiserv</Typography>
                                <Typography sx={{ fontSize: ".8rem" }}> Aug - Dec 2021</Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} padding={".5rem"}>
                        <div className="pointed-block-right" style={{ display: "flex" }}>
                            <WorkOutlineIcon fontSize="large" sx={{ padding: ".5rem", marginRight: "1rem", color: "white", backgroundColor: myStyles.blue.one, borderRadius: '20px' }} />
                            <div>
                                <Typography fontWeight={"bold"}>UX Engineer / PECSS Lab for PTSD</Typography>
                                <Typography sx={{ fontSize: ".8rem" }}> Jan 2020 - Dec 2021 </Typography>
                            </div>
                        </div>
                    </Grid>

                </Grid>
                
                <Grid xs={12}>
                    <Typography component="h2" variant="h4"
                        sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                    >
                        Education
                    </Typography>
                </Grid>
                <Grid container padding={".7rem 0"} spacing={2} margin={"1rem"} sx={{ width: "100%" }}>
                    <Grid xs={12} sm={6} padding={".5rem"}>
                        <div className="pointed-block-left" style={{ display: "flex" }}>
                            <SchoolIcon fontSize="large" sx={{ padding: ".5rem", marginRight: "1rem", color: "white", backgroundColor: myStyles.pink.one, borderRadius: '20px' }} />
                            <div>
                                <Typography fontWeight={"bold"}>MS Human-Computer Interaction</Typography>
                                <Typography sx={{ fontSize: ".8rem" }}> Georgia Tech</Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} padding={".5rem"}>
                        <div className="pointed-block-left" style={{ display: "flex" }}>
                            <SchoolIcon fontSize="large" sx={{ padding: ".5rem", marginRight: "1rem", color: "white", backgroundColor: myStyles.pink.one, borderRadius: '20px' }} />
                            <div>
                                <Typography fontWeight={"bold"}>BS Computer Science</Typography>
                                <Typography sx={{ fontSize: ".8rem" }}> Georgia Tech</Typography>
                            </div>
                        </div>
                    </Grid>

                </Grid>

            </Grid>
        </div>


    </div>)
};
export default About;