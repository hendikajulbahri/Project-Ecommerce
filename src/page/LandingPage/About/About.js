import React, { Component } from 'react'

import '../../../css/web.css';
class BannerKategori extends Component {
    
  render() {
     

    return (
     <div>
       <br/><br/>
        <div className="grid4" id="about">
          <div className="container-fluid fullprint">
            <div className="row">
              <div className="col-12 text-center">
              <h2 className="text-center"><br/>
                            <span>ABOUT</span><span className="span-orange"> US</span>
                        </h2>
                        <hr/>
                <center>

                </center>
              </div>
            </div>

            <div className="row ">
              <div className="col-6 col-xs-12 p-0  text-center">
                <a href="as">
                  <img height="370px"  src="gambar/landing-page/slide-1.jpg" alt={'/'} className="kolomfullprint" />
                </a>
              </div>

              <div className="col-6 col-xs-12 p-4  text-left">
               
                <p>JOKINGODING's initial establishment began with the establishment of Jockey Services making applications for student friends. Over time in April 2019 we agreed to be even more serious in offering software manufacturing services and merchandise sales.</p>
                  <br/>
                  <p>JOKINGODING has now provided many solutions for several of our clients, increasing effectiveness, efficiency and solving common problems that occur with our clients. Our team also began to seriously develop the merchandise sales business with the theme of the programmer</p>
              </div>
            </div>
          </div>
        </div>
         </div>
    );
  }
}

export default BannerKategori;
