import React from "react";
import { useState } from "react";
import './RiderOffer.css';
import { Link, Navigate, useNavigate } from "react-router-dom";

 
const RiderOffer =() =>{
  const[check , Ischeck]= useState(false);
const navigate = useNavigate();

  function  handleSubmit1()
    {
      navigate('/Bookride')
    }
  function  handleSubmit2()
    {   
      navigate('/Offerride')
    }
  function click()
    {
        Ischeck(true);
    }
    function ride()
    {
      console.log("Hllo")
      navigate('/FinalList')
    }
    function SignOut()
    {
      navigate('/Form1')
    }
    return(
          <div className="dashboard">
            <img className="logo1" src="logo.png"/>
            <img className="profile" src="profilephoto.jpg" onClick={() => click()} />
              <h1>Hey Ishita !</h1>
              <div className="dashboard-body">
                    <main className="service-menu">
                      <button className="service-btn bg-purple" onClick={handleSubmit1}>Book a ride</button>
                      <button className="service-btnn bg-orange" onClick={handleSubmit2}>Offer a ride</button>
                     
                    </main>
              </div>
              {
                check ? (
                  <React.Fragment >
                          <button onClick={ride} className="ride-button">Rides</button>
                          <button onClick={SignOut} className="ride-buttonn">Sign Out</button>
                          </React.Fragment>
                  ) :null  //null
               }
          </div>
        );
};
export default RiderOffer;