import React from "react";
import { useState } from "react";
import './RiderOffer.css';
import { Navigate, useNavigate } from "react-router-dom";

 
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
      navigate('/FinalList')
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
                check ?
                    <div className="Clickprofile">
                        <ul className="pro">
                          <li > <a href="/FinalList"></a>Rides</li>
                          <li className="border">Sign Out</li>
                        </ul>
                    </div> :null  //null
               }
          </div>
        );
};
export default RiderOffer;