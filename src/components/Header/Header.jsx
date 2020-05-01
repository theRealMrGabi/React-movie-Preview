import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../services/useFetch';
import { apiKey } from '../config';
import Swiper from 'react-id-swiper';
import HeaderContainer from './HeaderStyles';
import { ButtonContainer } from '../Button/Button';
import Spinner from '../spinner/spinner';
import ErrorDisplay from '../Error/Error';
import 'swiper/css/swiper.css';

const Header = () => {

    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    const [{ movies, isloading, error }] = useFetch(url);

    const params = {
        spaceBetween: 30,
        centeredSlides: true,
        rebuildOnUpdate: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    };

    const handleClick = (id) => {
        window.location.href = `details/${id}`;
    }

    return (
        <HeaderContainer>
            <div className="row">
                {error && <ErrorDisplay />}
                {isloading ? (<Spinner />) : (<Swiper {...params}>
                    {movies.slice(0, 15).map(movie => (
                        <div key={movie.id}>
                            <span>
                                <Link to={'/details/' + movie.id} onClick={() => handleClick(movie.id)}>
                                    <img
                                        className="responsive-img"
                                        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                                        alt={movie.title}
                                    />
                                </Link>

                                <div className="movie-title">
                                    <h4 className="title">{movie.title}</h4>
                                    {/* <span className="category">
                                        Fantasy Animation Family | Duration: 2hrs 30m 5s
                                    </span> */}
                                </div>
                                <h6 className="carousel-caption hide-on-small-only">

                                    <ButtonContainer btncolor>
                                        Watch Trailer
                                    </ButtonContainer>

                                    <ButtonContainer onClick={() => handleClick(movie.id)} >
                                        View Info
                                    </ButtonContainer>
                                </h6>
                                <div className="rating hide-on-small-only">
                                    <ButtonContainer>
                                        <b>Rating</b> based on {movie.vote_count} votes <br></br>
                                        <b>{movie.vote_average}</b>
                                    </ButtonContainer>
                                </div>
                            </span>
                        </div>
                    ))}
                </Swiper>)}
            </div>
        </HeaderContainer>
    )
}

export default Header ;