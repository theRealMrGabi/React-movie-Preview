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
        // var instance = M.Tabs.init(el, {
        M.Tabs.init(el, {
            swipeable: true
        });
    }, [])

    return (
        <TabbedContainer>
            <div className="row">
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s3"><a href="#popular">
                            <h5><i className="material-icons">filter_vintage</i> Popular</h5>
                        </a></li>
                        <li className="tab col s3"><a href="#featured">
                            <h5><i className="material-icons">whatshot</i> Featured</h5>
                        </a></li>
                        <li className="tab col s3"><a href="#trending">
                            <h5><i className="material-icons">flash_on</i> Trending</h5>
                        </a></li>
                        <li className="tab col s3"><a href="#upcoming">
                            <h5><i className="material-icons">file_upload</i> Upcoming</h5>
                        </a></li>
                    </ul>
                </div>

                <div className="custom-container">
                    <div id="popular" className="col s12 custom">
                        <PopularMovie />
                    </div>
                    <div id="featured" className="col s12 custom">
                        <FeaturedMovie />
                    </div>
                    <div id="trending" className="col s12 custom">
                        <TrendingMovies />
                    </div>
                    <div id="upcoming" className="col s12 custom">
                        <UpcomingMovies />
                    </div> 
                </div>
            </div>
        </TabbedContainer>
    )
}

export default TabbedContent ;