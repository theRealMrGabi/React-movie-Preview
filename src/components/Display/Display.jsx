import React from 'react';
import {Link} from 'react-router-dom';
import DisplayContainer from './Display.styles';

const Display = ({movies}) => {

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
        <DisplayContainer>
            <div className="row">
                {movies.slice(0, 8).map(movie => (
                    <div className="col s12 m6 l3" key={movie.id} >
                        <div className="card hoverable">
                            <div className="card-image">
                                <Link to='/'>
                                    <img src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} alt={`${movie.name}`} />
                                </Link>
                            </div>
                            <div className="card-action">
                                <div className="movie-title black-text"><b>{`${limitMovieTitle(movie.title)}`}</b></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </DisplayContainer>
    )
}

export default Display