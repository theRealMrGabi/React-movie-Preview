import React from 'react';
import useFetch from '../services/useFetch';
import { apiKey } from '../config';
import ErrorDisplay from '../Error/Error';
import Display from '../Display/Display';
import Spinner from '../spinner/spinner';

const TopRatedMovie = () => {

    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1` ;
    const [{ movies, isloading, error }] = useFetch(url); 

    return (
        <React.Fragment>
            <h3 className="center">All Time Top Rated</h3>
            <div className="row">
                {error && <ErrorDisplay />}
                {isloading ? (<Spinner />) : (
                    <Display movies={movies} />
                )}
            </div>
        </React.Fragment>
    )
}

export default TopRatedMovie ;