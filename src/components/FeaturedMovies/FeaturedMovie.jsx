import React from 'react';
// import LazyLoad from "react-lazyload";
// import FeaturedMovieContainer from './FeaturedMovieContainer';
import useFetch from '../services/useFetch';
import { apiKey } from '../config';
import Spinner from '../spinner/spinner';
import ErrorDisplay from '../Error/Error';

const FeaturedMovie = () => {

    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
    const [{ movies, isloading, error }] = useFetch(url); 

    const limitMovieTitle = (title, limit = 22) => {
        const newTitle = [];
        if (title.length > limit) {
            title.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newTitle.push(cur);
                }
                return acc + cur.length;
            }, 0);
            return `${newTitle.join(' ')}...`;
        }
        return title;
    };

    return (
        <React.Fragment>
            <div className="row">
                {error && <ErrorDisplay />}
                {isloading ? (<Spinner />) :
                    (<div>
                        {movies.slice(6, 14).map(movie => (
                            <div className="col s12 m6 l3" key={movie.id} >
                                <div className="card hoverable">
                                    <div className="card-image">
                                        <img src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} alt={`${movie.title}`} />
                                    </div>
                                    <div className="card-action">
                                        <div className="movie-title black-text"><b>{`${limitMovieTitle(movie.title)}`}</b></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>)}
            </div>
        </React.Fragment>
    )
}

export default FeaturedMovie ;