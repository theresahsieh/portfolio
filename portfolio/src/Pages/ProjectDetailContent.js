import KlixCover from "./resources/Klix/Klix-cover.png";
import KlixSol from "./resources/Klix/sol.png";
import KlixDetails from "./KlixDetails";

import PECSSCover from "./resources/PECSS/PECSS-cover.png";
import Welcome from "./resources/PECSS/welcome.png"

import PEQCover from "./resources/PEQ/PEQ-cover.png";
import ImaginalHw from "./resources/PEQ/ImaginalHw.png"

import ReflectCover from "./resources/Reflect/Reflect-cover.png";
import Workplan from "./resources/Reflect/workplan.png";

import { Typography } from "@material-ui/core";

const textBlockStyle = {
    fontWeight: "normal",
    margin: "1rem 0 1rem 0",
};

export const ProjectDetailContent = {
    pecss: {
        title: "PECSS Clinician Dashboard Redesign",
        coverImage: PECSSCover,
        color: "#54D0E0",
        problemStatement: "Improving PTSD treatment for veterans",
        roles: ["UI Design", "Development"],
        timeline: ["Jan 2019 - present", "NSF Project"],
        tools: ["Figma, Angular JS"],
        teamMembers: ["Marcus Wilder, Dr. Andrew Sherrill, Catherine Deeter"],
        problemSpace: (
            <Typography
                variant="h6"
                component="p"
                style={textBlockStyle}
            ></Typography>
        ),
        solution: (
            <Typography
                variant="h6"
                component="p"
                style={textBlockStyle}
            ></Typography>
        ),
        solutionImage: Welcome,
        details: (<div>PECSS</div>)
    },
    peq: {
        title: "Patient Engagement Quotient Prototype",
        coverImage: PEQCover,
        color: "#FF4BAF",
        problemStatement: "Visualizing electronic personal health information to improve patient adherence to treatment protocols",
        roles: ["UX Research", "UI Design"],
        timeline: ["Jan 2020 - present", "NSF Project"],
        tools: ["Figma"],
        teamMembers: ["Hayley Evans"],
        problemSpace: (
            <Typography
                variant="h6"
                component="p"
                style={textBlockStyle}
            ></Typography>
        ),
        solution: (
            <Typography
                variant="h6"
                component="p"
                style={textBlockStyle}
            ></Typography>
        ),
        solutionImage: ImaginalHw,
        details: (<div>PEQ</div>)
    },
    klix: {
        title: "Klix",
        coverImage: KlixCover,
        color: "#8576ed",
        problemStatement:
            "Helping gamers find friends and schedule gameplay in a safe environment",
        roles: ["User Research", "UI Design", "Prototyping", "User Testing"],
        timeline: ["Jan - Apr 2020", "Academic Project"],
        tools: ["Figma"],
        teamMembers: [
            "Stephanie He",
            "Ivanna Gomez",
            "Sarah Tsai",
            "Angela Young",
        ],
        problemSpace: (
            <Typography variant="h6" component="p" style={textBlockStyle}>
                The video gaming community thrives online, connecting people
                across the globe through platforms such as Twitch, Discord and
                Reddit. Due to its immense size, finding friends and scheduling
                gameplay with other gamers is often difficult. Befriending
                strangers online can already be a daunting task for some, but it
                is worsened by a culture of toxicity within the gaming
                community, with reports of harassment based on gender, race,
                ability, and sexual orientation. Minority groups, in particular,
                are targeted by this type of aggressive behavior.
            </Typography>
        ),
        solution: (
            <Typography variant="h6" component="p" style={textBlockStyle}>
                We designed "Klix" - a mobile app that creates safe community
                spaces for like-minded players and eases the burden of
                scheduling gameplay.
            </Typography>
        ),
        solutionImage: KlixSol,
        details: <KlixDetails/>
    },
    reflect: {
        title: "Reflect! Redesign",
        coverImage: ReflectCover,
        color: "#2993FC",
        problemStatement: "Facilitating collaborative problem solving for small teams",
        roles: ["UX Design", "Development"],
        timeline: ["Jan 2019 - Dec 2020", "NSF Project"],
        tools: ["Adobe XD", "React JS"],
        teamMembers: ["Phillip Abel", "Angelina Suwoto", "Mary Alsayar", "Ale Silcott"],
        problemSpace: (
            <Typography
                variant="h6"
                component="p"
                style={textBlockStyle}
            ></Typography>
        ),
        solution: (
            <Typography
                variant="h6"
                component="p"
                style={textBlockStyle}
            ></Typography>
        ),
        solutionImage: Workplan,
        details: (<div>Reflect</div>)
    },
};
