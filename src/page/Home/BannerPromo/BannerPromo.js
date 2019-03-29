import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom'
import '../../../css/web.css'


class BannerPromo extends Component {
  render() {
    return (
      <div>

           <section className="grid3 bannerpromo" id="grid3id">
          <div className="container-fluid diskon">
            <div className="row">
              <div className="col-12 text-center">

                <center>

                </center>
              </div>
            </div>

            <div className="row ">
              <div className="col-4 p-0  text-center">
                <a href='/'>
                  <img src="gambar/b1.jpg" alt="/" className="kolomdiskon" />
                </a>
                <h5 className="mt-2">Find Your Perfect Pair</h5>
                <p className="small">Save up to Rp 150.000</p>

              </div>

              <div className="col-4 p-0  text-center">
                <a href='/'>
                  <img src="gambar/b2.jpg" alt="/" className="kolomdiskon" />
                </a>
                <h5 className="mt-2">GO-PAY</h5>
                <p className="small">Shop Faster & Easier With Go-Pay </p>
              </div>

              <div className="col-4 p-0 text-center">
                <a href='/'>
                  <img src="gambar/b3.jpg" alt="..." className="kolomdiskon " />
                </a>
                <h5 className="mt-2">The Cozy Layer For This Season </h5>
                <p className="small">Diskon up to 50% off</p>
              </div>

            </div>
          </div>
        </section>

          </div>
    );
  }
}

export default BannerPromo;
