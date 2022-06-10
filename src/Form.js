import React, { Component } from "react";
import SignForm from "./SignForm";



const Form = () => {
        return(
        <div className='form-container'>
        <div className='form-content-left'>
        <img className='form-img' src='home.png' alt='spaceship' />
        <img className="signlogo" src="logo.png"/>
        </div>
           <SignForm/>
        </div>
     );
    }
export default Form;