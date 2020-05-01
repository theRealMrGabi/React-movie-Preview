import React, { Fragment } from 'react';
import TvDetailsContainer from './TvDetails.styles';
import {apiKey} from '../../config';
import useDetails from '../../services/useDetails';
import useVideoDetails from '../../services/useVideoDetails';
import useMovieCast from '../../services/useMovieCast';
import Spinner from '../../spinner/spinner';
import ErrorDisplay from '../../Error/Error';

const TvDetails = (props) => {

    let id = props.match.params.movie_id;

    const detailsUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`;
    const videoDetailsUrl = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}&language=en-US`;
    const movieCastUrl = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}&language=en-US`;

    const [{ currentMovie, isloading, error }] = useDetails(detailsUrl);
    const [{ currentVideo, videoLoading, videoError }] = useVideoDetails(videoDetailsUrl);
    const [{ movieCast, castLoading, castError }] = useMovieCast(movieCastUrl);

    const { backdrop_path, title, poster_path, number_of_episodes, name, seasons , overview, vote_average, popularity, episode_run_time, first_air_date, tagline } = currentMovie;

    return (
        <TvDetailsContainer >
            {error && <ErrorDisplay />}
            {isloading ? (<Spinner />) : (<Fragment>
                <div className="poster-image">
                    <img className="responsive-img"
                        src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
                        alt={title}
                    />
                </div>

                <div className="movie-details col s12 m6">
                    <div className="preview-image hide-on-small-only">
                        <img className="responsive-img"
                            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                            alt={title}
                        />
                    </div>

                    <div className="other-details">
                        <h2 className="movie-title center">{title ? title : name}</h2>
                        <h6 className="center transform">{tagline ? tagline : " "}</h6>

                        <h5 className="movie-summary">{overview}</h5>

                        <div className="runtime transform">
                            <div className="runtime-cover">
                                <span >Runtime</span>
                                <br />
                                <i className="medium material-icons">timelapse</i>
                                <div className="runtime-details">
                                    {episode_run_time} Minutes
                                </div>
                            </div>
                            <div className="runtime-cover">
                                <span >Popularity</span>
                                <br />
                                <i className="medium material-icons">favorite</i>
                                <div className="runtime-details">
                                    {popularity}
                                </div>
                            </div>
                            <div className="runtime-cover">
                                <span>First Air Date</span>
                                <br />
                                <i className="medium material-icons">date_range</i>
                                <div className="runtime-details">
                                    {first_air_date ? first_air_date : "N/A"}
                                </div>
                            </div>
                            <div className="runtime-cover">
                                <span>Seasons</span>
                                <br />
                                <i className="medium material-icons">all_inclusive</i>
                                <div className="runtime-details ">
                                    {seasons ? seasons.length : "N/A"}
                                </div>
                            </div>
                            <div className="runtime-cover">
                                <span>Total No of Episodes Aired</span>
                                <br />
                                <i className="medium material-icons">announcement</i>
                                <div className="runtime-details">
                                    {number_of_episodes ? number_of_episodes : "N/A "}
                                </div>
                            </div>
                            <div className="runtime-cover">
                                <span>Vote Average</span>
                                <br />
                                <i className="medium material-icons">fingerprint</i>
                                <div className="runtime-details">
                                    {vote_average ? vote_average : "N/A"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>)}

            <hr />

            {videoError && <ErrorDisplay />}
            {videoLoading ? (<Spinner />) :
                (<div className="trailer responsive-video">
                    <div className="col s12">
                        <h5 className="trailer-text center">TRAILER</h5>
                        {
                            currentVideo.slice(0, 1).map(video => (
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

            <hr />

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

        </TvDetailsContainer>
    )
}

export default TvDetails; 