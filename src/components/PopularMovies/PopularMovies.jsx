import React from 'react';
import useFetch from '../services/useFetch';
import { apiKey } from '../config';
import Display from '../Display/Display';

import PopularMovieContainer from './PopularMovies.styles';

const PopularMovie = () => {

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

    const [{ movies, isloading, error }] = useFetch(url);  

    return (
        <PopularMovieContainer>
            <Display movies={movies} />
        </PopularMovieContainer>
    )
}

export default PopularMovie
