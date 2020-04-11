import React from 'react';
import { Link} from 'react-router-dom';
import useFetch from '../services/useFetch';
import { apiKey } from '../config';
import TopRatedContainer from './TopRatedMovies.styles';

const TopRatedMovie = () => {

    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1` ;

    const [{ movies, isloading, error }] = useFetch(url); 

    return (
        <TopRatedContainer>
            <h3 className="center">Top Rated</h3>
            <div className="row">
                {movies.slice(0, 8).map(movie => (
                    <div className="col s12 m6 l3" key={movie.id} >
                        <div className="card hoverable">
                            <div className="card-image">
                                <Link to='/'>
                                    <img src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} alt={`${movie.title}`} />
                                </Link>
                            </div>
                            <div className="card-action">
                                <div className="movie-title black-text">{`${movie.title}`}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </TopRatedContainer>
    )
}

export default TopRatedMovie ;