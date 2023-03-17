import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { FETCHAPI } from '../Constants';

export default function UsersList() {

  const [users, setUser] = useState("");

  console.log(users)


  const fetchAPI = async () => {
    const data = await fetch(FETCHAPI);
    const res = await data.json()
    setUser(res)
  }
  useEffect(() => {
    fetchAPI()
  }, [fetchAPI])

  return (
    <div>
      {users.users.map((user) => <List sx={{ width: '100%', minWidth: 560, bgcolor: 'background.paper' }}>

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={user.profilepicture
            } />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="h5"
                  color="text.primary"
                >
                  {user.name}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>)}

    </div>


  );
}