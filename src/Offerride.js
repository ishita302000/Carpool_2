import { useState } from "react"; 
import { Navigate } from "react-router-dom";
import OfferriderForm from "./OfferriderForm";
import OfferriderForm2 from "./OfferriderForm2";
import './Offerrider.css';

function Offerride()
{
     return(
        <div>
           <img className="logoo" src="logo.png"/>
           <img className="profile" src="profilephoto.jpg"/>
            <div className="ride-forn">
                <div className="forn-container-left">
                   <OfferriderForm/>
                </div>
                <div className="forn-container-right">
                   <OfferriderForm2/>
                </div>
            </div>
         </div>
     );

}
export default Offerride;