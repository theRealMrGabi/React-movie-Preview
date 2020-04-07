import React from 'react';
// import LazyLoad from "react-lazyload";
// import FeaturedMovieContainer from './FeaturedMovieContainer';
import useFetch from '../services/useFetch';
import { apiKey } from '../config';
import Display from '../Display/Display';

const FeaturedMovie = () => {

    // const apiKey = "d04a5b8f43cfae3458709d8a5cc36fe7";
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`

    const [{ movies, isloading, error }] = useFetch(url); 

    return (
        <React.Fragment>
            <Display movies={movies} />
        </React.Fragment>

        // <FeaturedMovieContainer>

        //     <div className="row">
        //         {movies.slice(0, 8).map(movie => (
        //             <div className="col s12 m6 l3" key={movie.id} >
        //                 <div className="card hoverable">
        //                     <div className="card-image">
        //                         <img src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} alt={`${movie.name}`} />
        //                     </div>
        //                     <div className="card-action">
        //                         <div className="movie-title black-text">{`${movie.name}`}</div>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>

        // </FeaturedMovieContainer>
    )
}

export default FeaturedMovie ;