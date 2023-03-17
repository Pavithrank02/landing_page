import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import UsersList from './UsersList'
import './Basiccard.css'

export const BasicCard = () => {
  return (
    <Card sx={{ minWidth: 630, borderRadius: '30px'}}>
    <CardContent>
      <Typography  variant="h5" color="text.secondary" gutterBottom align='center'>
        Select an account
      </Typography>
      <UsersList />
    </CardContent>
  </Card>
  )
}
