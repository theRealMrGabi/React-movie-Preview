import React from 'react'
import DisplayContainer from './Display.styles';

const Display = ({movies}) => {
    return (
        <DisplayContainer>
            <div className="row">
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
            </div>
        </DisplayContainer>
    )
}

export default Display