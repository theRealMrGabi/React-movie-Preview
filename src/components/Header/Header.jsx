import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../services/useFetch';
import { apiKey } from '../config';
import Swiper from 'react-id-swiper';
import HeaderContainer from './HeaderStyles';
import { ButtonContainer } from '../Button/Button';
import Spinner from '../spinner/spinner';
import 'swiper/css/swiper.css'

const Header = () => {

    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
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

    return (
        <HeaderContainer className="col s12 m6">
            {isloading ? <Spinner /> : 
            <Swiper {...params}>
                {movies.slice(0, 15).map(movie => (
                    <div key={movie.id}>
                        <span>
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />

                            </div>
                            <Link to='/'>
                                <h5 className="navbar-brand">
                                    THEMOVIE<span className="preview">PREVIEW</span>
                                </h5>
                            </Link>
                            <div className="movie-title">
                                <h5 className="title">{movie.title}</h5>
                                <span className="category">
                                    Fantasy Animation Family | Duration: 2hrs 30m 5s
                                    </span>
                            </div>
                            <h6 className="carousel-caption">
                                <ButtonContainer color>
                                    Watch Trailer
                                    </ButtonContainer>

                                <ButtonContainer>
                                    View Info
                                    </ButtonContainer>
                            </h6>
                            <div className="rating">
                                <ButtonContainer>
                                    <b>Rating</b> based on {movie.vote_count} votes <br></br>
                                    <b>{movie.vote_average}</b>
                                </ButtonContainer>
                            </div>
                        </span>
                    </div>
                ))}
            </Swiper>
            }
        </HeaderContainer>
    )
}

export default Header;