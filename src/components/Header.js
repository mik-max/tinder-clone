import React from 'react';
import { Person} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { ForumRounded } from '@mui/icons-material';
import './Header.css';
function Header() {
  return (
    <div className='header'>
      <IconButton>
        <Person className ='header__icon' fontSize = 'large' />
      </IconButton>

      <img className='header__logo' src = '/Images/tinder__logo.png' alt='' />   
      <IconButton>
        <ForumRounded className ='header__icon' fontSize = 'large' />
      </IconButton>
    </div>

  )
}

export default Header