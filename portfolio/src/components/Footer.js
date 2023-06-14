import { Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedIn from "../resources/icons/linkedin.svg";

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
                <div>
                    <Typography
                    variant="subtitle1"
                    component="p"
                    style={{
                        fontSize: ".85rem",
                        padding: ".8rem 0",
                        fontWeight: "bold",
                    }}
                >
                    &copy; 2023 Theresa Hsieh. All Rights Reserved
                    <br />
                    <span style={{ fontSize: ".85rem", fontWeight: "400" }}>Designed and developed from scratch with &hearts; and snacks</span>
                </Typography>
                </div>
                <div>
                <a href="mailto:theresaying.hsieh@gmail.com" target="_blank" rel="noreferrer">
                    <MailOutlineIcon fontSize="large" sx={{ color: "rgb(0, 0, 0)", paddingRight: "16px" }} />
                </a>
                <a href="https://www.linkedin.com/in/theresa-hsieh/" target="_blank" rel="noreferrer">
                    <img src={LinkedIn} alt="LinkedIn logo" style={{ paddingBottom: "8px" }}></img>
                </a>
            </div>
            </div>
            
        </footer>
    );
};
export default Footer;