import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';

import Navbar from './komponen/Navbar/Navbar';
import Footer from './komponen/Footer/Footer';
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
     

      <Navbar/>
  <Routes/>
      <Footer/>

      


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
