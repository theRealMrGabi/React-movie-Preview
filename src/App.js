import React , {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header/Header';
// import FeaturedMovie from './components/FeaturedMovies/FeaturedMovie';
// import SearchMovie from './components/SearchMovies/SearchMovie';
// import Footer from './components/Footer/Footer';
// import M from 'materialize-css';
import TabbedContent from './components/Tabbed-Content/Tabbed-Content';
import TopRatedMovie from './components/TopRatedMovies/TopRatedMovies';

const App = () => {

  // useEffect(() => {
  //   M.AutoInit();
  // }, [])

  return (
    <div>
      <Header />
      <TabbedContent />
      {/* <SearchMovie /> */}
      {/* <FeaturedMovie /> */}
      <TopRatedMovie />
      {/* <Footer /> */}
    </div>
  )
}

export default App
