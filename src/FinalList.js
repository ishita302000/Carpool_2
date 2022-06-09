import React from 'react';
import './FinalList.css';
import BookrideFinalList from './BookrideFinalList';
import OrderFinalList from './OrderFinalList';

function FinalList()
{
  return(
    <div>
     
      <div className='finallist'>
        <div className='logo'>
          <img src='logo.png'/>
          <img className="profile1" src="profilephoto.jpg"/>
        </div>
          <div className='bookride-list'>
            <BookrideFinalList/>
          </div>
          <div className='offerride-list'>
            <OrderFinalList/>
          </div>
      </div>
      </div>
  );
}
export default FinalList;