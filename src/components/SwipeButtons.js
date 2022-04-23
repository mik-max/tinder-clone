import React from 'react';
import './SwipeButtons.css';
import { Replay, Close, StarRate, FlashOn, Favorite} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
function SwipeButtons() {
  return (
    <div className='swipeButtons'>
         <IconButton className = 'swipeButton__repeat'>
              <Replay fontSize = 'large' />
         </IconButton>
         <IconButton className = 'swipeButton__left'>
              <Close fontSize = 'large' />
         </IconButton>
         <IconButton className = 'swipeButton__star'>
              <StarRate fontSize = 'large' />
         </IconButton>
         <IconButton className = 'swipeButton__right'>
              <Favorite fontSize = 'large' />
         </IconButton>
         <IconButton className = 'swipeButton__lightning'>
              <FlashOn fontSize = 'large'/>
         </IconButton>
    </div>
  )
}

export default SwipeButtons