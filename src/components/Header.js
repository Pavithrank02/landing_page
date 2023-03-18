import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import useAPI from './useAPI';
import './Home.css'
import Logout from './Logout';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleUserinfo = () => {
    setToggle(!toggle)

  }

  if (toggle === false) {
    return (
      <div>
        <div>
          <Logout />
        </div>
        <div>
          <AppBar position='static' color='transparent' elevation={1}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mt: -5,
                    ml: -3,
                    fontSize: 25,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'grey',
                    textDecoration: 'none',
                    justifyContent: 'flex-start'
                  }}
                >
                  Profile
                </Typography>

                <Box sx={{ flexGrow: 0 }} >
                  <Tooltip title="Profile">
                    <IconButton onClick={handleUserinfo} sx={{ mt: -5, ml: '55vw' }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mt: -5,
                    ml: 0,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontSize: 20,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Profile
                </Typography>
              </Toolbar>
            </Container>
          </AppBar>
        </div>
      </div>


    )

  }else{
    return (
      <AppBar position='static' color='transparent' elevation={1}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mt: -5,
                    ml: -3,
                    fontSize: 25,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'grey',
                    textDecoration: 'none',
                    justifyContent: 'flex-start'
                  }}
                >
                  Profile
                </Typography>

                <Box sx={{ flexGrow: 0 }} >
                  <Tooltip title="Profile">
                    <IconButton onClick={handleUserinfo} sx={{ mt: -5, ml: '55vw' }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mt: -5,
                    ml: 0,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontSize: 20,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Profile
                </Typography>
              </Toolbar>
            </Container>
          </AppBar>
    )
  }


}

export default Header