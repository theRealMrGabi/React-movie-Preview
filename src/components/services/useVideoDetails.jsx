import { useState, useEffect } from 'react';
import Axios from 'axios';

const useVideoDetails = (url) => {

    const [videoLoading, setVideoLoading] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const [currentVideo, setCurrentVideo] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            setVideoLoading(true);
            setVideoError(false);

            await Axios.get(url)
                .then(response => {
                    // const featuredResult = response.data;
                    const featuredResult = response.data.results;
                    setCurrentVideo(featuredResult)
                    console.log(featuredResult);
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