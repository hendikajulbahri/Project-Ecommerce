import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom'
// import logo from './logo.svg';
import axios from 'axios'
import '../../../css/web.css'



class BarangNewArrival extends Component {
 constructor(){
     super()
     this.state={
         produk: []
     }
 }

 componentDidMount(){
     var url = 'http://localhost:3333/produknewarrival'
     axios.get(url)
     .then((x)=>{
       this.setState({
           produk: x.data 
           
       })
       console.log(x.data)
     })
     .catch((err)=>{
         console.log(err)
     })
 }


 
    render() {
        var dataproduk = this.state.produk.map((val,i)=>{
            var gambar = val.gambar_produk
            // var deskripsi = val.deskripsi
            var harga = val.harga_produk
            var namaproduct= val.nama_produk
            return(
                <div class="col-lg-3 col-md-4 col-xs-12 pro">
                                    <div key={i} class="card cardcatalog cardmenuproduk"  style={{width:'210px'}}>
                                            <img class="card-img-top" src={`gambar/${gambar}`} alt="/"/>
                                            <div class="card-body cardbodymenuproduk">
                                                <a href="aaa">
                                                        <p class="card-text text-center">{namaproduct}</p>
                                                </a>
                                                
                                                <p class="card-text text-center  harga">{harga}</p>
                                                <center>
                                                    <button class="btn btn-warning ">
                                                        <i class="fas fa-cart-arrow-down logo"></i>
                                                    </button>
                                                </center>
                                            </div>
                                        </div>
                                        </div>
                            
            )
        })
      

    return (
      <div>
     
     <div class="katalogmenuproduk" id="katalogmenuprodukid">
            <div class="container-fluid ">
                <div class="row">
                    <div class="col-12 text-center">
                     
                        <center>

                        </center>
                    </div>
                </div>

                
                <div class="row">
                    <div class="col-lg-2 col-md-4 col-sm-12 p-0  text-center">

                        <p class="labelmenukategori">Category</p>
                        <label class=" containerlabel ">One
                            <input type="checkbox" checked="checked"/>
                            <span class="checkmark"></span>
                        </label>
                        <label class=" containerlabel ">Two
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        <label class=" containerlabel ">Three
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        <label class=" containerlabel ">Four
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>

                        <hr class="gariscontainerlabel"/>


                        <p class="labelmenukategorisize">Size</p>
                        <label class=" containerlabel ">One
                            <input type="checkbox" checked="checked"/>
                            <span class="checkmark"></span>
                        </label>
                        <label class=" containerlabel ">Two
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        <label class=" containerlabel ">Three
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        <label class=" containerlabel ">Four
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>


                    </div>

                  
                    

                    <div class="col-lg-10 col-md-8 col-sm-12 col-xs-12  menuproduk">
                       <div class="container">
                        <div class="row">
                            <div class="col-12 tagjenisproduk text-center">
                                        <h1>New Arrivals</h1>
                                        
                                    </div>
                                
                                
                                    <div className='row'>{dataproduk}</div>
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

export default BarangNewArrival;
