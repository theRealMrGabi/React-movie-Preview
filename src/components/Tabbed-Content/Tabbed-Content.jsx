import React , {useEffect} from 'react';

import TrendingMovies from '../TrendingMovies/TrendingMovies';
import PopularMovie from '../PopularMovies/PopularMovies';
import UpcomingMovies from '../UpcomingMovies/UpcomingMovies';
import FeaturedMovie from '../FeaturedMovies/FeaturedMovie';

import TabbedContainer from './Tabbed-Content.styles';
import M from 'materialize-css';

const TabbedContent = () => {

    useEffect(() => {
        var el = document.querySelector('.tabs')
        var instance = M.Tabs.init(el, {
            swipeable: true
        });
    }, [])

    return (
        <TabbedContainer>
            <div className="row">
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s3"><a href="#featured">Featured</a></li>
                        <li className="tab col s3"><a href="#trending">Trending</a></li>
                        <li className="tab col s3"><a href="#popular">Popular</a></li>
                        <li className="tab col s3"><a href="#upcoming">Upcoming</a></li>
                    </ul>
                </div>

                <div id="featured" className="col s12">
                    <FeaturedMovie />
                </div>
                <div id="trending" className="col s12">
                    <TrendingMovies />
                </div>
                <div id="popular" className="col s12">
                    <PopularMovie />
                </div>
                <div id="upcoming" className="col s12">
                    <UpcomingMovies />
                </div> 
            </div>
        </TabbedContainer>
    )
}

export default TabbedContent
