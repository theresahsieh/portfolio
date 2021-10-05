import KlixCover from "./resources/Klix/Klix-cover.png";
import KlixSol from "./resources/Klix/sol.png";
import KlixDetails from "./KlixDetails";

import PECSSCover from "./resources/PECSS/PECSS-cover.png";
import PECSSDetails from "./PECSSDetails";
import PECSSGoals from "./resources/PECSS/PECSS_Goals.png";

import ReflectCover from "./resources/Reflect/Reflect-cover.png";
import ReflectLogo from "./resources/Reflect/Reflect-logo.png";
import ReflectDetails from "./ReflectDetails";

import { Typography } from "@material-ui/core";
import * as myStyles from "../MyStyles";

const textBlockStyle = {
    fontWeight: "normal",
    margin: "1rem 0 1rem 0",
};

const solutionImageStyle = {
    margin: "1rem auto",
    width: "90%",
    maxWidth: "600px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "-2px 2px 4px 2px rgba(0,0,0,0.08)",
    display: "block",
};

const logoImageStyle = {
    ...solutionImageStyle,
    padding: "1rem",
    border: " 4px solid dodgerBlue",
};

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
        problemSpace: (
            <div>
                <Typography variant="h6" component="p" style={textBlockStyle}>
                    <strong>Post traumatic stress disorder (PTSD)</strong> is a
                    mental health disorder affecting individuals dealing with
                    traumatic experiences and is characterized by trauma
                    re-experiencing, avoidance of trauma related situations,
                    emotions and thoughts, negative alterations in thought and
                    mood, and hyperarousal. US veterans are disproportionally
                    affected.
                </Typography>
                <Typography variant="h6" component="p" style={textBlockStyle}>
                    <strong>Prolonged Expousre (PE) Therapy</strong> is a widely
                    accepted therapeutic approach to addressing PTSD which works
                    to reduce PTSD symptoms by having patients process their
                    traumatic experiences through clinical sessions and homework
                    assignments.
                </Typography>
                <Typography
                    variant="h5"
                    component="p"
                    style={{ ...textBlockStyle, marginLeft: "2.5rem" }}
                >
                    <em>
                        The efficacy of PE therapy can be hindered by its
                        reliance on self reported data and clinician intuition.
                        The information collected from patients can suffer from
                        subjectivity or sparseness. Improved data collection and
                        visualization tools would allow clinicians to better
                        track and respond to patients' mental health needs.
                    </em>
                </Typography>
            </div>
        ),
        solution: (
            <div>
                <Typography variant="h6" component="p" style={textBlockStyle}>
                    We propose the{" "}
                    <strong>
                        {" "}
                        Prolonged Exposure Collective Sensing System (PECSS)
                    </strong>
                    , a platform that uses a data-driven approach to provide
                    clinicians the information they need to help patients
                    succeed in their treatment. Including a patient-facing
                    mobile application and clinician-facing online dashboard,
                    PECSS allows patients to contribute detailed records of
                    their treatment progress and supplies clinicians the
                    resources to optimize their therapeutic practices. The 3
                    major goals of the PECSS project are to:
                </Typography>
                <Typography
                    variant="ul"
                    component="ul"
                    style={myStyles.bigListStyle}
                >
                    <li>Improve continuity of care</li>
                    <li>Facilitate point of care interactions</li>
                    <li>Increase patient engagement</li>
                </Typography>
                <img
                    src={PECSSGoals}
                    alt="dashboard version 2"
                    style={myStyles.imageStyleNoShadow}
                ></img>
                <Typography variant="h6" component="p" style={textBlockStyle}>
                    This is a National Science Foundation (NSF) funded project
                    and due to the nature of our work, I am not able to share
                    all the details that have yet to be published. Below, I
                    share some context for the pieces of the project I have been
                    working on. Please contact me if you would like to learn
                    more and feel free to read the already published work.
                    <ul>
                        <li>
                            <a
                                href="https://dl.acm.org/doi/10.1145/3313831.3376170"
                                style={{
                                    textDecoration: "none",
                                    color: "#2F7179",
                                }}
                                target="blank"
                            >
                                Understanding the Care Ecologies of Veterans
                                with PTSD
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://par.nsf.gov/servlets/purl/10182778"
                                style={{
                                    textDecoration: "none",
                                    color: "#2F7179",
                                }}
                                target="blank"
                            >
                                Bridging the Gap: Creating a Clinician-Facing
                                Dashboard for PTSD
                            </a>
                        </li>
                    </ul>
                </Typography>
            </div>
        ),
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
            <div>
                <Typography variant="h6" component="p" style={textBlockStyle}>
                    We designed "Klix" - a mobile app that creates safe
                    community spaces for like-minded players and eases the
                    burden of scheduling gameplay.
                </Typography>
                <img
                    src={KlixSol}
                    alt="Klix cover"
                    style={solutionImageStyle}
                />
            </div>
        ),
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
        problemSpace: (
            <div>
                <Typography variant="h6" component="p" style={textBlockStyle}>
                    Wicked problems are problems that can be framed in a variety
                    of ways based on the perspective of the person looking at
                    it. These are difficult issues that don't have a clear
                    solution and pose serious ethical challenges in the world.
                    How do we deal with climate change, inequality, automation
                    in manufacturing?
                </Typography>
                <Typography variant="h6" component="p" style={textBlockStyle}>
                    In an educational setting, students presented with such
                    wicked problems may not know how to approach solving such
                    intricate issues. Who can you identify people affected by
                    the problem? How do you ethically consider the consequences
                    of your decision?
                </Typography>
            </div>
        ),
        solution: (
            <div>
                <Typography variant="h6" component="p" style={textBlockStyle}>
                    We propose Reflect! a web-based platform that guides small
                    teams through the Reflective Consensus Building (RCB).
                    Reflect! uses "Workplans" to provide a curriculum of
                    educational activities to promote both learning in
                    individual and team settings. Users are guided through the
                    argumentation process, including problem formulation,
                    identification and justification of stakeholders, and
                    symphysis proposal creation. The goal of Reflect! is to help
                    teams engage in self-corrective reasoning as they learn the
                    skills to approach complex ethical issues.
                </Typography>
                <img
                    src={ReflectLogo}
                    alt="Reflect! logo"
                    style={logoImageStyle}
                />
                <Typography variant="h6" component="p" style={textBlockStyle}>
                    This is a National Science Foundation (NSF) funded project
                    and here are links to associated publications:
                    <ul>
                        <li>
                            <a
                                href="http://dx.doi.org/10.1007/s11245-019-09640-x"
                                style={{
                                    textDecoration: "none",
                                    color: "#1a6dbf",
                                }}
                                target="blank"
                            >
                                Consensus Building and its Epistemic Conditions
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://dx.doi:10.1007/s10503-017-9442-x"
                                style={{
                                    textDecoration: "none",
                                    color: "#1a6dbf",
                                }}
                                target="blank"
                            >
                                The Elusive Notion of "Argument Quality"
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://dx.doi.org/10.1007/s11948-019-00132-0"
                                style={{
                                    textDecoration: "none",
                                    color: "#1a6dbf",
                                }}
                                target="blank"
                            >
                                Reflective Consensus Building on Wicked Problems
                                on the Reflect! Platform
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://dx.doi.org/10.1007/s10503-017-9442-x"
                                style={{
                                    textDecoration: "none",
                                    color: "#1a6dbf",
                                }}
                                target="blank"
                            >
                                Stimulating Reflection and Self-Correcting
                                Reasoning Through Argument Mapping: Three
                                Approaches
                            </a>
                        </li>
                    </ul>
                </Typography>
            </div>
        ),
        details: <ReflectDetails />,
    },
};
