import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const useFetch = (url) => {

    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(false);

            await Axios.get(url)
                .then(response => {
                    const movieResult = response.data.results;
                    setMovies(movieResult)
                    console.log(movieResult)
                })

                .catch( error => {
                    setError(true);
                    console.log(error)
                })
            setIsLoading(false);
        }
        fetchData()
    }, [url]);

    return [{ movies, isloading, error }]
}

export default useFetch