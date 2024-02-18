import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchVideos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const API_KEY = 'AIzaSyBIy-gmASdDr5vV0SmJGJiM752CN8WSTjY';
            const channelId = 'UCrfihekLrBk9k1cdQjgXGnQ';
            const maxResults = 4;
            const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;

            try {
                const response = await axios.get(url);
                setVideos(response.data.items);
            } catch (error) {
                console.error('Failed to fetch videos:', error);
            }
        };

        fetchVideos();
    }, []);

    return videos;
};
