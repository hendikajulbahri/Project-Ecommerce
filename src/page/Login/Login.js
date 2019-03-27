import React, { Component } from 'react';

import axios from 'axios'
import '../Login/Login.css'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            firstname: '',
            lastname: '',
            displayname:'',
            email:'',
            password:''
        }
    }

     simpanData = () =>{
         
         var url ='http://localhost:3000/api/datausers'
         axios.post(url, {
             firstname: this.state.firstname,
             lastname: this.state.lastname,
             displayname: this.state.displayname,
             email: this.state.email,
             password: this.state.password

         })
         .then((output)=>{
             console.log(output.data)
         })
         .catch((err)=>{
            console.log(err)
         })

     }
     
    render() {
        return (
            <div>

                <section class="loginclass" id="gridloginid">
                    <div class="container">
                        <div class="row ">

                            <div class="col-lg-6 ">
                                <div class="container login ">
                                    <h5>Login</h5>
                                    <hr class="garis"></hr>

                                    <form class="" >
                                        <label for="uname">
                                            <b>Username or email address*</b>
                                        </label>
                                        <input type="text" placeholder="Enter Username" name="uname" required />

                                        <label for="psw">
                                            <b>Password*</b>
                                        </label>
                                        <input type="password" placeholder="Enter Password" name="psw" required />

                                        <button className="buton" type="submit">Login</button>
                                        <label>remember</label>
                                        <input type="checkbox" checked="checked" name="remember" />
                                        <span class="psw"><a href="asas"> Lost your password?</a>
                                        </span>



                                        {/* <label> Remember
                            <input type="checkbox" checked="checked" name="remember" />
                        <span class="psw"><a href="#"> Lost your password?</a>
                            </span></label>  */}
                                    </form>
                                </div>
                            </div>


                             <div class="col-lg-6">
                                <div class="container signup ">
                                    <h5>Register</h5>
                                    <hr class="garis"></hr>

                                      <form class="" >

                                    <label for="uname">
                                        <b>First Name*</b>
                                    </label>
                                    <input type="text" 
                                    onChange={(e)=>{
                                        this.setState({
                                            firstname: e.target.value
                                        })
                                    }}
                                    placeholder="Enter First Name" name="uname"  required
                                    
                                    />

                                      <label for="uname">
                                        <b>Last Name*</b>
                                    </label>
                                    <input type="text" 
                                     onChange={(e)=>{
                                        this.setState({
                                            lastname: e.target.value
                                        })
                                    }}
                                    placeholder="Enter Last Name" name="uname" required 
                                   
                                    
                                    />

                                      <label for="uname">
                                        <b>Display Name</b>
                                    </label>
                                    <input type="text" onChange={(e)=>{
                                        this.setState({
                                            displayname: e.target.value
                                        })
                                    }} 
                                    placeholder="Enter Display Name" name="uname" required 
                                    

                                    />

                                    <label for="uname">
                                        <b>Email address*</b>
                                    </label>
                                    <input type="text"
                                    onChange={(e)=>{
                                        this.setState({
                                            email: e.target.value
                                        })  
                                      }}
  
                                    placeholder="Enter Email Address" name="uname" required 
                                                                        
                                    />

                                    <label for="psw">
                                        <b>Password*</b>
                                    </label>
                                    <input type="password" 
                                     onChange={(e)=>{
                                        this.setState({
                                            password: e.target.value
                                        })
                                    }}
                                    placeholder="Enter Password" name="psw" required 
                                   
                                    
                                    />

                                    <button className="buton" type="button" onClick={this.simpanData} >Register</button>
                                    <label>remember</label>
                                    <input type="checkbox" checked="checked" name="remember" />
                                    <span class="psw"><a href="asas"> Lost your password?</a>
                                    </span>
                                    </form>
                                </div>
                                
                            </div> 
                        </div>
                    </div>
                </section>




            </div>





        );
    }
}

export default Login;
