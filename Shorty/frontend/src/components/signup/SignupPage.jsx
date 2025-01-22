import React, { useState } from 'react';
import './SignupPage.css'; 
import { useNavigate } from 'react-router-dom';
import Backgroundanimate from '../compo/bg/Backgroundanimate';
import { Link } from "react-router-dom";
const SignupPage = () => {
  const navigate = useNavigate();
	const [username, setusername] = useState('');
	const [email, setEmail] = useState('');
	const [fullname, setfullname] = useState('');
	const [password, setPassword] = useState('');
	  
		const handleSubmit = async (e) => {
		  e.preventDefault();
      if(!username  || !password || !fullname || !email){
        alert("Fill the input boxes")
      }else{
        try {
          const response = await fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({  fullname ,username, email , password})
          });
          if (response.ok) {
            navigate('/home');
            console.log('Data saved successfully!');
            setusername('');
            setfullname('');
            setEmail('');
            setPassword('');
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
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} action="POST">
      <div className="form-group">
          {/* <label htmlFor="username">Username:</label> */}
          <input type="text" id="username" name="username"  placeholder='Username'  onChange={(e)=>setusername(e.target.value)} />
        </div>
        <div className="form-group">
          {/* <label htmlFor="fullname">FullName</label> */}
          <input type="text" id="fullname" name="fullname"  placeholder='Fullname'  onChange={(e)=>setfullname(e.target.value)} />
        </div>
        <div className="form-group">
          {/* <label htmlFor="email">Email:</label> */}
          <input type="email" id="email" name="email"  placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          {/* <label htmlFor="password">Password:</label> */}
          <input type="password" id="password" name="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign up</button>
        <Link to='/'>
        <button type="submit">Login</button>
        </Link>
      </form>
    </div>
    <Backgroundanimate/>
  </div>
  );
};

export default SignupPage;
