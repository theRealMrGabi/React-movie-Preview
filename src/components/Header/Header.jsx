import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import useFetch from '../services/useFetch';
import { apiKey } from '../config';
import HeaderContainer from './HeaderStyles';
import M from 'materialize-css';
import computer from './computer.jpg';
import iphone from './iphone_held.jpg';
import macbook from './closed_macbook.jpg'


const Header = () => {

    //trending tv shows// https://api.themoviedb.org/3/trending/tv/week?api_key=d04a5b8f43cfae3458709d8a5cc36fe7
    //upcoming movies https://api.themoviedb.org/3/movie/upcoming?api_key=d04a5b8f43cfae3458709d8a5cc36fe7&language=en-US&page=1
    //popular movies https://api.themoviedb.org/3/movie/popular?api_key=d04a5b8f43cfae3458709d8a5cc36fe7&language=en-US&page=1
    //top rated movies https://api.themoviedb.org/3/movie/top_rated?api_key=d04a5b8f43cfae3458709d8a5cc36fe7&language=en-US&page=1

    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`

    const [{ movies, isloading, error }] = useFetch(url); 

    //large pics {movie.backdrop_path}
    //snippet {overview}
    useEffect(() => {
        const elem = document.querySelector('.slider');
        M.Slider.init(elem, {
            indicators: true,
            height: 600,
            transition: 500,
            interval: 6000
        })
    }, [])
    
    return (
        <HeaderContainer>
            {/* <h1>theMoviepreview</h1> */}

            {/* <div className="slider">
                <ul className="slides">
                    <li>
                        <img src={computer} alt=""/>
                        <div className="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li><li>
                        <img src={macbook} alt=""/>
                        <div className="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li><li>
                        <img src={iphone} alt=""/>
                        <div className="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                </ul>
            </div> */}

                <div className="slider">
                    <ul className="slides" >
                    {movies.slice(0, 5).map(movie => (
                        <li key={movie.id}>
                            <Link to='/'>
                                <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title}
                                    // style={{ height: "80vh", width:"100%" }}
                                 />
                            </Link>
                            <div className="caption center-align">
                                <h3 className='teal-text text-accent-4'>
                                    <p>Rating {movie.vote_average}</p>
                                </h3>
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>
        </HeaderContainer>
    )
}

export default Header
