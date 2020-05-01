import React , {useEffect , useState} from 'react';
import {Link} from 'react-router-dom';
import NavWrapper from './Navbar.styles';
import M from 'materialize-css';
// import useFetch from '../services/useFetch';
import { apiKey } from '../config';

const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState(' ');
    const [url, setUrl] = useState(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=avengers&page=1&include_adult=true`)
    // const [{ movies, isloading, error }] = useFetch(url); 

    const handleChange = e => {
        setSearchQuery(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setUrl(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=true`);
        setSearchQuery('')
    }

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);
        });
    }, []);

    return (
        <NavWrapper>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">
                        THEMOVIE<span className="preview">PREVIEW</span>
                    </Link>
                    <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link to='/popular'><i className="material-icons left">filter_vintage</i>Popular</Link>
                        </li>
                        <li>
                            <Link to='/upcoming'><i className="material-icons left">trending_up</i>Upcoming</Link>
                        </li>
                        <li>
                            <Link to='/populartv'><i className="material-icons left">tv</i>PopularTv</Link>
                        </li>
                        <li>
                            <Link to='/trendingtv'><i className="material-icons left">live_tv</i>TrendingTv</Link>
                        </li>
                    </ul>

                    <form className="right hide-on-small-only" onSubmit={handleSubmit}>
                        <div className="input-field">
                            <input 
                                type="search" 
                                value={searchQuery}
                                onChange={handleChange}
                                placeholder="search for movies"
                            />

                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>

                </div>
            </nav>

            {/* <form className="right" onSubmit={handleSubmit}>
                <div className="input-field">
                    <input
                        type="search"
                        value={searchQuery}
                        onChange={handleChange}
                        placeholder="search for movies"
                    />

                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                </div>
            </form> */}

            {/* Mobile Navigation */}
            <ul className="sidenav" id="mobile-demo">
                <li>
                    <Link to='/popular' className="text-link"><i className="material-icons white-text">filter_vintage</i>
                        Popular Movies
                    </Link>
                </li>
                <li>
                    <Link to='/upcoming' className="text-link"><i className="material-icons white-text">trending_up</i>Upcoming Movies</Link>
                </li>
                <li>
                    <Link to='/populartv' className="text-link"><i className="material-icons white-text">tv</i>PopularTv</Link>
                </li>
                <li>
                    <Link to='/trendingtv' className="text-link"><i className="material-icons white-text">live_tv</i>TrendingTv</Link>
                </li>

                <div className="close-menu sidenav-close"><i className="material-icons">close</i></div>
            </ul>

        </NavWrapper>
    )
}

export default Navbar ;