import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './Home.css'
import Body from './Body'

const Posts = () => {
  return (
    <div className='user-info-container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='header'>
        <Header />
      </div>
      <div>
      <Body />
      </div>
    </div>
  )
}

export default Posts