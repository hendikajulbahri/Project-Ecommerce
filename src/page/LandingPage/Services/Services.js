import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom'
import '../../../css/web.css';








class Services extends Component {
  render() {
    return (
      <div>

 <div className="grid6" id="grid6id">
 <div className="container-fluid row">
          <div className="col-lg-12">
          <h2 className="text-center"><br/>
                            <span>OUR SERVICES</span>
                        </h2>
                        <hr/> <br/>
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="gambar/icon/tag.png" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    
                    <h4 className="subheading">Website Application</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Build a website with a responsive and elegant yet light appearance that is done by a team of certified professionals</p>
                    <a href="#">
                      <p>More Info..</p>
                    </a>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="gambar/icon/desktop.png" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    
                    <h4 className="subheading">Desktop Application</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Build desktop applications with attractive appearance and light work speeds that make the application more effective and efficient by a professional and certified team</p>
                    <a href="#">
                      <p>More Info..</p>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="gambar/icon/network.png" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                   
                    <h4 className="subheading">Network Installation</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Helps you install and repair local networks with systems that are available or not available. we provide the best solutions and services</p>
                    <a href="#">
                      <p>More Info..</p>
                    </a>
                  </div>
                </div>
              </li>
               <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="gambar/icon/cctv-5.png" alt="" /> 
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    
                    <h4 className="subheading">CCTV Installation</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">procurement and installation of CCTV for individuals and companies at affordable prices</p>
                    <a href="#">
                      <p>More Info..</p>
                    </a>
                  </div>
                </div>
              </li>
              
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>Ready to start
                    <br></br>Project with
                    <br></br>Us?</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
            </div>

          </div>
    );
  }
}

export default Services;
