import React from 'react';

const Video = React.memo(({ video, theme }) => (
    <div className="video">
        <a href={"https://www.youtube.com/watch?v=" + video.id.videoId} target="_blank"
           rel="noopener noreferrer" className="video-link" style={{color: theme.text}}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <h3 dangerouslySetInnerHTML={{__html: video.snippet.title}}/>
        </a>
    </div>
));

export default Video;
