import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../css/web.css'


class Navbar extends Component {
  render() {
    return (
      <div>

        <div className="induk">

          <div className="container-fluid">
            <div className="row">

              <header className="header col-lg-12 col-xm-12 fixed-top" id="site-header">
      

                <div className="header-middle">
                  <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-dark m-0 my-1 ">
                      <div className="container-fluid logobawah">
                        <a className="navbar-brand" href="/" >
                          <img src="gambar/logo3.PNG" alt="a" />
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto ">
                            
                            <li className="nav-item  nav-item ">
                              <a className="nav-link " href="asda" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About
                              </a>
                            </li>

                            <li className="nav-item  nav-item ">
                              <a className="nav-link " href="asda" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                              </a>
                            </li>

                            <li className="nav-item  nav-item ">
                              <a className="nav-link " href="asda" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Product
                              </a>
                            </li>

                            <li className="nav-item  nav-item ">
                              <a className="nav-link " href="asda" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Contact
                              </a>
                            </li>


                          </ul>

                        </div>
                      </div>
                    </nav>

                  </div>
                </div>



              </header>
            </div>
          </div>


        </div>

       
      </div>
    );
  }
}

export default Navbar;
