import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { FixedSizeList } from 'react-window';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import useAPI from './useAPI';


const Logout = () => {
  const user = useAPI()

  return (
    <div className='logout'>
      <Card sx={{ minWidth: 375, width: 100, height: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <CardContent>
          <Avatar alt="Remy Sharp" style={{ height: '100px', width: '100px' }} sx={{ ml: '50px' }} />
          <Typography sx={{ fontSize: 20, fontWeight: '', ml: 4 }} color="grey" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
          </Typography>
          <Typography sx={{ mb: 1.5, ml: 7 }} color="text.secondary">
            adjective
          </Typography>
          {user && user.users.filter((f) => f.id < 3).map((u) => 
          <List sx={{ width: '120%', minWidth: 160, bgcolor: 'background.paper', mt:-2, ml: 0}}>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={u.profilepicture
              } />
            </ListItemAvatar>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline', width: '90px' }}
                    component="span"
                    variant="body"
                    color="text.primary"
                  >
                    {u.name}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
          
          )}
          
           
        </CardContent>
        <CardActions>
          <Button size="small" style={{ p: '60px', backgroundColor: 'red', color: 'white', borderRadius: '10px' }} sx={{ ml: '50px', mt: '20px' }}>Sign Out</Button>
        </CardActions>
      </Card>

    </div>

  )
}

export default Logout