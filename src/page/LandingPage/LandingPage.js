import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom'

import About from './About/About'

import CaroselLanding from './CaroselLanding/CaroselNews'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import Portfolio from './Portfolio/Portfolio'
import News from './News/News'
import Services from './Services/Services'








class Home extends Component {
  render() {
    return (
      <div className="App">
    <CaroselLanding/>
    
    <About/>
    <WhyChooseUs/>
    {/* <NewArrival/> */}
    <Portfolio/>
    
      <Services/>
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
