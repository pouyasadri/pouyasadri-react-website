import React from 'react';
import {Fade} from "react-reveal";
import './YoutubeVideosComponent.css';
import Button from "../button/Button";
import { useFetchVideos } from './FetchYoutubeApi';
import Video from './Video';

const YouTubeVideos = (props) => {
    const theme = props.theme;
    const videos = useFetchVideos();

    return (
        <div className={"m-5"}>
            <Fade bottom duration={2000} distance="20px">
                <h3 className="youtube-header mb-4" style={{color: theme.text}}>
                    My Latest Videos on YouTube <span className="fab fa-youtube" style={{color:"#FF0000"}}></span>
                </h3>

                <div className="video-container">
                    {videos.map((video, index) => (
                        <Video key={index} video={video} theme={theme} />
                    ))}
                </div>

                <div className={"youtube-btn"}>
                    <Button
                        text="See More"
                        newTab={true}
                        href="https://www.youtube.com/channel/UCrfihekLrBk9k1cdQjgXGnQ"
                        theme={theme}
                        className="portfolio-repo-btn"
                    />
                </div>
            </Fade>
        </div>
    );
};

export default YouTubeVideos;
