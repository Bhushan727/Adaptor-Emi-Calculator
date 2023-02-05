import React from 'react'
import { useContext } from 'react';
import { FirebaseContext } from './Adapter';
import './Signup.css';

const Signup = () => {

    const { setName, setEmail, setPassword, signup } = useContext(FirebaseContext);

  return (
    <div className='signupContainer'>
        <div className="background"></div>
        <form action="" className="loginForm2" onSubmit={signup} >
                <h1 className='loginFormHead'>Signup</h1>

                <div className="inputCont">
                    <label htmlFor="name">Name : </label>
                    <input type="text" name='name' placeholder='Enter Name' required onChange={(e)=>{setName(e.target.value)}} />
                </div>

                <div className="inputCont">
                    <label htmlFor="email">Email : </label>
                    <input type="email" name='email' placeholder='Enter Email' required onChange={e=>{setEmail(e.target.value)}} />
                </div>

                <div className="inputCont">
                    <label htmlFor="password">Password : </label>
                    <input type="password" name='password' placeholder='Enter Password' required onChange={e=>{setPassword(e.target.value)}} />
                </div>

                <button className="credBtns signupBtn" type='submit'>Sign Up</button>

            </form>
    </div>
  )
}

export default Signup