import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as myStyles from "../MyStyles";

const HiddenDetail = (props) => {
    return (
        <Accordion
            elevation={0}
            disableGutters
            sx={{
                '&:before': {
                    display: 'none',
                },
                borderRadius: 1,
                border: `solid ${myStyles.grey.three}`,
                marginTop: "1.5rem"
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <div style={{ display: "flex" }}>
                    <span style={{ marginRight: ".25rem" }}>{props.icon}</span>
                    <div>
                        <Typography sx={{ fontSize: "1.15rem" }}><strong>{props.title}</strong></Typography>
                        <Typography sx={{ fontWeight: "light" }}>{props.summary}</Typography>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails sx={{ borderTop: "solid rgba(216, 222, 226, 0.5)", paddingY: "2rem" }}>
                {props.children}
            </AccordionDetails>
        </Accordion>
    );
};

export default HiddenDetail;