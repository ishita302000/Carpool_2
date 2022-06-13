import React, { Component } from "react";
import { Navigate, Redirect } from "react-router-dom";
import { InitialList, errors } from "../Database/AccountList";
import SignIn from "../Sign_In/SignForm";
import {useHistory} from 'react-router-dom';
import './LogIn.css';
import { NavLink } from "react-router-dom";
import RiderOffer from '../DashBoard/RiderOffer';

class Login extends Component
{

    constructor(props) {
        super(props);
        
        this.state = {
          email: "",   //" "
          password: "",
          redirect: false,
          errormessage:"",
        };
        this.handleInputChange = this.handleInputChange.bind(this);// why learn 
        this.handleSubmit = this.handleSubmit.bind(this);
      
    }
      handleInputChange(event) {
        event.preventDefault(); //why
        const target = event.target;
        this.setState({
          [target.name]: target.value,
        });
      }

      handleSubmit(event) {
        event.preventDefault(); // Why

     //   var {uemail , pass } = document.forms[0];
        let userData = InitialList.find(user => user.email == this.state.email & user.password == this.state.password );
        console.log(InitialList); 
        if(userData.email != "")
        {
          this.setState({redirect: true});
        
       //   this.props.history.push('/RiderOffer');
      //    this.props.history.push({ pathname:'/RiderOffer' })    
        }
        else if((userData.email=="" && userData.password=="") || (userData.email==" " && userData ==" "))
        {
          this.setState({errormessage:"Field Required!"})
        }
      }
      render() {
        return (
          this.state.redirect? <Navigate to="/RiderOffer" /> :
          <div className="form1-content-right">
            <form className="form1" >
            <h1>LogIn your account</h1>

            <div className="form1-inputs">
               <label htmlFor="email" className="form1-label">
                Email
               </label>
               <input  type="email" name="email" className="form1-input" placeholder='Enter your email' value={this.state.email}
               onChange={this.handleInputChange} 
               />
                {this.state.errormessage && <div className="error"> { this.state.errormessage} </div>}
            </div>   

              <div className="form1-inputs">
                <label htmlFor="password" className="form1-label">
                  Password
               </label>
               <input id="password" type="password" name="password" className="form1-input" placeholder='Enter your password' value={this.state.password}
                onChange={this.handleInputChange} />  
               {this.state.errormessage && <div className="error"> {this.state.errormessage} </div>}
             </div> 
              
               <button  className='form1-input-btn' type="submit" onClick={this.handleSubmit} >Log in</button> 
               <span className='form-input-login'>
         Doesn't have an account ? <NavLink exact activeClassName="active" to="/">SignIn</NavLink> 
       </span>
            </form>
          </div>
        );
      }
    }

export default Login;