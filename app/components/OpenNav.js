"use client"

import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

export default function OpenNav() {

// create function that toggles the menuIcon when clicked

function handleClick() {
    document.querySelector(".navigation-container").classList.toggle("close");
  }


  return (
    <div>
   
   <IconButton onClick={handleClick} style={{color: "#fff"}} >
   <MenuIcon  className="nav-menu-icon" />
   </IconButton>


    </div>
  )
}
