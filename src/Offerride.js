import { useState } from "react"; 
import { Navigate } from "react-router-dom";
import OfferriderForm from "./OfferriderForm";
import OfferriderForm2 from "./OfferriderForm2";
import './Offerrider.css';
import { click } from "@testing-library/user-event/dist/click";

function Offerride()
{   
   const[check , Ischeck]= useState(false);
   function click()
   {
       Ischeck(true);
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
                   check ?
                   <div className="clickprofilee">
                       <ul className="pro">
                         <li>Rides</li>
                         <li>Sign Out</li>
                       </ul>
                   </div> :null  //null
               }
         </div>
     );

}
export default Offerride;