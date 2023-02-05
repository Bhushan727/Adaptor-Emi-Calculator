import React, { useState, useEffect } from "react";
// import firebase from "firebase/app";
import "firebase/auth";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "./Login";
import Signup from "./Signup";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";

export const FirebaseContext = React.createContext();

const Adapter = (props) => {
    const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const signup = (e) => {
      e.preventDefault();
      // code for signup
      console.log(email,password);
      createUserWithEmailAndPassword(auth, email, password)
      .then(async (res)=>{
          const user = res.user;
          await updateProfile(user, {
              displayName: name
            })
            alert("Signed Up successfully")
            navigate('/')
        })
        .catch((err)=> {
            console.log("error - ",err);
            alert(err.message);
        })
        setName("");
        setEmail("");
        setPassword("");
    };
    
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          setUser(user.displayName);
        } else {
          setUser(null);
        }
      });
    }, []);
    const login = (e) => {
        // e.preventDefault();
        // code for login

    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((res)=>{
        alert("Logged In Successfully");
        navigate('/');
        window.location.reload();
    })
    .catch((err)=>{
        console.log("error :- ",err.message);
        alert("error :- ",err.message)
    })

  };

  const logout = async () => {
    auth.signOut()
    .then(() => {
        setUser(null);
        navigate('/login');
    })
    .catch(err=>console.log(err))
  };

  return (
    <FirebaseContext.Provider
      value={{
        user,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        signup,
        login,
        logout,
      }}
    >

      <Routes>
        <Route
            path="/"
            element={user ? <Home user={user} /> : <Login />}
         />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>

    </FirebaseContext.Provider>
  );
};

export default Adapter;
