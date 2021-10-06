import KlixCover from "./resources/Klix/Klix-cover.png";
import KlixDetails from "./KlixDetails";

import PECSSCover from "./resources/PECSS/PECSS-cover.png";
import PECSSDetails from "./PECSSDetails";


import ReflectCover from "./resources/Reflect/Reflect-cover.png";
import ReflectDetails from "./ReflectDetails";

export const ProjectDetailContent = {
    pecss: {
        title: "PECSS",
        nsf: "1915504",
        coverImage: PECSSCover,
        color: "#54D0E0",
        problemStatement:
            "Managing personal health information to improve patient adherence to PTSD treatment.",
        roles: ["HCI Research", "UX Design", "Development"],
        timeline: ["Jan 2020 - present"],
        tools: ["Figma", "Angular JS"],
        teamMembers: [
            "Dr. Rosa Arriaga",
            "Dr. Andrew Sherrill",
            "Peter Presti",
            "Varnit Jain",
            "Hayley Evans",
            "Marcus Wilder",
            "Catherine Deeter",
            "Adam Hayward",
            "Kenneth Akers",
            "Jiawei Zhou",
        ],
        details: <PECSSDetails />,
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
        details: <KlixDetails />,
    },
    reflect: {
        title: "Reflect! Redesign",
        nsf: "1623419",
        coverImage: ReflectCover,
        color: "#2993FC",
        problemStatement:
            "Facilitating collaborative problem solving for small teams",
        roles: ["UX Design", "Development"],
        timeline: ["Jan 2019 - Dec 2020", "NSF Project"],
        tools: ["Adobe XD", "React JS"],
        teamMembers: [
            "Dr. Michael Hoffmann",
            "Phillip Abel",
            "Angelina Suwoto",
            "Mary Alsayar",
            "Ale Silcott",
        ],
        details: <ReflectDetails />,
    },
};
