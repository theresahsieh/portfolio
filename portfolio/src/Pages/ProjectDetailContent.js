import KlixCover from "./resources/Klix/Klix-cover.png";
import KlixDetails from "./KlixDetails";

import PECSSCover from "./resources/PECSS/PECSS-cover.png";
import PECSSDetails from "./PECSSDetails";

import FiservCover from "./resources/Fiserv/FiservCover.png";
import FiservDetails from "./FiservDetails";

import MastercardCover from "./resources/Mastercard/MastercardCover.png";
import MastercardDetails from "./MastercardDetails";


export const ProjectDetailContent = {
    pecss: {
        title: "PECSS",
        nsf: "1915504",
        coverImage: PECSSCover,
        chips: ["Healthcare", "HCI Research / UX Design"],
        details: <PECSSDetails />,
    },
    fiserv: {
        title: "Fiserv: Crypto + Online Banking",
        coverImage: FiservCover,
        chips: ["Case Study", "UX Design / UX Research"],
        details: <FiservDetails />,
    },
    mastercard: {
        title: "Mastercard Product Experience Design",
        coverImage: MastercardCover,
        details: <MastercardDetails />,
        chips: ["Internship", "UX Design", "B2B + B2C"],
    },

    klix: {
        title: "Klix",
        coverImage: KlixCover,
        color: "#8576ed",
        chips: ["Case Study", "UX Design / UX Research"],
        details: <KlixDetails />,
    }
};
