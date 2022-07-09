import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css"

const Register = () => {
  const [ credentials, setCredentials ] = useState({
    username:undefined,
    email:undefined,
    password:undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e)=> {
    e.preventDefault()
    dispatch({type:"REGISTER_START"});
    try{
      const res = await axios.post("/auth/register", credentials);
      dispatch({ type:"REGISTER_SUCCESS", payload: res.data.details});
      navigate("/login")
    }catch(err){
      dispatch({type:"REGISTER_FAILURE", payload:err.response.data});
    }
  };
  console.log(user)

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
      type="text" 
      placeholder="email" 
      errorMessage = "It should be a valid email address!"
      id="email" 
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
      
      <input 
      type="text" 
      placeholder="country" 
      id="country" 
      onChange={handleChange} 
      className="lInput" />
      
      <input 
      type="text" 
      placeholder="city" 
      id="city" 
      onChange={handleChange} 
      className="lInput" />
      
      <input 
      type="text" 
      placeholder="phone" 
      id="phone" 
      errorMessage =
        "Maximun 10 digits number!!!"
      onChange={handleChange} 
      className="lInput" />

      <button disabled={loading} onClick={handleClick} className="lButton">Register</button>
      <span className="lspan">
            Already a member? <Link to='/login'className="l"> <b className="lb">Sign In.</b></Link>
        </span>

      {error && <span>{error.message}</span>}

    </div>
  </div>
  )
};

export default Register;