import KlixCover from "./resources/Klix/Klix-cover.png";
import KlixDetails from "./KlixDetails";

import PECSSCover from "./resources/PECSS/PECSS-cover.png";
import PECSSDetails from "./PECSSDetails";

import ReflectCover from "./resources/Reflect/Reflect-cover.png";
import ReflectDetails from "./ReflectDetails";

import FiservCover from "./resources/Fiserv/Fiserv-cover.png";
import FiservDetails from "./FiservDetails";

import MastercardCover from "./resources/Mastercard/Mastercard-cover.png";
import MastercardDetails from "./MastercardDetails";

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
            "Varnit Jain",
            "Hayley Evans",
            "Jiawei Zhou",
            "Aletha Luo",
            "Khusbu Patel"
        ],
        details: <PECSSDetails />,
    },
    fiserv: {
        title: "Fiserv: Crypto + Online Banking",
        coverImage: FiservCover,
        color: "#FF9A57",
        problemStatement:
            "Revolutionizing online banking with integrations with cryptocurrencies",
        roles: ["UX Research", "UX Design"],
        timeline: ["Aug 2021 - present"],
        tools: ["Figma", "AdobeXd", "Miro", "Qualtrics"],
        teamMembers: [
            "Annie Chen",
            "Kyle Leinart",
            "Robert MacDonald",
            "Vidushi Jain"
        ],
        details: <FiservDetails />,
    },
    mastercard: {
        title: "Mastercard Data and Services",
        coverImage: MastercardCover,
        color: "#ED5754",
        problemStatement:
            "Improving the SpendingPulse product for users",
        roles: ["Development", "UX Research", "UX Design"],
        timeline: ["Summer 2021 "],
        tools: ["ReactJS", "Redux", "SQL"],
        teamMembers: [
            "Natalie Pierce",
            "Thomas Lomont",
            "Micah Arnson-Serotta",
            "Emmie Wang",
            "Jieyu Xiong",
            "Alex Li Chen",
        ],
        details: <MastercardDetails />,
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
