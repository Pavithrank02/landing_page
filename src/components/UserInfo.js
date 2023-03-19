import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import img1 from '../image/map.PNG'
import useAPI from './useAPI';
import './Home.css'
import zIndex from '@mui/material/styles/zIndex';

const UserInfo = (props) => {
  const { id } = props.id
  const user = useAPI()
  console.log(id)
  console.log(user)

  // const {users} = user

  const userID = user.users.map(u => {
    return u
  })
  const result = userID.users.find(u => {
    return u.id == id
  })

  if(result) {
    return ( 

      <div>
        <div className='left'>
          <Avatar alt="Remy Sharp" style={{ height: '220px', width: '220px' }} sx={{ ml: '50px' }} src={result.profilepicture} />
          <p> {result.name}</p>
          <ul className='li'>
            <l1 className='list'>Username : {result.username}</l1>
            <l1 className='list'>email : {result.email}</l1>
            <l1 className='list'>Phone : {result.phone}</l1>
            <l1 className='list'>Website : {result.website}</l1>
          </ul>
          <h2>Company</h2>
          <ul className='li'>
            <l1 className='list'>Name : {result.company.name}</l1>
            <l1 className='list'>catchphrase : {result.company.catchPhrase} </l1>
            <l1 className='list'>bs : {result.company.bs}</l1>
          </ul>
        </div>
        <div className='right'>
          <h2>Address:</h2>
          <ul className='li'>
            <l1 className='list'>Street :</l1>
            <l1 className='list'>Suite :</l1>
            <l1 className='list'> City :</l1>
            <l1 className='list'>ZipCode :</l1>
          </ul>
          <img src={img1} alt="gshs" style={{ height: '400px', width: '600px', zIndex: -100 }} />
        </div>
      </div>
    )

  }else{
<div className='right'>
          <h2>Address:</h2>
          <ul className='li'>
            <l1 className='list'>Street :</l1>
            <l1 className='list'>Suite :</l1>
            <l1 className='list'> City :</l1>
            <l1 className='list'>ZipCode :</l1>
          </ul>
          <img src={img1} alt="gshs" style={{ height: '400px', width: '600px', zIndex: -100 }} />
        </div>


  }


  
}

export default UserInfo