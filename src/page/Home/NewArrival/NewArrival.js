import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom'
import axios from 'axios'
import '../../../css/web.css';






class NewArrival extends Component {
    constructor(){
        super()
        this.state={
            produk: []
        }
    }

    componentDidMount(){
        var url = 'http://localhost:3333/product'
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
            <div  className="card cardcatalog"  style={{width:'300px'}} key={i} >
            <img className='card-img-top' src={`http://localhost:3333/gambarproduk/${gambar}`} alt={"/"}/>
                {/* <img class="card-img-top" src="gambar/z1.jpg" alt='/'/> */}
                <div className="card-body">

                    <p className="card-text text-center">{namaproduct}</p>
                    <p className="card-text text-center  harga">{harga}</p>
                    <center>
                        <button className="btn btn-warning ">
                            <i className="fas fa-cart-arrow-down logo"></i>
                        </button>
                    </center>
                </div>
            </div>                      
        )
    })

    return (
          
<React.Fragment>
<div className="grid5" id="grid5id">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 pt-5">
                        <h2 className="text-center">
                            <span>New Arrival</span>
                        </h2>
                        <hr/>
                        <div className="regular slider slidebawah featured">
                            

                            
                            {dataproduk}
                            
                          

                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
</React.Fragment>
    )
  }
}

export default NewArrival;
