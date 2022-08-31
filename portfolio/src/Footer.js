import { Typography } from "@material-ui/core";
import * as myStyles from "./MyStyles";

const Footer = () => {
    return (
        <footer
            style={{
                height: "80px",
                width: "100%",
                textAlign: "center",
                bottom: 0,
                marginTop: "1rem",
                marginBottom: "-1rem",
                padding: "1.5rem",
                backgroundColor: myStyles.purple.four
            }}
        >
            <Typography variant="subtitle1" component="p">
                &copy; 2022 Design + Code by Theresa Hsieh
            </Typography>
        </footer>
    );
};
export default Footer;
