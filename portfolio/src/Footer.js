import { Typography } from "@material-ui/core";

const Footer = () => {
    return (
        <footer style= {{height: "50px", width: "100%", textAlign: "center", bottom: 0}}>
            <Typography
            variant="p"
            component="p">
                &copy; 2021 Design + Code by Theresa Hsieh
            </Typography>
            
        </footer>
    )
}
export default Footer;