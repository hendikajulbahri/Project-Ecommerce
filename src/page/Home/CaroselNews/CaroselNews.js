import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom'
// import './App.css';
import '../../../css/web.css';





class CaroselNews extends Component {
  render() {
    return (
      <div>

          
        <section className="tampilankedua" id="tampilankeduaid">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-12 px-0 ">
                <div id="demo" className="carousel slide " data-ride="carousel">


                  {/* <!-- The slideshow --> */}
                  <div className="carousel-inner gambar ">
                    <div className="carousel-item active">
                      <img src="gambar/a2.jpg" alt="Los Angeles" />
                    </div>
                    <div className="carousel-item">
                      <img src="gambar/a1.jpg" alt="Chicago" />
                    </div>

                  </div>

                  {/* <!-- Left and right controls --> */}
                  <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </section>
          </div>
    );
  }
}

export default CaroselNews;
