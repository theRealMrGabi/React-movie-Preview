import { useState, useEffect } from 'react';
import Axios from 'axios';

const useFetch = (url) => {

    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            await Axios.get(url)
                .then(response => {
                    const movieResult = response.data.results;
                    setMovies(movieResult)
                })

                .catch( error => {
                    setError(error);
                })
            setIsLoading(false);
        }
        fetchData()
    }, [url]);

    return [{ movies, isloading, error }]
}

export default useFetch ;