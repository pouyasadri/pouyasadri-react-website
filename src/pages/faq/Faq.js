import React, {memo} from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
// import FaqAccordion from "../../containers/faqAccordion/FaqAccordion";
import "./Faq.css";
import {FaqPageData} from "../../portfolio";
import {Fade} from "react-reveal";
import animationData from "../../assests/lotties/faq.json";
import Lottie from "react-lottie";
import FaqAccordion from "../../containers/faqAccordion/FaqAccordion";
const Faq = memo(({theme, onToggle}) => {
    const MemoizedFaqAccordion = memo(FaqAccordion);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className="faq-main">
            <Header theme={theme}/>
            <div className="basic-faq">
                <Fade bottom duration={2000} distance="40px">
                    <div className="faq-heading-div">
                        <div className="faq-heading-img-div">
                            <Lottie
                                options={defaultOptions}
                                height={400}
                                width={400}
                            />
                        </div>
                        <div className="faq-heading-text-div">
                            <h1
                                className="faq-heading-text"
                                style={{color: theme.text}}
                            >
                                {FaqPageData.title}
                            </h1>
                            <h3
                                className="faq-heading-sub-text"
                                style={{color: theme.text}}
                            >
                                {FaqPageData.subtitle}
                            </h3>
                        </div>
                    </div>
                </Fade>
            </div>
            {/*<MemoizedExperienceAccordion sections={experience["sections"]} theme={theme}/>*/}
            <MemoizedFaqAccordion faqData={FaqPageData.faqData} theme={theme}/>
            <Footer theme={theme} onToggle={onToggle}/>
            <TopButton theme={theme}/>
        </div>
    );
});

export default Faq;
