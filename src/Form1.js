import React, { Component } from "react";
import SignForm from "./SignForm";
import Login  from "./LoginForm";
import './Form.css';



class Form1 extends Component
{
    render()
    {
        return(
     
        <div className='form1-container'>
        <div className='form1-content-left'>
        <img className='form1-img' src='home.png' alt='spaceship' />
        <img className="logologin" src="logo.png"/>
        </div>
           <Login/>
          
        </div>
     );
    }
}
export default Form1;