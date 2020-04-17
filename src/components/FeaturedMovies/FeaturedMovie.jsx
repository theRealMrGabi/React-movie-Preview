import React from 'react';
import { Link } from 'react-router-dom';
// import LazyLoad from "react-lazyload";
// import FeaturedMovieContainer from './FeaturedMovieContainer';
import useFetch from '../services/useFetch';
import { apiKey } from '../config';
import Spinner from '../spinner/spinner';
import ErrorDisplay from '../Error/Error';
import Display from '../Display/Display';

const FeaturedMovie = () => {

    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
    // const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`

    const [{ movies, isloading, error }] = useFetch(url); 

    // const limitMovieTitle = (title, limit = 22) => {
    //     const newTitle = [];
    //     if (title.length > limit) {
    //         title.split(' ').reduce((acc, cur) => {
    //             if (acc + cur.length <= limit) {
    //                 newTitle.push(cur);
    //             }
    //             return acc + cur.length;
    //         }, 0);
    //         return `${newTitle.join(' ')}...`;
    //     }
    //     return title;
    // };

    // const handleClick = (id) => {
    //     window.location.href = `details/${id}`;
    // }

    return (
        <React.Fragment>
            <div className="row">
                <React.Fragment>
                    {error && <ErrorDisplay />}
                    {isloading ? (<Spinner />) : (
                        <Display movies={movies} />
                    )}
                </React.Fragment>
            </div>

        </React.Fragment>
    )
}

export default FeaturedMovie ;

