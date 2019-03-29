import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom'
import '../../../css/web.css';








class FeaturedProduct extends Component {
  render() {
    return (
      <div>

 <div className="grid5" id="grid5id">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 pt-5">
                        <h2 className="text-center">
                            <span>Featured Products</span>
                        </h2>
                        <hr/>
                        <div className="regular slider slidebawah featured">
                            <div className="card cardcatalog"  style={{width:'300px'}}>
                            <img className='card-img-top' src='gambar/z1.jpg' alt={"/"}/>
                                {/* <img class="card-img-top" src="gambar/z1.jpg" alt='/'/> */}
                                <div className="card-body">

                                    <p className="card-text text-center">Voorhes printed T-shirt</p>
                                    <p className="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button className="btn btn-warning ">
                                            <i className="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>
                                </div>
                            </div>

                            <div className="card cardcatalog" style={{width:'300px'}}>
                                <img className="card-img-top" src="gambar/z2.jpg" alt={"/"}/>
                                <div className="card-body">
                                    <p className="card-text text-center">Voorhes printed T-shirt</p>
                                    <p className="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button className="btn btn-warning ">
                                            <i className="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>
                                </div>
                            </div>

                            <div className="card cardcatalog"  style={{width:'300px'}}>
                                <img className="card-img-top" src="gambar/z3.jpg" alt={"/"}/>
                                <div className="card-body">
                                    <p className="card-text text-center">Voorhes printed T-shirt</p>
                                    <p className="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button className="btn btn-warning ">
                                            <i className="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>
                                </div>
                            </div>

                            <div className="card cardcatalog"  style={{width:'300px'}}>
                                <img className="card-img-top" src="gambar/z4.jpg" alt={"/"}/>
                                <div className="card-body">
                                    <p className="card-text text-center">Voorhes printed T-shirt</p>
                                    <p className="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button className="btn btn-warning ">
                                            <i className="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>
                                </div>
                            </div>

                            <div className="card cardcatalog"  style={{width:'300px'}}>
                                <img className="card-img-top" src="gambar/z5.jpg" alt={"/"}/>
                                <div className="card-body">
                                    <p className="card-text text-center">Voorhes printed T-shirt</p>
                                    <p className="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button className="btn btn-warning ">
                                            <i className="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>

                                </div>
                            </div>

                            <div className="card cardcatalog"  style={{width:'300px'}}>
                                <img className="card-img-top" src="gambar/z6.jpg" alt={"/"}/>
                                <div className="card-body">
                                    <p className="card-text text-center">Voorhes printed T-shirt</p>
                                    <p className="card-text text-center  harga">Rp.150.000</p>
                                    <center>
                                        <button className="btn btn-warning ">
                                            <i className="fas fa-cart-arrow-down logo"></i>
                                        </button>
                                    </center>

                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>

          </div>
    );
  }
}

export default FeaturedProduct;
