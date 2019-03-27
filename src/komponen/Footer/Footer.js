import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom'

import '../../css/web.css';




class Footer extends Component {
  render() {
    return (
      <div>
        
        

<div className="gridfooter">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    </div>
                </div>
            </div>
        </div>

        <div className="row foot1row">
            <div className="col-3 p-0  text-center isifoot1">
                    <i className="fas fa-tshirt fa-4x"></i>
                    
                    <p>Trusted Quality</p>   
            </div>

            <div className="col-3 p-0  text-center isifoot1">
                    <i className="fas fa-credit-card fa-4x"></i>
                    
                    <p>Payment Convenience</p>   
            </div>

            <div className="col-3 p-0  text-center isifoot1">
                    <i className="fas fa-lock fa-4x"></i>
                    
                    <p>Delivery Protection</p>   
            </div>

            <div className="col-3 p-0  text-center isifoot1">
                    <i className="fas fa-headset fa-4x"></i>
                    
                    <p>Customer Care</p>   
            </div>
            </div>   
        </div>     
        
    );
  }
}

export default Footer;
