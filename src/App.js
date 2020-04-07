import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header/Header';
import FeaturedMovie from './components/FeaturedMovies/FeaturedMovie';
import SearchMovie from './components/SearchMovies/SearchMovie';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <SearchMovie />
      <FeaturedMovie />
      <Footer />
    </div>
  )
}

export default App
