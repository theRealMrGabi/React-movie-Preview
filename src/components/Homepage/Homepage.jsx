import React from 'react';
import Header from '../Header/Header';
import TabbedContent from '../Tabbed-Content/Tabbed-Content';
import TopRatedMovie from '../TopRatedMovies/TopRatedMovies';

const Homepage = () => {
    return (
        <React.Fragment>
            <Header />
            <TabbedContent />
            <TopRatedMovie />
        </React.Fragment>
    )
}

export default Homepage ;