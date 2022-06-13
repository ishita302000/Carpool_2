import React, { Component } from "react"; // remove unused imports in all components
import SignForm from "./SignForm";


//Why two JS files means its single Component right -- Merge it in single component.
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