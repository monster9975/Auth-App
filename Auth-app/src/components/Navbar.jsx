import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOutUser } from '../Auth/authSlice'

const Navbar = () => {
    
    let {user} = useSelector((state)=> state.auth)
     
    const dispatch = useDispatch()

  const handleLogout =() =>{
    dispatch(logOutUser())
  }



  return (
    <nav className="navbar bg-dark">
  <div className="container-fluid">
    <Link to ={"/"} className="navbar-brand mb-0 h1 text-light">Auth-app</Link>
    <span>
        {
            user ? (
                      <button className="btn btn-danger  mx-2" onClick={handleLogout}>Logout</button>
                   ) : (
                <>
                <Link to ={"/register"}className="btn btn-warning  mx-2">Register</Link>
                <Link to ={"/login "} className="btn btn-warning mx-2">Login</Link>
                </>
                     )
        }
    </span>
  </div>
</nav>
  )
}

export default Navbar