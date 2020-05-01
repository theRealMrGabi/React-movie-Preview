import React from 'react';
import { Link } from 'react-router-dom';
import TvDisplayContainer from './TvDisplay.styles';

const TvDisplay = ({ movies }) => {

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

    const handleClick = (id) => {
        window.location.href = `tvdetails/${id}`;
    }

    return (
        <TvDisplayContainer>
            <div className="row" >
                {movies.slice(0, 8).map(movie => (
                    <div className="col s6 m6 l3" key={movie.id} >
                        <div className="card hoverable">
                            <div className="card-image">
                                <Link to={'/details/' + movie.id} onClick={() => handleClick(movie.id)}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                                        alt={`${movie.name}`}
                                        className="responsive-img"
                                    />
                                </Link>
                            </div>
                            <div className="card-action">
                                <div className="movie-title black-text"><b>{`${limitMovieTitle(movie.name)}`}</b></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </TvDisplayContainer>
    )
}

export default TvDisplay;

// original_name: La casa de papel
// id: 71446
// name: Money Heist
// vote_count: 5567
// vote_average: 8.4
// first_air_date: 2017 - 05 - 02
// poster_path: /MoEKaPFHABtA1xKoOteirGaHl1.jpg
// genre_ids2 Items
// original_language: es
// backdrop_path: /xGexTKCJDkl12dTW4YCBDXWb1AD.jpg
// overview: To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose.Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.