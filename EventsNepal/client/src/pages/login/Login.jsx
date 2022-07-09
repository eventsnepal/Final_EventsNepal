import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css"
import React, { Component } from 'react'

const Login = () => {
  const [ credentials, setCredentials ] = useState({
    username:undefined,
    password:undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e)=> {
    e.preventDefault()
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type:"LOGIN_SUCCESS", payload: res.data.details});
      navigate("/")
    }catch(err){
      dispatch({type:"LOGIN_FAILURE", payload:err.response.data});
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input 
        type="text" 
        placeholder="username"
        errorMessage=
        "Username should be 3-16 characters and shouldn't include any special character!"
        id="username" 
        pattern = "^[A-Za-z0-9]{3,16}$"
        onChange={handleChange} 
        className="lInput" />
  
        <input 
        type="password" 
        placeholder="password" 
        errorMessage =
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
        id="password"
        pattern = "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$" 
        onChange={handleChange} 
        className="lInput" />
  
        <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
        <span className="lspan">
            New to EventsNepal? <Link to='/register' className="l"> <b className="lb">Sign up now.</b></Link>
        </span>
  
        {error && <span>{error.message}</span>}
  
      </div>
    </div>
    )
};

export default Login;