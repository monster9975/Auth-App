import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let {user} = useSelector((state)=> state.auth)
    const navigate = useNavigate()
    useEffect(()=>{
      if(!user){
       navigate("/login");
      }
    },[user])



  return (
    <div className='container p-5 text-center'>
        <h1 className='display-4'>Welcome to the Home page {user?.name}</h1>
    </div>
  )
}

export default Home