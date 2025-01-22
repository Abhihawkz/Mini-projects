import React,{useState} from 'react'
import './home.css';
import Inputcontainer from '../compo/ip/Inputcontainer';
import Backgroundanimate from '../compo/bg/Backgroundanimate';
import Navbar from '../compo/bg/Navbar';




function Home() {

  return (
    <div className="container">
      <Navbar/>
    <Inputcontainer/>
    <Backgroundanimate/>
  </div>
  )
}

export default Home;