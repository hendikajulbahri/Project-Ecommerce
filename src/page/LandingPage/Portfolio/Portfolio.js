import React, { Component } from 'react';

import '../../../css/web.css'


class Portfolio extends Component {
  render() {
    return (
     <div>

<div className="grid8">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center"><br/>
             <h2 className="text-center"><br/>
                            <span>OUR </span><span className="span-orange"> PRODUCTS</span>
                        </h2>
                        <hr/>
            <h3 className="section-subheading text-muted"> </h3>
          </div>
        </div><br/>
        <div className="row">
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                 
                </div>
              </div>
              <img className="img-fluid" src="gambar/portfolio/eis.PNG" alt=""/>
            </a><br/><br/>
            <div className="portfolio-caption text-center">
              <h4>Eighteen Shoes Care</h4>
              <p className="text-muted">E-commerce for Industri Shoes Care</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                 
                </div>
              </div>
              <img className="img-fluid" src="gambar/portfolio/cendana.png" alt=""/>
            </a><br/><br/>
            <div className="portfolio-caption text-center">
              <h4>Cendana Food</h4>
              <p className="text-muted">Advertising website for Cendana Catering</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                 
                </div>
              </div>
              <img className="img-fluid" src="gambar/portfolio/ipdc.PNG" alt="" />
            </a><br/><br/>
            <div className="portfolio-caption text-center">
              <h4>IPDC Training Centre</h4>
              <p className="text-muted">Questionnaire Online</p>
            </div>
          </div>
         
         
          
        </div>
      </div>
    
      <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">
                  
                  <h2 className="text-uppercase">E-Commerce Eighteen Shoes Care Industry</h2>
                  <p className="item-intro text-muted"></p>
                  <img className="img-fluid d-block mx-auto" src="gambar/portfolio/eis.PNG" alt=""/>
                  <p>Proyek yang dirancang untuk melakukan pemasaran digital dan mempromosikan industri perawatan sepatu di publik. situs web aplikasi ini memiliki fitur pesanan online yang bertujuan agar pelanggan tidak perlu datang ke toko tempat perawatan sepatu berada. pelanggan dapat melihat status kerja sepatu di halaman situs web. ketika sepatu sudah selesai pengerjaanya, maka situs web akan memberikan informasi lebih lanjut</p>
                  <ul className="list-inline">
                    <li>Tanggal: Mei 2017</li>
                    <li>Client: Eighteen Shoes Care</li>
                    <li>Kategori: E- Commerce</li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   
    <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">
                 
                  <h2 className="text-uppercase">Kuesioner Online</h2>
                  <p className="item-intro text-muted"></p>
                  <img className="img-fluid d-block mx-auto" src="gambar/portfolio/ipdc.PNG" alt=""/>
                  <p>proyek yang dirancang untuk tujuan formulir evaluasi untuk pusat pelatihan dirancang sedemikian rupa sehingga mereka dapat diakses di mana saja setelah proses pelatihan selesai. peserta pelatihan dapat mengakses dan memberikan nilai sebagai bahan evaluasi untuk tempat pelatihan dan tim pelatih</p>
                  <ul className="list-inline">
                    <li>Tanggal: Oktober 2017</li>
                    <li>Client: IPDC Training Centre</li>
                    <li>Kategori: Form Evaluation Online</li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   
    <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">
                 
                  <h2 className="text-uppercase">Cendana Catering</h2>
                 
                  <img className="img-fluid d-block mx-auto" src="gambar/portfolio/cendana.png" alt=""/>
                  <p>Sebuah portal website yang bertujuan untuk meningkatkan pemasaran di era digital dengan artikel yang dikemas seunik mungkin dan pengelolaan artikel dibagian admin yang dibuat semudah mungkin agar dapat digunakan.</p>
                  <ul className="list-inline">
                    <li>Date: Oktober 2018</li>
                    <li>Client: Finish</li>
                    <li>Category: Catering</li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fa fa-times"></i>
                    Close Project</button>
                </div>
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

export default Portfolio;
