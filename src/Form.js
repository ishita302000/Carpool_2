import React, { Component } from "react";
import Bookride from "./Bookride";
import RiderOffer from "./RiderOffer";
import SignForm from "./SignForm";
import Login  from "./LoginForm";


const Form = () => {
        return(
        <div className='form-container'>
        <div className='form-content-left'>
        <img className='form-img' src='home.png' alt='spaceship' />
        </div>
           <SignForm/>
        </div>
     );
    }
export default Form;