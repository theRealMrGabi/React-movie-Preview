import { useState, useEffect } from 'react';
import Axios from 'axios';

const useMovieCast = (url) => {

    const [castLoading, setCastLoading] = useState(false);
    const [castError, setCastError] = useState(false);
    const [movieCast, setMovieCast] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            setCastLoading(true);
            setCastError(false);

            await Axios.get(url)
                .then(response => {
                    const featuredResult = response.data.cast;
                    setMovieCast(featuredResult)
                    console.log(featuredResult);
                })

                .catch(error => {
                    setCastError(error);
                })
            setCastLoading(false);
        }
        fetchData()
    }, [url])

    return [{ movieCast, castLoading, castError }]
}

export default useMovieCast ;