import { useState, useEffect } from 'react';
import axios from 'axios';
import { parse } from 'node-html-parser';
// Custom hook for fetching Medium posts
export const useFetchPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pouyasadri`;
            try {
                const response = await axios.get(url);
                let articles = response.data.items.map(article => {
                    const root = parse(article.content);
                    const firstImage = root.querySelector('img');
                    const imageUrl = firstImage ? firstImage.getAttribute('src') : null;

                    return {
                        ...article,
                        image: imageUrl,
                    };
                });

                setPosts(articles.slice(0, 3));
            } catch (error) {
                console.error("Error fetching Medium posts:", error);
            }
        };

        fetchPosts();
    }, []);

    return posts;
};
