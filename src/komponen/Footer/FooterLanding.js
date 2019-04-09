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
           


            { <div className="col-12 p-0  text-center isifoot1">
                   
                    <h4>JOKI NGODING</h4>
                    <i className="fa fa-map-marker"></i>&nbsp;<p>Bekasi , Jawa Barat - Indonesia</p><br/>
                    <i className="fa fa-phone"></i>&nbsp;<p>021-88325028 / +628-987843361</p> <br/>
                    <i className="fa fa-envelope-o"></i>&nbsp;<p>jokingoding@gmail.com</p>
                    <br/><br/>
                    <ul class="list-inline social-buttons">
                      <li class="list-inline-item">
                        <a href="https://twitter.com/abayyid">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="https://www.facebook.com/harby.anwardi">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="https://www.instagram.com/jokingoding/">
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
    
                    <p class="copyright">Copyright &copy; Joki Ngoding 2018</p>
                   
            </div> }
            </div>   
        </div>     
        
    );
  }
}

export default Footer;
