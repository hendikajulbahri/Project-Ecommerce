import React, { Component } from 'react'

import '../../../css/web.css';
class BannerKategori extends Component {
  render() {
    return (
     <div>
        <div className="grid4" id="grid4id">
          <div className="container-fluid fullprint">
            <div className="row">
              <div className="col-12 text-center">

                <center>

                </center>
              </div>
            </div>

            <div className="row ">
              <div className="col-6 p-0  text-center">
                <a href="as">
                  <img src="gambar/c1.jpg" alt={'/'} className="kolomfullprint" />
                </a>
              </div>

              <div className="col-6 p-0  text-center">
                <a href="aaa">
                  <img src="gambar/c2.jpg" alt={'/'} className="kolomfullprint" />
                </a>
              </div>
            </div>
          </div>
        </div>
         </div>
    );
  }
}

export default BannerKategori;
