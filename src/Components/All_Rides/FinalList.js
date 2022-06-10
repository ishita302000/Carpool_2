import React, { useState } from 'react';
import './FinalList.css';
import BookrideFinalList from '../All_Rides/BookrideFinalList';
import OrderFinalList from '../All_Rides/OrderFinalList';

import {useNavigate} from 'react-router-dom';


function FinalList()
{
  const[check ,Ischeck]=useState(false);
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
     
      <div className='finallist'>
        <div className='logo'>
          <img src='logo.png'/>
          <img className="profile1" src="profilephoto.jpg" onClick={ () => click()}/>
        </div>
          <div className='bookride-list'>
            <BookrideFinalList/>
          </div>
          <div className='offerride-list'>
            <OrderFinalList/>
          </div>
      </div>
      {check ? (
                  <React.Fragment >
                          <button onClick={ride} className="ride-button">Rides</button>
                          <button onClick={SignOut} className="ride-buttonn">Sign Out</button>
                          </React.Fragment>
                  ) :null  //null
               }
      </div>
  );
}
export default FinalList;