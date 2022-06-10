import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import OfferriderForm from "./OfferriderForm";
import OfferriderForm2 from "./OfferriderForm2";
import './Offerrider.css';
import React from "react";
function Offerride()
{   
   const[check , Ischeck]= useState(false);
   const navigate = useNavigate();

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
        <div>
           <img className="logoo" src="logo.png"/> 
           <img className="profile" src="profilephoto.jpg" onClick={ () => click()}/>
            <div className="ride-forn">
                <div className="forn-container-left">
                   <OfferriderForm/>
                </div>
                <div className="forn-container-right">
                   <OfferriderForm2/>
                </div>
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

}
export default Offerride;