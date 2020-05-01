import { useState, useEffect } from 'react';
import Axios from 'axios';

const useVideoDetails = (url) => {

    const [videoLoading, setVideoLoading] = useState(false);
    const [videoError, setVideoError] = useState(null);
    const [currentVideo, setCurrentVideo] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            setVideoLoading(true);

            await Axios.get(url)
                .then(response => {
                    const featuredResult = response.data.results;
                    setCurrentVideo(featuredResult)
                })

                .catch(error => {
                    setVideoError(error);
                })
            setVideoLoading(false);
        }
        fetchData()
    }, [url])

    return [{ videoLoading, currentVideo, videoError }]
}

export default useVideoDetails ;