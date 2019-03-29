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
                            <span style={{color:"black"}}>WHY CHOOSE US ?</span>
                        </h2>
                        <hr/>
                        <div class="row ">
              <div class="col-4 p-0  text-center">
                <span class="fa-stack fa-6x fb">
                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                    <i class="fa fa-tablet fa-stack-1x fa-inverse"></i>
                </span>
                <h5 class="mt-choose">Responsive</h5>
                <p class="small-choose">The display will look better and can be accessed on any platform</p>

              </div>

              <div class="col-4 p-0  text-center">
                <span class="fa-stack fa-6x fb">
                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                    <i class="fa fa-magic fa-stack-1x fa-inverse"></i>
                </span>
                <h5 class="mt-choose">Elegant & Profesional</h5>
                <p class="small-choose col-md-offset-5">The display will look elegant and professional which will be a value added website to make it more reliable </p>
              </div>

              <div class="col-4 p-0 text-center">
                <span class="fa-stack fa-6x fb">
                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                    <i class="fa fa-asl-interpreting fa-stack-1x fa-inverse"></i>
                </span>
                <h5 class="mt-choose">Easy To Use</h5>
                <p class="small-choose">Easy to use and easy to rebuild</p>
              </div>

              <div class="col-4 p-0 text-center">
                <span class="fa-stack fa-6x fb">
                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                    <i class="fa fa-group fa-stack-1x fa-inverse"></i>
                </span>
                <h5 class="mt-choose">Experienced technicians</h5>
                <p class="small-choose">Maintenance and service handling is carried out by an experienced team</p>
              </div>

              <div class="col-4 p-0 text-center">
                <span class="fa-stack fa-6x fb">
                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                    <i class="fa fa-key fa-stack-1x fa-inverse"></i>
                </span>
                <h5 class="mt-choose">Full Access</h5>
                <p class="small-choose">We provide full access such as managing cpanel admin and other admin logins</p>
              </div>

              <div class="col-4 p-0 text-center">
                <span class="fa-stack fa-6x fb">
                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                    <i class="fa fa-money fa-stack-1x fa-inverse"></i>
                </span>
                <h5 class="mt-choose">Low Cost</h5>
                <p class="small-choose">We provide various packages and relatively cheaper prices that you can customize according to your needs</p>
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
