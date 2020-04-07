import React from 'react';
import useFetch from '../services/useFetch';
import { apiKey } from '../config';
import Display from '../Display/Display';
import UpcomingMovieContainer from './UpcomingMovies.styles';

const UpcomingMovies = () => {

    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`

    const [{ movies, isloading, error }] = useFetch(url); 

    return (
        <UpcomingMovieContainer>
            <Display movies={movies} />
        </UpcomingMovieContainer>
    )
}

export default UpcomingMovies
