import React from 'react'
import './Home.css'
import { useContext } from 'react'
import { FirebaseContext } from '../../components/Adapter'
import EmiCalculator from '../../components/EmiCalculator/EmiCalculator';

const Home = (props) => {

    const { logout,user } = useContext(FirebaseContext);

  return (
    <div>
        <div className="heading">
            <h2>Hello, {user}</h2>
            <button onClick={logout}>Logout</button>
        </div>
        <EmiCalculator />
    </div>
  )
}

export default Home