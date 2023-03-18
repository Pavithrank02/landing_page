import React, { useState } from 'react'
import Sidebar from './Sidebar'
import './Home.css'
import Header from './Header'
import Chatbot from './Chatbot'
import UserInfo from './UserInfo'
import UsersList from './UsersList'


const Home = (props) => {
  const user = UsersList()
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
        <UserInfo />
      </div>
      <div className='chat'>
        <Chatbot />
      </div>
      
    </div>
  )
}

export default Home