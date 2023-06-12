import * as myStyles from "../MyStyles";
import { Typography } from "@mui/material";

const SectionHeader = (props) => {
    const styling = {
        ...myStyles.bulletSquare,
        backgroundColor: props.color,
    };

    return (
        <div style={{ display: "block", width:"100%", marginBottom:"2rem" }}>
            <span style={{ display: "inline-flex"}}>
                <span style={styling} />
                <Typography variant="h2">
                    {props.children}
                </Typography>
            </span>
        </div>
    );
};

export default SectionHeader;
