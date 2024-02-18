import React from 'react';
import Button from "../button/Button";
import {Fade} from "react-reveal";
import { useFetchPosts } from './FetchPosts';
const MediumPosts = React.memo((props) => {
    const theme = props.theme;
    const posts = useFetchPosts();
    const MEDIUM_URL = "https://www.medium.com/@pouyasadri";

    return (
        <div className={"m-5"}>
            <Fade bottom duration={2000} distance="20px">
                <h3 className="youtube-header mb-4" style={{color: theme.text}}>
                    My Latest Articles on Medium <span className="fab fa-medium" style={{color: ""}}></span>
                </h3>

                <div className="video-container">
                    {posts.map((post) => (
                        <div className="video" key={post.guid}>
                            <a href={post.link} target="_blank"
                               rel="noopener noreferrer" className="video-link" style={{color: theme.text}}>
                                <img src={post.image} alt={post.title} style={{width:"20rem",height:"20rem"}}/>
                                <h3>{post.title}</h3>
                            </a>
                        </div>
                    ))}
                </div>

                <div className={"youtube-btn"}>
                    <Button
                        text="See More"
                        newTab={true}
                        href={MEDIUM_URL}
                        theme={theme}
                        className="portfolio-repo-btn"
                    />
                </div>
            </Fade>
        </div>
    );
});

export default MediumPosts;
