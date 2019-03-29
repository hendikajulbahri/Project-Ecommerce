import React, { Component } from 'react'

import '../../../css/web.css';
class BannerKategori extends Component {
  render() {
    return (
     <div>
       <br/><br/>
        <div className="grid4" id="grid4id">
          <div className="container-fluid fullprint">
            <div className="row">
              <div className="col-12 text-center">
              <h2 className="text-center">
                            <span>ABOUT US</span>
                        </h2>
                        <hr/>
                <center>

                </center>
              </div>
            </div>

            <div className="row ">
              <div className="col-6 p-0  text-center">
                <a href="as">
                  <img height="370px"  src="gambar/landing-page/slide-1.jpg" alt={'/'} className="kolomfullprint" />
                </a>
              </div>

              <div className="col-6 p-4  text-left">
               
                <p>JOKINGODING beginning of the establishment began with the formation of a community Techno-OS is a community 
                  of users of Open Source Software. As time went on and the number of mandate that we have received to provide 
                  business solutions by March 2010 some members of the community agreed to establish a business enterprise in 
                  the IT field with the name of CV. Open Source Technology Laboratory or we are familiar with TLab name, 
                  acronym of Open Source Technology Laboratory.</p>
                  <br/>
                  <p>Tlab beginning of the establishment began with the formation of a community Techno-OS is a community 
                  of users of Open Source Software. As time went on and the number of mandate that we have received to provide 
                  business solutions by March 2010 some members of the community agreed to establish a business enterprise in 
                  the IT field with the name of CV. Open Source Technology Laboratory or we are familiar with TLab name, 
                  acronym of Open Source Technology Laboratory.</p>
              </div>
            </div>
          </div>
        </div>
         </div>
    );
  }
}

export default BannerKategori;
