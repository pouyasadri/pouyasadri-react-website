import React, { memo } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import {competitiveSites, experience} from "../../portfolio.js";
import {Fade} from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import EducationImg from "../education/EducationImg";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import Certifications from "../../containers/certifications/Certifications";
import "../education/EducationComponent.css";

const Experience = memo(({ theme, onToggle }) => {
    const MemoizedExperienceAccordion = memo(ExperienceAccordion);

    return (
        <div className="experience-main">
            <Header theme={theme}/>
            <div className="basic-education">
                <Fade bottom duration={2000} distance="40px">
                    <div className="heading-div">
                        <div className="heading-img-div">
                            <EducationImg theme={theme}/>
                        </div>
                        <div className="heading-text-div">
                            <h1 className="heading-text" style={{color: theme.text}}>
                                Education
                            </h1>
                            <h3 className="heading-sub-text" style={{color: theme.text}}>
                                Basic Qualification and Certifcations
                            </h3>
                            <CompetitiveSites logos={competitiveSites.competitiveSites}/>
                        </div>
                    </div>
                </Fade>
                <Certifications theme={theme}/>
            </div>
            <hr/>
            <div className="basic-experience">
                <Fade bottom duration={2000} distance="40px">
                    <div className="experience-heading-div">
                        <div className="experience-heading-img-div">
                            <ExperienceImg theme={theme}/>
                        </div>
                        <div className="experience-heading-text-div">
                            <h1
                                className="experience-heading-text"
                                style={{color: theme.text}}
                            >
                                {experience.title}
                            </h1>
                            <h3
                                className="experience-heading-sub-text"
                                style={{color: theme.text}}
                            >
                                {experience["subtitle"]}
                            </h3>
                            <p
                                className="experience-header-detail-text subTitle"
                                style={{color: theme.secondaryText}}
                            >
                                {experience["description"]}
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>
            <MemoizedExperienceAccordion sections={experience["sections"]} theme={theme}/>

            <Footer theme={theme} onToggle={onToggle}/>
            <TopButton theme={theme}/>
        </div>
    );
});

export default Experience;
