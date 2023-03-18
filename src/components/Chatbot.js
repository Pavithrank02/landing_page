import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Avatar from '@mui/material/Avatar';
import useAPI from './useAPI';

const Chatbot = () => {

  const user = useAPI();

  console.log(user)

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
       <div className='chat-box'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{width: '310px'}} style={{backgroundColor: 'rgb(48,92,212)', color: 'white', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white'}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <ChatBubbleOutlineIcon />
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Chat
          </Typography>
        </AccordionSummary >
        <AccordionDetails style={{backgroundColor: 'white', color: 'black'}}>
        <Typography sx={{ color: 'text.secondary' }}>
           {user && user.users.map((u) => <Typography sx={{ color: 'text.secondary' }} style={{p: '10px'}}> {u.name }</Typography>
           
           )}
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>
      </div>
  )
}

export default Chatbot