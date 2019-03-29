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
                <div className="header-newsletter">
                  <button className="header-newsletter-button ml-auto" >Subscribe and Get diskon 10%
                <i className="fas fa-times ml-auto logosilang"></i>
                  </button>
                </div>

                <div className="header-top col-lg-12 col-xm-12">
                  <ul>

                    <li><Link to="/login" className="shopping-guide">Shopping guide</Link></li>

                    <li><Link to="/login" className="shopping-guide">Login | Sign Up</Link></li>
                   

                  </ul>
                </div>




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
                            <li className="nav-item dropdown nav-item active">
                              <a className="nav-link dropdown-toggle" href="asdas" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Men</a>
                              <div className="dropdown-menu drop" aria-labelledby="navbarDropdown">
                                <div className="row">
                                  <div className="col-lg-4">
                                    <h6 className="dropdown-header">NEW ARRIVALS</h6>
                                    <div className="dropdown-divider"></div>

                                    {/* <Link to='/barangnewarrival'>New Arrival</Link> */}
                                    <Link to='/barangnewarrival' className="dropdown-item" >New Arrival</Link> 
                                    <Link to='/barangnewarrivaltshirt' className="dropdown-item" >New In T-Shirt</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >New In Jacket</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >New In Pants</Link>
                                    <Link to='/barangnewarrival' className="dropdown-item" >New In Bags</Link>  
                                    {/* <a className="dropdown-item" href="asdas">Another action</a> */}
                                  </div>

                                  <div className="col-lg-4">
                                    <h6 className="dropdown-header">CLOTHING</h6>
                                    <div className="dropdown-divider"></div>
                                    <Link to='/barangnewarrival' className="dropdown-item" >T-Shirt</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Shirt</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Jacket</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Pants</Link> 

                                  </div>

                                  <div className="col-lg-4">
                                    <h6 className="dropdown-header">ACESSORIS</h6>
                                    <div className="dropdown-divider"></div>
                                    <Link to='/barangnewarrival' className="dropdown-item" >Bags</Link>
                                    <Link to='/barangnewarrival' className="dropdown-item" >Wallets</Link>
                                    <Link to='/barangnewarrival' className="dropdown-item" >Jewelry</Link>   
                                    <Link to='/barangnewarrival' className="dropdown-item" >Pins</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Hats</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Beanie</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Bandana</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Belt</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Keychain</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Socks</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Sandals</Link> 
                                  </div>


                                </div>

                              </div>
                            </li>

                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="asdads" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Women
                                    </a>
                              <div className="dropdown-menu drop" aria-labelledby="navbarDropdown">
                                <div className="row">
                                  <div className="col-lg-4">
                                    <h6 className="dropdown-header">NEW ARRIVALS</h6>
                                    <div className="dropdown-divider"></div>
                                    <Link to='/barangnewarrival' className="dropdown-item" >New Arrival</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >New In T-Shirt</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >New In Jacket</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >New In Pants</Link>
                                    <Link to='/barangnewarrival' className="dropdown-item" >New In Bags</Link> 
                                  </div>

                                  <div className="col-lg-4">
                                    <h6 className="dropdown-header">CLOTHING</h6>
                                    <div className="dropdown-divider"></div>
                                    <Link to='/barangnewarrival' className="dropdown-item" >T-Shirt</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Shirt</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Jacket</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Pants</Link> 

                                  </div>

                                  <div className="col-lg-4">
                                    <h6 className="dropdown-header">ACESSORIS</h6>
                                    <div className="dropdown-divider"></div>
                                    <Link to='/barangnewarrival' className="dropdown-item" >Bags</Link>
                                    <Link to='/barangnewarrival' className="dropdown-item" >Wallets</Link>
                                    <Link to='/barangnewarrival' className="dropdown-item" >Jewelry</Link>   
                                    <Link to='/barangnewarrival' className="dropdown-item" >Pins</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Hats</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Beanie</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Bandana</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Belt</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Keychain</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Socks</Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >Sandals</Link> 
                                  </div>


                                </div>
                              </div>
                            </li>




                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="asdasd" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Sale
                                    </a>
                              <div className="dropdown-menu drop" aria-labelledby="navbarDropdown">
                                <div className="row">
                                  <div className="col-lg-4">
                                    <h6 className="dropdown-header">Men</h6>
                                    <div className="dropdown-divider"></div>
                                    <Link to='/barangnewarrival' className="dropdown-item" >UP TO 70% </Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >BY 1 GET 1 T-SHIRT</Link>
                                  </div>

                                  <div className="col-lg-4">
                                    <h6 className="dropdown-header">Women</h6>
                                    <div className="dropdown-divider"></div>
                                    <Link to='/barangnewarrival' className="dropdown-item" >UP TO 70% </Link> 
                                    <Link to='/barangnewarrival' className="dropdown-item" >BY 1 GET 1 T-SHIRT</Link>
                                  </div>

                                
                                </div>
                              </div>
                            </li>

                            <li className="nav-item  nav-item ">
                              <a className="nav-link " href="asda" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Wellborn News
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
