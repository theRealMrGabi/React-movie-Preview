import React, {useState} from 'react';
import { apiKey } from '../config';
import useFetch from '../services/useFetch';
import Display from '../Display/Display';
import SearchMovieContainer from './SearchMovieContainer';

const SearchMovie = () => {
    // const apiKey = "d04a5b8f43cfae3458709d8a5cc36fe7";

    const [searchQuery, setSearchQuery] = useState('avengers');
    const [url, setUrl] = useState(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=avengers&page=1&include_adult=true`)
    const [{ movies, isloading, error }] = useFetch(url); 

    const handleChange = e => {
        setSearchQuery(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setUrl(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=true`);
        setSearchQuery('')
    }

    // console.log({ searchQuery})
    return (
        <SearchMovieContainer>
            <div className="row form-row">
                <form onSubmit={handleSubmit} className="col s12 m6 l6">
                    <div className="input-field col s7">
                        <input type="text"
                            value={searchQuery}
                            placeholder="search for movies"
                            onChange={handleChange}
                        />
                    </div>
                    <button onClick={handleSubmit} className="btn waves-effect waves-light" type="submit" name="action">Search
                        <i className="material-icons right">search</i>
                    </button>
                </form>
            </div>

            <Display movies={movies}/>

            {/* <div className="row">
                {movies.slice(0, 8).map(movie => (
                    <div className="col s12 m6 l3" key={movie.id} >
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} alt={`${movie.name}`} />
                            </div>
                            <div className="card-action">
                                <div className="movie-title black-text">{`${movie.name}`}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
        </SearchMovieContainer>
    )
}

export default SearchMovie
