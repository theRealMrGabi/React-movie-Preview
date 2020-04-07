import React from 'react';
import useFetch from '../services/useFetch';
import { apiKey } from '../config';
import Display from '../Display/Display';
import TopRatedContainer from './TopRatedMovies.styles';

const TopRatedMovie = () => {

    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1` ;

    const [{ movies, isloading, error }] = useFetch(url); 

    return (
        <TopRatedContainer>
            <h3 className="center">Top Rated</h3>
            <Display movies={movies} />
        </TopRatedContainer>
    )
}

export default TopRatedMovie ;