import PECSSCover from "../resources/PECSS/PECSS-cover.png";
import PECSSHero from "../resources/PECSS/PECSS-hero.png";

import FiservCover from "../resources/Fiserv/Fiserv-cover.png";
import FiservHero from "../resources/Fiserv/Fiserv-hero.png";

import MastercardCover from "../resources/Mastercard/Mastercard-cover.png";
import MastercardHero from "../resources/Mastercard/Mastercard-hero.png";

import InsomniacCover from "../resources/Insomniac/Insomniac-cover.png";
import InsomniacHero from "../resources/Insomniac/Insomniac-hero.png";


import AquariumCover from "../resources/Aquarium/Aquarium-cover.png";
import AquariumHero from "../resources/Aquarium/Aquarium-hero.png";


export const mastercard = {
    name: "Mastercard: Product Experience Design",
    image: MastercardCover,
    hero: MastercardHero,
    chips: ["Internship", "UX Design", "B2B + B2C"],
    path: "mastercard",
}

export const fiserv = {
    name: "Fiserv: Crypto + Online Banking",
    image: FiservCover,
    hero: FiservHero,
    chips: ["Case Study", "UX Design / UX Research", "Fintech"],
    path: "fiserv",
}

export const insomniac = {
    name: "Insomniac Games: Text Design Guidelines",
    image: InsomniacCover,
    hero: InsomniacHero,
    chips: ["Case Study", "UX Research / UX Writing", "Accessibility", "Gaming"],
    path: "insomniac",
}

export const pecss = {
    name: "PECSS — PTSD Therapy Platform",
    image: PECSSCover,
    hero: PECSSHero,
    chips: ["Academic Lab", "HCI Research / UX Design", "Healthcare" ],
    path: "pecss",
}

export const aquarium = {
    name: "Georgia Aquarium",
    image: AquariumCover,
    hero: AquariumHero,
    chips: ["Case Study", "UX Design / UX Research", "Education"],
    path: "aquarium",
}


export const projects = [
    aquarium, mastercard, fiserv, insomniac, pecss
];