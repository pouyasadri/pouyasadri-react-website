import introductionAnimationData from "../../assests/lotties/aboutme.json";
import journeyAnimationData from "../../assests/lotties/journey.json";
import skillsAnimationData from "../../assests/lotties/skills.json";
import languageAnimationData from "../../assests/lotties/language.json";
import contactAnimationData from "../../assests/lotties/contact.json";

const animationOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    },
};

export const introductionAnimation = {...animationOptions, animationData: introductionAnimationData};
export const journeyAnimation = {...animationOptions, animationData: journeyAnimationData};
export const skillsAnimation = {...animationOptions, animationData: skillsAnimationData};
export const languageAnimation = {...animationOptions, animationData: languageAnimationData};
export const contactAnimation = {...animationOptions, animationData: contactAnimationData};
