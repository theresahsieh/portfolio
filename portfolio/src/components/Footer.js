import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import * as myStyles from "../MyStyles";

const Footer = () => {
    return (
        <footer
            style={{
                bottom: 0,
                margin: " 0 0 -1rem 0",
                padding: "2.5rem 0 ",
                backgroundColor: "#FFF2C6",
            }}
        >
            <div className="custom-container">
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
                <Typography
                    variant="subtitle1"
                    component="p"
                    style={{
                        fontSize: ".85rem",
                        padding: ".8rem 0",
                        fontWeight: "bold",
                    }}
                >
                    &copy; 2023 Design + Code by Theresa Hsieh
                </Typography>
            </div>
        </footer>
    );
};
export default Footer;