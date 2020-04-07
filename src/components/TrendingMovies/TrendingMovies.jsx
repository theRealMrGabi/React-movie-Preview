import React from 'react';
import TrendingMovieContainer from './TrendingMovies.styles';
import useFetch from '../services/useFetch';
import { apiKey } from '../config';
import Display from '../Display/Display';


const TrendingMovies = () => {

    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
    const [{ movies, isloading, error }] = useFetch(url); 

    return (
        <TrendingMovieContainer>
            <Display movies={movies} />


            {/* {movies.slice(6, 14).map(movie => (
                <div>

                </div>
            ))} */}
        </TrendingMovieContainer>
    )
}

export default TrendingMovies
