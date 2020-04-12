import React from 'react';
import useFetch from '../services/useFetch';
import { apiKey } from '../config';
import Display from '../Display/Display';
import ErrorDisplay from '../Error/Error';
import Spinner from '../spinner/spinner';

const PopularMovie = () => {

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

    const [{ movies, isloading, error }] = useFetch(url);  

    return (
        <React.Fragment>
            {error && <ErrorDisplay />}
            {isloading ? (<Spinner />) : (
                <Display movies={movies} />
            )}
        </React.Fragment>
    )
}

export default PopularMovie
