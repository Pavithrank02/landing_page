import React, { useState } from 'react'
import Sidebar from './Sidebar'
import './Home.css'
import Header from './Header'
import Chatbot from './Chatbot'
import UserInfo from './UserInfo'
import { useParams } from "react-router-dom";


const Home = (props) => {
  const  userId  = useParams();
  console.log("id", userId)
  // console.log("home", user);
  return (
    <div className='user-info-container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='header'>
        <Header />
      </div>
      <div className='info'>
        <UserInfo id={userId}/>
      </div>
      <div className='chat'>
        <Chatbot />
      </div>
      
    </div>
  )
}

export default Home