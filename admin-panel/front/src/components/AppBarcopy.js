

import React from 'react'
import { AppBar,Toolbar, Typography,Stack, Button,IconButton } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import { Link } from 'react-router-dom'

 const AppBarNav = () => {


 

  return (
    <>
     <AppBar position='static' color='primary' >
    <Toolbar> 
        <IconButton size='large' edge='start' color='white' aria-label='logo' sx={{color:'white'}} component={Link} to='/' >
            <AccountBalanceIcon/>
            {/* <Link to='/' ></Link> */}
        </IconButton>

        <Typography variant='h5' component='div' sx={{flexGrow:1}} alignItems='center'>
            MY ADMIN PANEL
        </Typography>
        <Stack direction='row' spacing={2}>
                <Button color='inherit' >Layihələr</Button>
                <Button color='inherit' >Haqqızda</Button>

                <Link  to='/contacts'>
                <Button color='inherit' sx={{color:'white'}}>Əlaqə</Button>

                </Link>
                
        </Stack>
       
    </Toolbar>


</AppBar>
    </>
      )
}


export default AppBarNav;