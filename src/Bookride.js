import { useState } from "react";
import Bookrideform from './BookRiderForm';
import RideTile from "./RideTile";
import {UserBookRide}  from './RideDatabase';
import './Bookride.css';

 function Bookride()
     {
        const[check , Ischeck]= useState(false);
        const [showMatch, setShowMatch] = useState(false);
        const formParameters = { source: '',
        destination: '',
        date: 'xx/mm/yy',
        timeslot: -1};
        
        const fillDetails = (field, value) => {
            formParameters[field] = value;
        };
        const findRides = (event) =>
        {
            event.preventDefault();
             // check available or not  if avaiable return list if not print no match found 

             let ride= UserBookRide.find( user=> (user.from === formParameters.source && user.to === formParameters.destination ))
             if(ride)
             {
                 setShowMatch(true);
                 console.log("ride matched");
             }
        }
        function click()
        {
        Ischeck(true);
         }

         return(
             <div>
                 <img className="logo4" src="logo.png"/>
                 <img className="profile" src="profilephoto.jpg" onClick={() => click()}/>
                <div className="ride-form">
                    <div className="forn-container">
                        <form>
                            <h1>Book a Ride</h1>
                            <h3>we get you the matches asap!</h3>
                            <br/>
                            <br/>
                            <Bookrideform filled={findRides} fillDetails={(field,value) => fillDetails(field,value)} 
                            onSubmit={(e) => {findRides(e)}} />
                        </form>
                    </div>
               {
                showMatch ?
                    <div className="ride-matches">
                        <h2 style={{ color: 'purple' }}>Your Matches</h2>
                        { 
                            UserBookRide.map((item, pos) => {
                            return (
                                <RideTile key={pos} info={item} onClick={() => Bookride(pos)} />
                            );
                        })}
                    </div> :null  //null
               }
               {
                   check ?
                   <div className="clickprofiles">
                       <ul className="pro">
                         <li>My Rides</li>
                         <li>Log Out</li>
                       </ul>
                   </div> :null  //null
               }
             </div>
             </div>
         );
     }

export default Bookride;