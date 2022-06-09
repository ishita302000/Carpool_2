import React, { useState } from 'react';
import './FinalList.css';
import BookrideFinalList from './BookrideFinalList';
import OrderFinalList from './OrderFinalList';

function FinalList()
{
  const[check ,Ischeck]=useState(false);
  function click()
  {
    Ischeck(true);
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
      {
                   check ?
                   <div className="clickprofile">
                       <ul className="pro">
                         <li>Rides</li>
                         <li>Sign Out</li>
                       </ul>
                   </div> :null  //null
               }
      </div>
  );
}
export default FinalList;