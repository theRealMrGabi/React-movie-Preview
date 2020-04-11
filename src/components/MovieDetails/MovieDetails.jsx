import React from 'react';
import MovieDetailContainer from './MovieDetails.style';

const MovieDetails = ({movies}) => {
    return (
        <MovieDetailContainer>
            <div>
                <img src={`https://image.tmdb.org/t/p/w1280${movies.backdrop_path}`} alt=""/>
            </div>
            <div>
                <div className="img-preview">
                    <img src={`https://image.tmdb.org/t/p/w185${movies.poster_path}`} alt=""/>
                </div>
                <div className="movie-text">
                    <h3>{`${movies.title}`}</h3>
                    <p>{`${movies.overview}`}</p>
                    <div className="average-vote">
                        Average vote: {`${movies.average}`}     
                    </div>
                </div>
            </div>
        </MovieDetailContainer>
    )
}

export default MovieDetails

/**
 * picture
 * backdrop pics
 * poster path
 * movie title
 * average rating
 * genre
 * release date
 * cast
 * similar movies
 * trailer
 */