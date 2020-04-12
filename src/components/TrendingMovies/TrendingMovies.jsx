import React from 'react';
import useFetch from '../services/useFetch';
import { apiKey } from '../config';
import Display from '../Display/Display';
import ErrorDisplay from '../Error/Error';
import Spinner from '../spinner/spinner';

const TrendingMovies = () => {

    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
    const [{ movies, isloading, error }] = useFetch(url); 

    return (
        <React.Fragment>
            {error && <ErrorDisplay />}
            {isloading ? (<Spinner />) :(
                <Display movies={movies} />
            )}
        </React.Fragment>
    )
}

export default TrendingMovies ;