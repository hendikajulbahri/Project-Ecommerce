import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import logo from './logo.svg';
// import './App.css';
import './css/web.css';
import Homepage from './Homepage'
import Carosel from './komponen/Carosel'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage/>
        
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
