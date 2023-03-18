import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Logout = () => {
  return (
    <div className='logout'>
      <Card sx={{ minWidth: 375, width: 150, display: 'flex', flexDirection: 'column', alignItems:'center' }}>
        <CardContent>
          <Avatar alt="Remy Sharp" style={{ height: '100px', width: '100px' }} sx={{ ml: '50px' }} />
          <Typography sx={{ fontSize: 20, fontWeight: '', ml: 4 }} color="grey" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button size="small" style={{ p: '10px', backgroundColor: 'red', color: 'white' }} sx={{ ml: '60px', mt: '90px' }}>Sign Out</Button>
        </CardActions>
      </Card>

    </div>

  )
}

export default Logout