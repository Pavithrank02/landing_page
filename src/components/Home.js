import React from 'react'
import Sidebar from './Sidebar'
import './Home.css'
import Header from './Header'
import Chatbot from './Chatbot'


const Home = () => {
  return (
    <div className='user-info-container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='header'>
        <Header />
      </div>
      <div>
        <Chatbot />
      </div>
      
    </div>
  )
}

export default Home