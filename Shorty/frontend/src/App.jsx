import { Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import SignupPage from './components/signup/SignupPage.jsx'
import LoginPage from './components/login/LoginPage.jsx'
import Home from "./components/home/Home.jsx";



function App() {
  

  return (
    <>
    <Routes>
			<Route path='/' element= {<LoginPage />} />
			<Route path='/signup' element= {<SignupPage />} />
			<Route path='/home' element= {<Home />} />
			</Routes>
    </>
  )
}

export default App
