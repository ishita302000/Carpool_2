import {React } from 'react'
import { useState } from 'react';
import Form1 from './Form1';
import './Form.css';
import { Navigate, NavLink } from 'react-router-dom';

const FormSignup = () => {

  const initialList=[
    {
      email:'ishitagoel3020@gmail.com' ,
      password : '1234',
    },
    {
      email:'abcde@gmail.com' ,
      password: '5678',
    },
  ];  
  const[  list , setList] =  useState(initialList);
  const[email_ , setemail] = useState('');
  const[password_ , setpassword] = useState('');
  const[isAuth , setIsAuth] = useState(true);
  

  function handleChange(event)
  {
      setemail(event.target.value);
     
  }
  function handleChange_(event)
  {
      setpassword(event.target.value);
     
  }
  function handleAdd()
  {       
    if(email_!="" & password_!="" )
    {
          const newList = list.concat({ email:email_  , password : password_  }); 
          setList(newList);
          setIsAuth(false);
          }
      
  }
  if(!isAuth)
  {
    return <Navigate to='/RiderOffer' />
  }

  

  return (
    <div className="form-content-right">
      <form className="form" >
        <h1>Create your account</h1>
        <div className="form-inputs">
           <label htmlFor="email" className="form-label">
            Email
           </label>
           <input  id="Email "type="email" name="email" className="form-input" placeholder='Enter your email' value={email_}
           onChange={handleChange}  required />
        </div>     

        <div className="form-inputs">
           <label htmlFor="password" className="form-label">
             Password
           </label>
           <input id="password" type="password" name="password" className="form-input" placeholder='Enter your password' value1={password_}
           onChange={handleChange_} required />         
        </div> 
       <button className='form-input-btn' type='button' onClick={handleAdd}> Sign up</button> 
       <span className='form-input-login'>
         Already have an account ? <NavLink exact activeClassName="active" to="/Form1">LogIn</NavLink> 
       </span>
      </form>
    </div>  
  );
};

export default FormSignup;