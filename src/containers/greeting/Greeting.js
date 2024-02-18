import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import {Fade} from "react-reveal";
import Lottie from 'react-lottie';
import * as animationData from '../../assests/lotties/developer.json';

export default function Greeting(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        },
    };
    const theme = props.theme;
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div className="greeting-text-div">
                        <div>
                            <p className="greeting-text" style={{color: theme.text}}>
                                {greeting.title}
                            </p>
                            <h2 className="greeting-nickname" style={{color: theme.text}}>
                                ( {greeting.nickname} )
                            </h2>
                            <h1
                                className="greeting-text-p subTitle mt-5"
                                style={{color: theme.secondaryText}}
                            >
                                {greeting.subTitle}
                            </h1>
                            <SocialMedia theme={theme}/>
                            <div className="portfolio-repo-btn-div">
                                <Button
                                    text="🤝 Hire Me"
                                    newTab={true}
                                    href="mailto:info@pouyasadri.com"
                                    theme={theme}
                                    className="portfolio-repo-btn"
                                />
                            </div>
                            {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
                        </div>
                    </div>
                    <div className="greeting-image-div">
                        {/* <img
							alt="saad sitting on table"
							src={require("../../assests/images/feelingProud.svg")}
						></img> */}
                        <Lottie
                            options={defaultOptions}
                            height={600}
                            width={600}
                        />
                        {/*<FeelingProud theme={theme}/>*/}
                    </div>
                </div>
            </div>
        </Fade>
    );
}
