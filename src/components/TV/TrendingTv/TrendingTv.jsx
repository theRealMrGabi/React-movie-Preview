import React from 'react';
import useFetch from '../../services/useFetch';
import TvDisplay from '../TvDisplay/TvDisplay';
import Spinner from '../../spinner/spinner';
import ErrorDisplay from '../../Error/Error';
import { apiKey } from '../../config';

const TrendingTv = () => {

    // const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`
    const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`
    const [{ movies, isloading, error }] = useFetch(url); 
    // https://api.themoviedb.org/3/trending/tv/day?api_key=d04a5b8f43cfae3458709d8a5cc36fe7

    // console.log(movies)
    return (
        <React.Fragment>
            <h3 className="center">Trending Tv Shows</h3>
            {error && <ErrorDisplay />}
            {isloading ? (<Spinner />) : (
                <TvDisplay movies={movies} />
            )}
        </React.Fragment>
    )
}

export default TrendingTv ;

// original_name: La casa de papel
// id: 71446
// name: Money Heist
// vote_count: 5567
// vote_average: 8.4
// first_air_date: 2017 - 05 - 02
// poster_path: /MoEKaPFHABtA1xKoOteirGaHl1.jpg
// genre_ids2 Items
// original_language: es
// backdrop_path: /