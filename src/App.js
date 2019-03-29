import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';

import NavbarLanding from './komponen/Navbar/Navbar_Landing';
import FooterLanding from './komponen/Footer/FooterLanding';
// import CaroselNews from './page/Home/CaroselNews/CaroselNews'
// import BannerPromo from './page/Home/BannerPromo/BannerPromo'
// import BannerKategori from './page/Home/BannerKategori/BannerKategori'
// import FeaturedProduct from './page/Home/FeaturedProduct/FeaturedProduct'
// import NewArrival from './page/Home/NewArrival/NewArrival'
// import WellbornNews from './page/Home/WellbornNews/WellbornNews'
// import Login from './page/Login/Login'
import Routes from './routes/Routes'
// import NewArrival from './page/Home/NewArrival/NewArrival'

// import MultipleItems from './page/MultipleItems'



class App extends Component {
  render() {
    return (
      <div className="App">
     

      <NavbarLanding/>
  <Routes/>
      <FooterLanding/>

      


      {/* <Navbar/>
      <CaroselNews/>
      <BannerPromo/>
      <BannerKategori/>
      <FeaturedProduct/>
      <NewArrival/>
      <WellbornNews/>
      
      <Footer/> */}
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

export default App;
