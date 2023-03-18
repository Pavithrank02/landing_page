import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import './Home.css'
import Header from './Header'
import Body from './Body'


const Home = () => {
  return (
    <div className='user-info-container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='header'>
        <Header />
      </div>
      
    </div>
  )
}

export default Home