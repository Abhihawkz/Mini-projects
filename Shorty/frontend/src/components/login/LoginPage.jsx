import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; 
import Backgroundanimate from "../compo/bg/Backgroundanimate";

const LoginPage = () => {
  const navigate = useNavigate();
	const [username, setusername] = useState('');
	const [password, setPassword] = useState('');
	  
		const handleSubmit = async (e) => {
		  e.preventDefault();
      if(!username  && !password){
        alert("Require Username and Password")
      }else{
          
		  try {
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password})
        });
        if (response.ok) {
          navigate('/home');
          console.log('Login successfully!');
          setusername('');
        } else {
          console.error('Failed to save data');
        }
        } catch (error) {
        console.error('Error:', error);
        }
      }
  


		};


   




  return (
    <div className="container">
    <div className="login-container">
      <h1 className="logo">Shorty</h1> 
      <h1>Login</h1>
      <form onSubmit={handleSubmit} action="POST">
      <div className="form-group">
          {/* <label htmlFor="username">Username:</label> */}
          <input type="text" id="username" name="username"   placeholder="username" onChange={(e)=>setusername(e.target.value)} />
        </div>
        <div className="form-group">
          {/* <label htmlFor="password">Password:</label> */}
          <input type="password" id="password" name="password"  placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        <Link to='/signup'>
        <button type="submit"> New user Signup?</button>
        </Link>
      </form>
    </div>
    <Backgroundanimate/>
  </div>
  );
};

export default LoginPage;
