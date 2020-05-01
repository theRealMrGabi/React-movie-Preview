import React from 'react';
import {Route , Switch} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import 'materialize-css/dist/css/materialize.min.css';
import PopularMovie from './components/PopularMovies/PopularMovies';
import UpcomingMovies from './components/UpcomingMovies/UpcomingMovies';
import TrendingTv from './components/TV/TrendingTv/TrendingTv';
import PopularTv from './components/TV/PopularTv/PopularTv';
import TvDetails from './components/TV/TvDetails/TvDetails';

const App = () => {

  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/popular' component={PopularMovie} />
        <Route path='/upcoming' component={UpcomingMovies} />
        <Route path='/trendingtv' component={TrendingTv} />
        <Route path='/populartv' component={PopularTv} />
        <Route path='/details/:movie_id' component={Details} />
        <Route path='/tvdetails/:movie_id' component={TvDetails} />
      </Switch>
      <Footer />
    </React.Fragment>
  )
}

export default App ;