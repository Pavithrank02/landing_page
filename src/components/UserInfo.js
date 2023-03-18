import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import UsersList from './UsersList';

const UserInfo = () => {


  // console.log("info",user.props);

 
  return (
    <div>
      <div className='left'>
      <Avatar alt="Remy Sharp"  style={{height: '220px', width: '220px'}} sx={{ml: '50px'}}/>
      {/* <p> {name}</p> */}

      </div>
      <div className='right'>

      </div>
    </div>
  )
}

export default UserInfo