import React from 'react'
import { tokens } from "../components/theme.js";
import { colors, useTheme } from "@mui/material";
import AppBarNav from '../components/AppBar.js'
import  DrawerComponent  from '../components/DrawerComponent.js';
import Dashboard from '../components/Dashboard.js';
import { Box } from '@mui/material';
// import { makeStyles } from '@mui/styles';




 const Home = () => {

 
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


// const useStyles = makeStyles((theme) => ({
//   stickyBox: {
//     position: 'fixed',
//     zIndex:'20',
//     backgroundColor:colors.greenAccent[200]
//   },
// }));
//  const classes = useStyles();

  return (<Box> 
     <AppBarNav  sx={{width:'95%'}}/>
      <Box  >
        
        <DrawerComponent />  
      </Box>
              
          <div className='dashboard'>
             <Dashboard/>
          </div>
   
  
   
  </Box>

    


  

    )
}

export default Home;