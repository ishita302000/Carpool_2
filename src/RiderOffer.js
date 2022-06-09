import React from "react";
import { useState } from "react";
import './RiderOffer.css';
import { useNavigate } from "react-router-dom";

 
const RiderOffer =() =>{
//const[check , Ischeck]= useState(0);
const navigate = useNavigate();

  function  handleSubmit1()
    {
      navigate('/Bookride')
    }
  function  handleSubmit2()
    {   
      navigate('/Offerride')
        }
    // if(check==1)
    // {
    //   return <Navigate to="/Bookride"/>
    // }
    // else if(check==2)
    // {
    //   return <Navigate to="/Bookride"/>
    // }
  
    return(
          <div className="dashboard">
            <img className="logo1" src="logo.png"/>
            <img className="profile" src="profilephoto.jpg" />
              <h1>Hey Ishita !</h1>
              <div className="dashboard-body">
                    <main className="service-menu">
                      <button className="service-btn bg-purple" onClick={handleSubmit1}>Book a ride</button>
                      <button className="service-btnn bg-orange" onClick={handleSubmit2}>Offer a ride</button>
                    </main>
              </div>
          </div>
        );
};
export default RiderOffer;