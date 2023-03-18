import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import UsersList from './UsersList'
import img from '../image/wave.png'
import './Basiccard.css'

export const BasicCard = (props) => {

  // const [id, setID] = useState("")
  return (
    <div className='home'>
      <div className='wave'>
        <img style={{ width: '1600px', height: '100%' }} src={img} alt="gshs" />
      </div>
      <div className='card'>
        <Card style={{
          overflow: 'auto',
          margin: 0,
          padding: 0,
          listStyle: "none",
          '&::-webkit-scrollbar': {
            width: '0.4em'
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
          }

        }} sx={{ minWidth: 630, borderRadius: '30px' , height: '600px'}}>
          <CardContent>
            <Typography variant="h5" color="text.secondary" gutterBottom align='center' fontWeight={500}>
              Select an account
            </Typography>
          </CardContent>
          <CardContent >
            <UsersList />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
