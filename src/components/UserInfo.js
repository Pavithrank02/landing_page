import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import img1 from '../image/map.PNG'
import useAPI from './useAPI';
import { FETCHAPI } from '../Constants';
import './Home.css'
import zIndex from '@mui/material/styles/zIndex';

const UserInfo = (props) => {
  const [user, setUser] = useState("");
  console.log("ff", user)
  const { id } = props.id
  const { users } = user
  // const result = users.find(i => {
  //   returni == id
  // })

  useEffect(() => {
    fetchAPI()
  }, [])

  const fetchAPI = async () => {
    const data = await fetch(FETCHAPI);
    const res = await data.json()
    // console.log(res)
    setUser(res)
  }

  return (
    <>
      {users.id ===id && users.map((u) => {

        <div>
          <div className='left'>
            <Avatar alt="Remy Sharp" style={{ height: '220px', width: '220px' }} sx={{ ml: '50px' }} src={u.profilepicture} />
            <p> {u.name}</p>
            <ul className='li'>
              <l1 className='list'>Username : {u.username}</l1>
              <l1 className='list'>email : {u.email}</l1>
              <l1 className='list'>Phone : {u.phone}</l1>
              <l1 className='list'>Website : {u.website}</l1>
            </ul>
            <h2>Company</h2>
            <ul className='li'>
              <l1 className='list'>Name : {u.company.name}</l1>
              <l1 className='list'>catchphrase : {u.company.catchPhrase} </l1>
              <l1 className='list'>bs : {u.company.bs}</l1>
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


      })}

    </>
  )


}

export default UserInfo