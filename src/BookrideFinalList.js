import React, { Component } from "react";
import {UserBookRide}  from './RideDatabase';

class BookrideFinalList extends Component{
    
    state={
        UserBookRide : [
        {
            from:'Mumbai',
            to:'Hyderabad',
            date:'xx/mm/yy',
            time:'6pm-9pm',
            price:'180$',
            seats:'02'
        }]
    };
//   const numbers = props.UserBookRide;
//   const listitem = numbers.map((d) => <listitem  key={} value={number} />);
   
  render(){
      return(
          <div className="left">
              <div >
                <button className="buttonlist">Booked rides</button>
                </div>
                <div className="lists">
                    <h1>Ishita Goel</h1>
                    <br/>
                    <div>
                    <label className="labellist">From</label><br/>
                    {/* {listitem}
                    {UserBookRide.from} */}
                    <React.Fragment>
                        <ul className="list4">
                        {
                            this.state.UserBookRide.map( 
                                listitem => (
                                    <li>
                                        {listitem.from}
                                    </li>
                                )
                            )
                        }
                        </ul>
                    </React.Fragment>
                    <br/>
                    </div>
                    <div>
                    <label className="labellist">To</label><br/>
                   {/* // {UserBookRide.to} */}
                   <React.Fragment>
                        <ul className="list4">
                        {
                            this.state.UserBookRide.map( 
                                listitem => (
                                    <li>
                                        {listitem.to}
                                    </li>
                                )
                            )
                        }
                        </ul>
                    </React.Fragment>
                    <br/>
                    </div>
                    <div>
                    <label className="labellist">Date</label><br/>
                    {/* {UserBookRide.date} */}
                    <React.Fragment>
                        <ul className="list4">
                        {
                            this.state.UserBookRide.map( 
                                listitem => (
                                    <li>
                                        {listitem.date}
                                    </li>
                                )
                            )
                        }
                        </ul>
                    </React.Fragment>
                    <br/>
                    </div>
                    <div>
                    <label className="labellist">Time</label><br/>
                    {/* {UserBookRide.time} */}
                    <React.Fragment>
                        <ul className="list4">
                        {
                            this.state.UserBookRide.map( 
                                listitem => (
                                    <li>
                                        {listitem.time}
                                    </li>
                                )
                            )
                        }
                        </ul>
                    </React.Fragment>
                    <br/>
                    </div>
                    <div>
                    <label className="labellist">Price</label><br/>
                    {/* {UserBookRide.price} */}
                    <React.Fragment>
                        <ul className="list4">
                        {
                            this.state.UserBookRide.map( 
                                listitem => (
                                    <li>
                                        {listitem.price}
                                    </li>
                                )
                            )
                        }
                        </ul>
                    </React.Fragment>
                    <br/>
                    </div>
                    <div>
                    <label className="labellist">Seats</label><br/>
                    <React.Fragment>
                        <ul className="list4">
                        {
                            this.state.UserBookRide.map( 
                                listitem => (
                                    <li>
                                        {listitem.seats}
                                    </li>
                                )
                            )
                        }
                        </ul>
                    </React.Fragment>
                    <br/></div>
                </div>
          </div>
      );
}
}
export default BookrideFinalList;