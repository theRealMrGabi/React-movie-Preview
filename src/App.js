import React from 'react';
import {Route , Switch} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
// import Navbar from './components/Navbar/Navbar';
import 'materialize-css/dist/css/materialize.min.css';

const App = () => {

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/details/:movie_id' component={Details} />
      </Switch>
      <Footer />
    </React.Fragment>
  )
}

export default App ;