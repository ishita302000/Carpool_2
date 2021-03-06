import './App.css';
import React , {Component} from 'react';
import {BrowserRouter as Router , Route , Routes ,Link} from 'react-router-dom';
import Form from '../Sign_In/SignIn';
import SignForm from '../Sign_In/SignForm';
import LoginForm from '../Log_In/LoginForm';
import RiderOffer from '../DashBoard/RiderOffer';
import Bookride from '../Book_Rides/Bookride';
import Offerride from '../Offer_Rides/Offerride';
import FinalList from '../All_Rides/FinalList';
import Form1 from '../Log_In/LogIn';
import OfferriderForm from '../Offer_Rides/OfferriderForm1';
import BookrideFinalList from '../All_Rides/BookrideFinalList';
import OrderFinalList from '../All_Rides/OrderFinalList';

class App extends Component {
  render() {
    return (
      // <React.Fragment> --remove all unused code
      // <div>
      //   <Link to='/LoginForm'></Link>
      //      <Link to='/RiderOffer'></Link>
      //      <Link to='/Bookride'></Link>
      //      <Link to='/Offerride'></Link>
      //      <Link to='/Form1'></Link>
      // </div>   
       <Router>
            <Link to='/LoginForm'></Link> {/* Why Link?? */}
                     <Link to='/RiderOffer'></Link>
                     <Link to='/Bookride'></Link>
                     <Link to='/Offerride'></Link>
                      <Link to='/Form1'></Link>
                     <Link to='/Form1'></Link> 

            <Routes> {/* we can also use switch*/}
                <Route path='/' element={<Form />}/>
                <Route path='/SignForm' element={<SignForm />}/>
                <Route path='/Login' element={<LoginForm />}/>
                <Route path='/RiderOffer'  element={<RiderOffer/>}/>
                <Route path='/Bookride' element={<Bookride />}/>
                <Route path='/Offerride' element={<Offerride />} />
                <Route path='/Form1' element={<Form1 />} /> {/*use meaningful names*/}
                <Route path='/OfferriderForm' element={< OfferriderForm/>}/>
                <Route path='/FinalList' element={<FinalList/>}/>
                <Route path='/BookrideFinalList' element={<BookrideFinalList/>}  />
                <Route path='/OrderFinalList' element={<OrderFinalList/>}/>
            </Routes>
       </Router>
      
    );
  }
}

export default App;
