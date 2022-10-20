import React from 'react'
import Button from '@mui/material/Button'
import {NavLink} from 'react-router-dom'

function Header(){

  return(
    <>
    <h1>My Store</h1>
      <Button component={NavLink} to="/men" variant="contained">
        Men
      </Button>
        <Button component={NavLink} to="/women" variant="contained">
        Women
      </Button>
    </>
  )
}

export default Header