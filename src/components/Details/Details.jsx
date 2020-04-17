import React, { Fragment } from 'react';
import DetailsContainer from './Details.styles';
import { apiKey } from '../config';
import useDetails from '../services/useDetails';
import useVideoDetails from '../services/useVideoDetails';
import useMovieCast from '../services/useMovieCast';
import Spinner from '../spinner/spinner';
import ErrorDisplay from '../Error/Error';

const Details = (props) => {

    let id = props.match.params.movie_id;
    const detailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    const videoDetailsUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US&page=1`;
    const movieCastUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`

    const [{ currentMovie, isloading, error }] = useDetails(detailsUrl);
    const [{ currentVideo , videoLoading, videoError }] = useVideoDetails(videoDetailsUrl);
    const [{ movieCast, castLoading, castError }] = useMovieCast(movieCastUrl) ;
    console.log(movieCast)


    const { backdrop_path, title, poster_path, budget, revenue, overview, vote_average, popularity, runtime, genres, release_date, tagline, production_countries } = currentMovie;

    return (
        <DetailsContainer >
            {error && <ErrorDisplay />}
            {isloading ? (<Spinner />) : (<Fragment>
                <div className="poster-image">
                    <img className="responsive-img" 
                        src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} 
                        alt={title} 
                    />
                </div>

                <div className="movie-details col s12 m6">
                    <div className="preview-image">
                        <img className="responsive-img" 
                            src={`https://image.tmdb.org/t/p/w200${poster_path}`} 
                            alt={title} 
                        />
                    </div>
                    <div className="other-details">
                        <h2 className="movie-title center">{title}</h2>
                        <h5 className="movie-summary">{overview}</h5>

                        <div className="runtime">
                            <div><span className="transform">Runtime</span>: {runtime}</div>
                            <div className="release-date">
                                <span className="transform">Release Date</span> : {release_date ? release_date : "Release Date N/A"}
                            </div>
                            <div><span className="transform">Budget</span>: {budget}</div>
                            <div><span className="transform">Revenue</span>: {revenue}</div>
                        </div>
                    </div>
                </div>
            </Fragment>)}

            <hr/>

            {videoError && <ErrorDisplay />}
            {videoLoading ? (<Spinner />) :
                (<div className="trailer responsive-video row">
                    <div className="col s12">
                        <h5 className="trailer-text center">TRAILER</h5>
                        {
                            currentVideo.slice(0, 1).map(video => (
                                // {/* <div key={video.id} className="responsive-video" > */}
                                <div key={video.id} className="" >
                                    <iframe
                                        title={video.name}
                                        width="100%"
                                        height="480px"
                                        src={`//www.youtube.com/embed/${video.key}?rel=0`}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>)}

            <hr/>

            {castError && <ErrorDisplay />}
            {castLoading ? (<Spinner />) : (<Fragment>
                <h4 className="center" >CAST</h4>

                <div className="cast-container row">
                    {movieCast.slice(0, 20).map(cast => (
                        <div className="cast hoverable" key={cast.id} >
                            <div className="image">
                                <img
                                    src={`https://image.tmdb.org/t/p/w154${cast.profile_path}`}
                                    alt={cast.character}
                                    className="responsive-img"
                                />
                            </div>
                            <div className="cast-name center">
                                <div className="name">{cast.name}</div>
                            as <br />
                                <div className="character">{cast.character}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Fragment>)}

        </DetailsContainer>
    )
}

export default Details; 