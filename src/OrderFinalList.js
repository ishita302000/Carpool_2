import React, { Component } from "react";
import {UserBookRide}  from './RideDatabase';

class OrderFinalList extends Component{
    
    state={
        UserBookRide : [
        {
            from:'Chicago',
            to:'Cincinatti',
            date:'xx/mm/yy',
            time:'5am-9am',
            price:'95$',
            seats:'02'
        }]
    };
//   const numbers = props.UserBookRide;
//   const listitem = numbers.map((d) => <listitem  key={} value={number} />);
   
  render(){
      return(
          <div className="right">
              <div>
                <button className="buttonlist1" >Offered rides</button>
                </div>
                <div className="lists">
                    <h1>Jeffrey Roman</h1>
                    <br/>
                    <div>
                    <label className="labellist">From</label><br/>
                    {/* {listitem}
                    {UserBookRide.from} */}
                    <React.Fragment>
                        <ul className="list3">
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
                        <ul className="list3">
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
                        <ul className="list3">
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
                        <ul className="list3">
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
                        <ul className="list3">
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
                        <ul className="list3">
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
export default OrderFinalList;