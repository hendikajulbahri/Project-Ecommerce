import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Homepage extends Component {
  render() {
    return (
      <div className="induk">

        <div className="container-fluid">
          <div class="row">

            <header class="header col-lg-12 col-xm-12 fixed-top" id="site-header">
              <div class="header-newsletter">
                <button class="header-newsletter-button ml-auto" onclick="">Subscribe and Get diskon 10%
                        <i class="fas fa-times ml-auto logosilang"></i>
                </button>
              </div>

              <div class="header-top col-lg-12 col-xm-12">
                <ul>
                  <li>
                    <a href="https://www.wellborncompany.com/" class="shopping-guide">Shopping guide</a>
                  </li>
                  <li class="user-menu">
                    <a href="https://www.wellborncompany.com/">Login / Sign Up</a>
                  </li>

                </ul>
              </div>




              <div class="header-middle">
                <div class="container-fluid">
                  <nav class="navbar navbar-expand-lg navbar-dark m-0 my-1 ">
                    <div class="container-fluid logobawah">
                      <a class="navbar-brand" href="#">
                        <img src="gambar/logo3.PNG" />
                      </a>

                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>

                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto ">
                          <li class="nav-item dropdown nav-item active">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="false">
                              Men
                                            </a>
                            <div class="dropdown-menu drop" aria-labelledby="navbarDropdown">
                              <div class="row">
                                <div class="col-lg-4">
                                  <h6 class="dropdown-header">NEW ARRIVALS</h6>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                </div>

                                <div class="col-lg-4">
                                  <h6 class="dropdown-header">CLOTHING</h6>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                </div>

                                <div class="col-lg-4">
                                  <h6 class="dropdown-header">ACESSORIS</h6>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                </div>


                              </div>

                            </div>
                          </li>

                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="false">
                              Women
                                            </a>
                            <div class="dropdown-menu drop" aria-labelledby="navbarDropdown">
                              <div class="row">
                                <div class="col-lg-4">
                                  <h6 class="dropdown-header">NEW ARRIVALS</h6>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                </div>

                                <div class="col-lg-4">
                                  <h6 class="dropdown-header">CLOTHING</h6>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                </div>

                                <div class="col-lg-4">
                                  <h6 class="dropdown-header">ACESSORIS</h6>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                </div>


                              </div>
                            </div>
                          </li>




                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="false">
                              Sale
                                            </a>
                            <div class="dropdown-menu drop" aria-labelledby="navbarDropdown">
                              <div class="row">
                                <div class="col-lg-4">
                                  <h6 class="dropdown-header">NEW ARRIVALS</h6>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                </div>

                                <div class="col-lg-4">
                                  <h6 class="dropdown-header">CLOTHING</h6>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                </div>

                                <div class="col-lg-4">
                                  <h6 class="dropdown-header">ACESSORIS</h6>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                </div>






                              </div>
                            </div>
                          </li>

                          <li class="nav-item  nav-item ">
                            <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

        {/* Carosel */}

        <section class="tampilankedua" id="tampilankeduaid">
          <div class="container-fluid ">
            <div class="row">
              <div class="col-12 px-0 ">
                <div id="demo" class="carousel slide " data-ride="carousel">


                  {/* <!-- The slideshow --> */}
                  <div class="carousel-inner gambar ">
                    <div class="carousel-item active">
                      <img src="gambar/a2.jpg" alt="Los Angeles" />
                    </div>
                    <div class="carousel-item">
                      <img src="gambar/a1.jpg" alt="Chicago" />
                    </div>

                  </div>

                  {/* <!-- Left and right controls --> */}
                  <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                  </a>
                  <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </section>





        {/* Batas Carosel */}

        {/* Grid 3*/}

        <section class="grid3" id="grid3id">
          <div class="container-fluid diskon">
            <div class="row">
              <div class="col-12 text-center">

                <center>

                </center>
              </div>
            </div>

            <div class="row ">
              <div class="col-4 p-0  text-center">
                <a href="diks.jpg">
                  <img src="gambar/b1.jpg" alt="..." class="kolomdiskon" />
                </a>
                <h5 class="mt-2">Find Your Perfect Pair</h5>
                <p class="small">Save up to Rp 150.000</p>

              </div>

              <div class="col-4 p-0  text-center">
                <a href="">
                  <img src="gambar/b2.jpg" alt="..." class="kolomdiskon" />
                </a>
                <h5 class="mt-2">GO-PAY</h5>
                <p class="small">Shop Faster & Easier With Go-Pay </p>
              </div>

              <div class="col-4 p-0 text-center">
                <a href="diks.jpg">
                  <img src="gambar/b3.jpg" alt="..." class="kolomdiskon " />
                </a>
                <h5 class="mt-2">The Cozy Layer For This Season </h5>
                <p class="small">Diskon up to 50% off</p>
              </div>

            </div>
          </div>
        </section>



        {/* Batas Grid 3 */}




        {/* Grid 4 */}

        <div class="grid4" id="grid4id">
          <div class="container-fluid fullprint">
            <div class="row">
              <div class="col-12 text-center">

                <center>

                </center>
              </div>
            </div>

            <div class="row ">
              <div class="col-6 p-0  text-center">
                <a href="diks.jpg">
                  <img src="gambar/c1.jpg" alt="..." class="kolomfullprint" />
                </a>


              </div>

              <div class="col-6 p-0  text-center">
                <a href="">
                  <img src="gambar/c2.jpg" alt="..." class="kolomfullprint" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Batas Grid 4 */}


        {/* featured prodeuct*/}

 <div class="grid5" id="grid5id">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 pt-5">
                        <h2 class="text-center">
                            <span>Featured Products</span>
                        </h2>
                        <hr/>
                        <div class="regular slider slidebawah featured">
                            <div class="card cardcatalog"  style={{width:'300px'}}>
                                <img class="card-img-top" src="gambar/z1.jpg" alt="Card image cap"/>
                                <div class="card-body">

                                    <p class="card-text text-center">Voorhes printed T-shirt</p>
                                    <p class="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button class="btn btn-warning ">
                                            <i class="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>
                                </div>
                            </div>

                            <div class="card cardcatalog" style={{width:'300px'}}>
                                <img class="card-img-top" src="gambar/z2.jpg" alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text text-center">Voorhes printed T-shirt</p>
                                    <p class="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button class="btn btn-warning ">
                                            <i class="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>
                                </div>
                            </div>

                            <div class="card cardcatalog"  style={{width:'300px'}}>
                                <img class="card-img-top" src="gambar/z3.jpg" alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text text-center">Voorhes printed T-shirt</p>
                                    <p class="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button class="btn btn-warning ">
                                            <i class="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>
                                </div>
                            </div>

                            <div class="card cardcatalog"  style={{width:'300px'}}>
                                <img class="card-img-top" src="gambar/z4.jpg" alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text text-center">Voorhes printed T-shirt</p>
                                    <p class="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button class="btn btn-warning ">
                                            <i class="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>
                                </div>
                            </div>

                            <div class="card cardcatalog"  style={{width:'300px'}}>
                                <img class="card-img-top" src="gambar/z5.jpg" alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text text-center">Voorhes printed T-shirt</p>
                                    <p class="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button class="btn btn-warning ">
                                            <i class="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>

                                </div>
                            </div>

                            <div class="card cardcatalog"  style={{width:'300px'}}>
                                <img class="card-img-top" src="gambar/z6.jpg" alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text text-center">Voorhes printed T-shirt</p>
                                    <p class="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button class="btn btn-warning ">
                                            <i class="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>

                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    

        {/*  Batas featured prodeuct*/}


        {/* New Arival */}

<div class="grid6" id="grid6id">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 pt-5">
                        <h2 class="text-center">
                            <span>New Arrivals</span>
                        </h2>
                        <hr/>
                        <div class="regular slider slidebawah featured">
                            <div class="card cardcatalog"  style={{width:'300px'}}>
                                <img class="card-img-top" src="gambar/na1.png" alt="Card image cap"/>
                                <div class="card-body">

                                    <p class="card-text text-center">Voorhes printed T-shirt</p>
                                    <p class="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button class="btn btn-warning ">
                                            <i class="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>
                                </div>
                            </div>

                            <div class="card cardcatalog" style={{width:'300px'}}>
                                <img class="card-img-top" src="gambar/na2.jpg" alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text text-center">Voorhes printed T-shirt</p>
                                    <p class="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button class="btn btn-warning ">
                                            <i class="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>
                                </div>
                            </div>

                            <div class="card cardcatalog"  style={{width:'300px'}}>
                                <img class="card-img-top" src="gambar/na3.jpg" alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text text-center">Voorhes printed T-shirt</p>
                                    <p class="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button class="btn btn-warning ">
                                            <i class="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>
                                </div>
                            </div>

                            <div class="card cardcatalog"  style={{width:'300px'}}>
                                <img class="card-img-top" src="gambar/na4.jpg" alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text text-center">Voorhes printed T-shirt</p>
                                    <p class="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button class="btn btn-warning ">
                                            <i class="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>
                                </div>
                            </div>

                            <div class="card cardcatalog"  style={{width:'300px'}}>
                                <img class="card-img-top" src="gambar/na5.jpg" alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text text-center">Voorhes printed T-shirt</p>
                                    <p class="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button class="btn btn-warning ">
                                            <i class="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>

                                </div>
                            </div>

                            <div class="card cardcatalog"  style={{width:'300px'}}>
                                <img class="card-img-top" src="gambar/na6.jpg" alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text text-center">Voorhes printed T-shirt</p>
                                    <p class="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button class="btn btn-warning ">
                                            <i class="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>

                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>



        {/* Batas New Arival */}




        {/* News */}


         <div class="grid7" id="grid7id">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 pt-5">
                        <h2 class="text-center">
                            <span>Wellborn News</span>
                        </h2>
                        <hr/>

                        <div class="regular slider newariv ">
                            <div class="card katalognews"  style={{width:"500px"}}>

                                <a href="#">
                                    <img class="card-img-top" src="gambar/news1.jpg" alt="Card image cap"/>
                                </a>
                                <div class="card-body">
                                    <h5 class="card-title">Wellborn News</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>

                                </div>
                            </div>


                            <div class="card" style={{width:"500px"}}>
                                <a href="#">
                                    <img class="card-img-top" src="gambar/news2.jpg" alt="Card image cap"/>
                                </a>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>

                                </div>
                            </div>

                            <div class="card" style={{width:"500px"}}>
                                <a href="#">
                                    <img class="card-img-top" src="gambar/news3.jpg" alt="Card image cap"/>
                                </a>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>

                                </div>
                            </div>

                            <div class="card" style={{width:"500px"}}>
                                <a href="#">
                                    <img class="card-img-top" src="gambar/news4.jpg" alt="Card image cap"/>
                                </a>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>

                                </div>
                            </div>

                            <div class="card" style={{width:"500px"}}>
                                <a href="#">
                                    <img class="card-img-top" src="gambar/news5.jpg" alt="Card image cap"/>
                                </a>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>

                                </div>
                            </div>

                            <div class="card" style={{width:"500px"}}>
                                <a href="#">
                                    <img class="card-img-top" src="gambar/news6.jpg" alt="Card image cap"/>
                                </a>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>



                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>


        
        {/* Batas News */}



<div class="gridfooter">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                    </div>
                </div>
            </div>
        </div>

        <div class="row foot1row">
            <div class="col-3 p-0  text-center isifoot1">
                    <i class="fas fa-tshirt fa-4x"></i>
                    
                    <p>Trusted Quality</p>   
            </div>

            <div class="col-3 p-0  text-center isifoot1">
                    <i class="fas fa-credit-card fa-4x"></i>
                    
                    <p>Payment Convenience</p>   
            </div>

            <div class="col-3 p-0  text-center isifoot1">
                    <i class="fas fa-lock fa-4x"></i>
                    
                    <p>Delivery Protection</p>   
            </div>

            <div class="col-3 p-0  text-center isifoot1">
                    <i class="fas fa-headset fa-4x"></i>
                    
                    <p>Customer Care</p>   
            </div>
            </div>







        {/* Batas Induk */}
      </div>





    );
  }
}

export default Homepage;