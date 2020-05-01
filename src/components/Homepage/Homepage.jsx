import React from 'react';
import Header from '../Header/Header';
import TopRatedMovie from '../TopRatedMovies/TopRatedMovies';
import TrendingMovies from '../TrendingMovies/TrendingMovies';
import TrendingTv from '../TV/TrendingTv/TrendingTv';

const Homepage = () => {
    return (
        <React.Fragment>
            <Header />
            <TrendingMovies />
            <TrendingTv />
            <TopRatedMovie />
        </React.Fragment>
    )
}

export default Homepage ;