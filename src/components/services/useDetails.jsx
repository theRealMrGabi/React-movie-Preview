import { useState, useEffect } from 'react';
import Axios from 'axios';

const useDetails = (url) => {

    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentMovie, setCurrentMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            setIsLoading(true);

            await Axios.get(url)
                .then(response => {
                    const featuredResult = response.data;
                    setCurrentMovie(featuredResult)
                })

                .catch(error => {
                    setError(error);
                })
            setIsLoading(false);
        }
        fetchData()
    }, [url])

    return [{ currentMovie , isloading , error}]
}

export default useDetails ;