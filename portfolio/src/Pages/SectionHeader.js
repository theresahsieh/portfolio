import * as myStyles from "../MyStyles";
import { Typography } from "@material-ui/core";

const SectionHeader = (props) => {
    const styling = {
        ...myStyles.bulletSquare,
        backgroundColor: props.color,
    };

    return (
        <div style={{ display: "block", width:"100%" }}>
            <span style={{ display: "inline-flex", marginTop: "4rem" }}>
                <span style={styling} />
                <Typography variant="h2" style={myStyles.sectionHeader}>
                    {props.header}
                </Typography>
            </span>
        </div>
    );
};

export default SectionHeader;
