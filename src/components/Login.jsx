import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { FirebaseContext } from './Adapter'

const Login = () => {

    const { setEmail, setPassword, login } = useContext(FirebaseContext);

  return (
    <div className='loginFormCont'>
         <form action="" className="loginForm" onSubmit={login} >
                <h1 className='loginFormHead'>Login</h1>
                <div className="inputCont">
                    <label htmlFor="email">Email : </label>
                    <input type="email" name='email' placeholder='Enter Email'  required onChange={e=>{setEmail(e.target.value)}} />
                </div>

                <div className="inputCont">
                    <label htmlFor="password">Password : </label>
                    <input type="password" name='password' placeholder='Enter Password'  required onChange={e=>{setPassword(e.target.value)}} />
                </div>

                <button className="credBtns loginBtn" type='submit'>Login</button>
                <p className='newPara'>new User? <Link to='/signup'> <span className='signLink'> SignUp</span></Link></p>
            </form>
    </div>
  )
}

export default Login