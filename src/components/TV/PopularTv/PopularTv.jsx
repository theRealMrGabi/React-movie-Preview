import React from 'react';
import useFetch from '../../services/useFetch';
import TvDisplay from '../TvDisplay/TvDisplay';
import Spinner from '../../spinner/spinner';
import ErrorDisplay from '../../Error/Error';
import { apiKey } from '../../config';

const PopularTv = () => {

    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;
    const [{ movies, isloading, error }] = useFetch(url); 

    return (
        <React.Fragment>
            <h3 className="center">Popular Tv Shows</h3>

            {error && <ErrorDisplay />}
            {isloading ? (<Spinner />) : (
                <TvDisplay movies={movies} />
            )}
        </React.Fragment>
    )
}

export default PopularTv ;