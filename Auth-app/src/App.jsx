import React from 'react'
import { ToastContainer,  } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  return (
    <Router>
    <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
    </Routes>
    <ToastContainer/>
    </Router>
  )
}

export default App