import React, {memo} from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Button from "../../components/button/Button";
import {Fade} from "react-reveal";
import "../contact/ContactComponent.css";
import {aboutMePageData, greeting} from "../../portfolio.js";
import Lottie from "react-lottie";
import {introductionAnimation, journeyAnimation, skillsAnimation, languageAnimation, contactAnimation} from "./animations";

const Section = ({theme, animationOptions, sectionData, buttonLink, buttonText,left}) => (
    <Fade bottom duration={1000} distance="40px">
        <div className="contact-heading-div" style={{marginTop:"5rem"}}>
            {left && (
                <div className="contact-heading-img-div">
                    <Lottie options={animationOptions} height={400} width={400}/>
                </div>
            )}

            <div className="contact-heading-text-div">
                <h1 className="contact-heading-text" style={{color: theme.text}}>
                    {sectionData.title}
                </h1>
                <p className="contact-header-detail-text subTitle"
                   style={{color: theme.secondaryText, lineHeight: 1.625}}>
                    {sectionData.description}
                </p>
                {buttonText && (
                    <div className="resume-btn-div">
                        <Button text={buttonText} newTab={true} href={buttonLink} theme={theme}/>
                    </div>
                )}

            </div>
            {!left && (
                <div className="contact-heading-img-div">
                    <Lottie options={animationOptions} height={400} width={400}/>
                </div>
            )}
        </div>
    </Fade>
);

const AboutMe = ({theme}) => (
    <div className="contact-main">
        <Header theme={theme}/>
        <div className="basic-contact">
            <Section theme={theme} animationOptions={introductionAnimation} sectionData={aboutMePageData.sections[0]} buttonLink={greeting.resumeLink} buttonText="See My Resume" left={"true"}/>
            <Section theme={theme} animationOptions={journeyAnimation} sectionData={aboutMePageData.sections[1]} buttonLink={"/projects"} buttonText="See My Projects"/>
            <Section theme={theme} animationOptions={skillsAnimation} sectionData={aboutMePageData.sections[2]} left={"true"}/>
            <Section theme={theme} animationOptions={languageAnimation} sectionData={aboutMePageData.sections[3]}/>
            <Section theme={theme} animationOptions={contactAnimation} sectionData={aboutMePageData.sections[4]} buttonLink={"/contact"} buttonText="Contact Me" left={"true"}/>
        </div>
        <Footer theme={theme}/>
        <TopButton theme={theme}/>
    </div>
);

export default memo(AboutMe);
