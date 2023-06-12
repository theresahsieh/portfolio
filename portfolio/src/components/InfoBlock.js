import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import * as myStyles from "../MyStyles";

const InfoBlock = (props) => {
    const tools = props.tools;
    return (
        <div
            style={{
                margin: "3rem 0",
                padding: "1rem  1rem  2.5rem 1rem  ",
                borderRadius: 8,
                border: `solid ${myStyles.grey.three}`,
                backgroundColor: myStyles.grey.four,
            }}
        >
            <Grid container>
                <Grid item xs={12} sm={8}>
                    <h3>My Role</h3>
                    {props.role}
                    <div className="projecct-responsibilities" style={{marginTop:"1.5rem"}}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            width: "95%",
                            borderBottom: "solid rgba(216, 222, 226, 0.5)"
                        }}></div>
                        {props.skills.map((s) => (
                            <div key={`${s}`} style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "1rem 0",
                                width: "95%",
                                borderBottom: "solid rgba(216, 222, 226, 0.5)"
                            }}>
                                <CheckBoxIcon sx={{ margin: "0 1rem" }} />
                                {s}
                            </div>
                        ))}
                    </div>

                </Grid>
                <Grid item xs={12} sm={4}>
                    <h3>Tools</h3>
                    <div className="project-tools" style={{ display: "flex", flexWrap: "wrap", }}>
                        {tools.map((t) => (
                            <div
                                key={`${t.name}`}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginRight: ".5rem",
                                    marginBottom: ".5rem",
                                    padding: ".5rem",
                                    borderRadius: 8,
                                    border: `solid ${myStyles.grey.three}`,
                                    backgroundColor: "white",
                                    width: "fit-content",
                                }}
                            >
                                <img
                                    src={t.image}
                                    alt={`${t.name} logo`}
                                    style={{
                                        width: "1rem",
                                        height: "1rem",
                                        marginRight: ".25rem",
                                    }}
                                ></img>
                                <span style={{ fontFamily: "Courier New" }}>{t.name}</span>
                            </div>
                        ))}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
export default InfoBlock;
