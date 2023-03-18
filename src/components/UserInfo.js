import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import useAPI from './useAPI';
import img1 from '../image/map.PNG'
import './Home.css'
import zIndex from '@mui/material/styles/zIndex';

const UserInfo = () => {

  const user = useAPI()
  // console.log("info",user.props);


  return (
    <div>
      <div className='left'>
        <Avatar alt="Remy Sharp" style={{ height: '220px', width: '220px' }} sx={{ ml: '50px' }} />
        {/* <p> {name}</p> */}
        <ul className='li'>
          <l1 className='list'>Username :</l1>
          <l1 className='list'>email :</l1>
          <l1 className='list'>Phone :</l1>
          <l1 className='list'>Website :</l1>
        </ul>
        <h2>Company</h2>
        <ul className='li'>
          <l1 className='list'>Name :</l1>
          <l1 className='list'>catchphrase :</l1>
          <l1 className='list'>bs :</l1>
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
        <img src={img1} alt="gshs" style={{height: '400px', width: '600px', zIndex: -100}}/>
      </div>
    </div>
  )
}

export default UserInfo