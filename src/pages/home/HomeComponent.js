import React, {useState, useEffect, lazy, Suspense} from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Button from "../../components/button/Button";
import YouTubeVideos from "../../components/YoutubeVideos/YoutubeVideos";

const Skills = lazy(() => import("../../containers/skills/Skills"));
const Footer = lazy(() => import('../../components/footer/Footer'));
const TopButton = lazy(() => import("../../components/topButton/TopButton"));

const Home = ({theme}) => {
    const [isShow, setIsShow] = useState(true);

    const isFrench = /^fr\b/.test(navigator.language) || Intl.DateTimeFormat().resolvedOptions().timeZone === "Europe/Paris";

    useEffect(() => {
        // Any side effect operations can be handled here
    }, []);

    return (
        <>
            {/*{isFrench && isShow && (*/}
            {/*    <div className="alert">*/}
            {/*        <span className="closebtn" onClick={() => setIsShow(false)}>&times;</span>*/}
            {/*        <Button*/}
            {/*            className="change-language-btn"*/}
            {/*            text="Continuez en Français 🇫🇷"*/}
            {/*            href="https://fr.pouyasadri.com"*/}
            {/*            theme={theme}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*)}*/}
            <Header theme={theme}/>
            <Greeting theme={theme}/>
            <Suspense fallback={<div></div>}>
                <YouTubeVideos theme={theme}/>
            </Suspense>
            <Suspense fallback={<div></div>}>
                <Skills theme={theme}/>
            </Suspense>
            <Suspense fallback={<div></div>}>
                <Footer theme={theme}/>
            </Suspense>
            <Suspense fallback={<div></div>}>
                <TopButton theme={theme}/>
            </Suspense>
        </>
    );
}

export default React.memo(Home);
