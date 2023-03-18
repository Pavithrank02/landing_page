import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import useAPI from './useAPI';

const UserInfo = () => {

  const user = useAPI()
  // console.log("info",user.props);


  return (
    <div>
      <div className='left'>
        <Avatar alt="Remy Sharp" style={{ height: '220px', width: '220px' }} sx={{ ml: '50px' }} />
        {/* <p> {name}</p> */}
        <ul>
          <l1>Username :</l1>
          <l1>email :</l1>
          <l1>Phone :</l1>
          <l1>Website :</l1>
        </ul>
        <h2>Company</h2>
        <ul>
          <l1>Name :</l1>
          <l1>catchphrase :</l1>
          <l1>bs :</l1>
        </ul>
      </div>
      <div className='right'>

        <h2>Address:</h2>
        <ul>
          <l1>Street :</l1>
          <l1>Suite :</l1>
          <l1>City :</l1>
          <l1>City :</l1>
        </ul>
      </div>
    </div>
  )
}

export default UserInfo