import { useState } from "react";
import Bookrideform from './BookRiderForm';
import RideTile from "./RideTile";
import {UserBookRide}  from './RideDatabase';
import './Bookride.css';

 function Bookride()
     {
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

         return(
             <div>
                  <div className="ride-form">
            <div className="form container">
               
                <form>
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
             </div>
             </div>
         );
     }

export default Bookride;