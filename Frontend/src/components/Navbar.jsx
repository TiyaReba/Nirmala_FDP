import { AppBar, Button, Toolbar,Typography } from '@mui/material'
import Icon from '@mui/material/Icon';
import React from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>


const Navbar = () => {
  return (
    <div>
        <AppBar  position="static" style={{ backgroundColor: '#87CEFA' }}>
            <Toolbar>
            <Typography align='left' variant="h4"  sx={{ flexGrow: 1 }}>
          EmployeeApp
          </Typography>
                <Button  color='success'>
                  <Link to = '/'style={{color:'white',textDecoration:'none',fontSize:'25px'}}><HomeIcon/></Link>
                  </Button>
                <Button  color='success'>
                  <Link to ='/add' style={{color:'white',textDecoration:'none',fontSize:'25px'}}>  <AddIcon/></Link>
                  </Button>
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar