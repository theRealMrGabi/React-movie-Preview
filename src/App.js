import React from 'react';
import {Route , Switch} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
// import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
// import Spinner from './components/spinner/spinner';

const App = () => {

    //top rated movies https://api.themoviedb.org/3/movie/top_rated?api_key=d04a5b8f43cfae3458709d8a5cc36fe7&language=en-US&page=1

  return (
    <React.Fragment>
        {/* <Spinner className="spinner" /> */}
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/details/:id' component={Details} />
      </Switch>
      <Footer />
    </React.Fragment>
  )
}

export default App ;