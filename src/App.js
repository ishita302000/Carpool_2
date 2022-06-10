
import './App.css';
import React , {Component} from 'react';
import {BrowserRouter as Router , Route , Routes ,Link} from 'react-router-dom';
import Form from './Form';
import SignForm from './SignForm';
import LoginForm from './LoginForm';
import RiderOffer from './RiderOffer';
import Bookride from './Bookride';
import Offerride from './Offerride';
import FinalList from './FinalList';
import Form1 from './Form1';
import OfferriderForm from './OfferriderForm';
import BookrideFinalList from './BookrideFinalList';
import OrderFinalList from './OrderFinalList';

class App extends Component {
  render() {
    return (
      // <React.Fragment> 
      // <div>
      //   <Link to='/LoginForm'></Link>
      //      <Link to='/RiderOffer'></Link>
      //      <Link to='/Bookride'></Link>
      //      <Link to='/Offerride'></Link>
      //      <Link to='/Form1'></Link>
      // </div>   
       <Router>
                     <Link to='/LoginForm'></Link>
                     <Link to='/RiderOffer'></Link>
                     <Link to='/Bookride'></Link>
                     <Link to='/Offerride'></Link>
                      <Link to='/Form1'></Link>
                     <Link to='/Form1'></Link> 

            <Routes>
                <Route path='/Form' element={<Form />}/>
                <Route path='/SignForm' element={<SignForm />}/>
                <Route path='/Login' element={<LoginForm />}/>
                <Route path='/'  element={<RiderOffer/>}/>
                <Route path='/Bookride' element={<Bookride />}/>
                <Route path='/Offerride' element={<Offerride />} />
                <Route path='/Form1' element={<Form1 />} />
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
