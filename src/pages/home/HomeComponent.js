import React, { useState, useEffect, lazy, Suspense } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Button from "../../components/button/Button";
import YouTubeVideos from "../../components/YoutubeVideos/YoutubeVideos";
import {
  PersonSchema,
  LocalBusinessSchema,
  WebSiteSchema,
} from "../../components/structuredData/StructuredData";
import SeoHeader from "../../components/seoHeader/SeoHeader";

const Skills = lazy(() => import("../../containers/skills/Skills"));
const Footer = lazy(() => import("../../components/footer/Footer"));
const TopButton = lazy(() => import("../../components/topButton/TopButton"));

const Home = ({ theme }) => {
  const [isShow, setIsShow] = useState(true);

  const isFrench =
    /^fr\b/.test(navigator.language) ||
    Intl.DateTimeFormat().resolvedOptions().timeZone === "Europe/Paris";

  useEffect(() => {
    // Any side effect operations can be handled here
  }, []);

  return (
    <>
      <SeoHeader
        title="Pouya Sadri | Full Stack Developer & SEO Expert in Strasbourg, France"
        description="Professional web developer, full stack developer, mobile app developer, and SEO expert based in Strasbourg, France. Custom software solutions, optimized websites, and digital marketing strategies to elevate your business."
        keywords="web developer Strasbourg, développeur web Strasbourg, SEO expert France, full stack developer Alsace, mobile app development, freelance developer France"
      />
      <PersonSchema />
      <LocalBusinessSchema />
      <WebSiteSchema />
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
      <Header theme={theme} />
      <Greeting theme={theme} />
      <Suspense fallback={<div></div>}>
        <YouTubeVideos theme={theme} />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Skills theme={theme} />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Footer theme={theme} />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <TopButton theme={theme} />
      </Suspense>
    </>
  );
};

export default React.memo(Home);
