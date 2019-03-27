import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from '../page/Home/Home'
import Login from '../page/Login/Login'
import BarangNewArrival from '../page/Shopping/BarangNewArrival/BarangNewArrival'
import BarangNewArrivalTShirt from '../page/Shopping/BarangNewArrivalT-Shirt/BarangNewArrivalT-Shirt'
// import MultipleItems from '../page/MultipleItems'








class Routes extends Component {
  render() {
    return (
      <div className="App">
       <Route exact path='/' component={Home} />
       <Route exact path='/login' component={Login} />
       <Route exact path='/barangnewarrival' component={BarangNewArrival}/>
       <Route exact path='/barangnewarrivaltshirt' component={BarangNewArrivalTShirt}/>
       
       </div>
    );
  }
}

export default Routes;
