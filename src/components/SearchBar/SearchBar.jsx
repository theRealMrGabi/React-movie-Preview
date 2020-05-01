import React from 'react';
import useFetch from '../services/useFetch';
import { apiKey } from '../config';
import Display from '../Display/Display';
import ErrorDisplay from '../Error/Error';
import Spinner from '../spinner/spinner';

const SearchBar = () => {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`

    const [{ movies, isloading, error }] = useFetch(url);

    return (
        <React.Fragment>
            <h3 className="center">Trending Movies</h3>
            {error && <ErrorDisplay />}
            {isloading ? (<Spinner />) : (
                <Display movies={movies} />
            )}
        </React.Fragment>
    )
}

export default SearchBar ; 