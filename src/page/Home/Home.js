import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom'

import BannerKategori from './BannerKategori/BannerKategori'
import BannerPromo from './BannerPromo/BannerPromo'
import Caroselnews from './CaroselNews/CaroselNews'
import FeaturedProduct from './FeaturedProduct/FeaturedProduct'
import NewArrival from './NewArrival/NewArrival'
import WellbornNews from './WellbornNews/WellbornNews'








class Home extends Component {
  render() {
    return (
      <div className="App">
    <Caroselnews/>
    <BannerPromo/>
    <BannerKategori/>
    <FeaturedProduct/>
    {/* <NewArrival/> */}
    <WellbornNews/>

        <div>
        
        </div>     
        
        {/* <Link to="/header"><button>Klik</button></Link>
        <div>
          <Route path="/" component={Home}/>
          <Route path="/header" component={Header}/>
        </div> */}
      </div>
    );
  }
}

export default Home;
