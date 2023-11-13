import React ,{useState} from 'react'
import { Box, IconButton, useTheme } from "@mui/material";
// import { AppBar,Toolbar, Typography,Stack, Button } from '@mui/material'
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
// import { Link } from 'react-router-dom'
import { ColorModeContext, tokens } from "./theme";
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import {Typography,InputLabel} from '@mui/material';
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import EmailIcon from '@mui/icons-material/Email';
import {Link} from 'react-router-dom'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import { FormControl, Select, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import i18next from 'i18next'
import {useTranslation, initReactI18next } from 'react-i18next';
import  LanguageDetector  from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import SearchIcon from "@mui/icons-material/Search"; 
i18next
 .use(initReactI18next)
 .use(LanguageDetector )
 .use(HttpApi)
 .init({
  fallback:"en",
  detection:{
    order:['cookie','htmlTag','localStorage','path','subdomain'],
    cache:['cookie'],
  }, backend:{
    loadPath:'./locales/{{lng}}/translation.json',
  },
  react:{
    useSuspense:false
  }
 });




const AppBarNav = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [language, setLanguage] = useState('');
    const {t}=useTranslation();

    const languages=[
      {
          code:'en',
          name:'English',
          country_code:'gb'
      },
      {
          code:'az',
          name:'Azərbaycan dili',
          country_code:'az'
      }
  ] 
    
   const handleChange = (event) => {
    setLanguage(event.target.value);}



    return (
        <Box display="flex" justifyContent="space-between" p={2}>
          {/* SEARCH BAR */}
          <Box  display="flex" justifyContent="center" alignItems='center' > 
          <IconButton size='large' edge='start'  aria-label='logo' component={Link} to='/' >
            <AccountBalanceIcon sx={{width:"30px",height:"30px"}}/>
            {/* <Link to='/' ></Link> */}
        </IconButton>
        <Typography variant='h5' component='div' >
            {t('panel-name')}
                    </Typography>
        <Box  marginLeft={2}  backgroundColor={colors.primary[800]}>
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder={t('search-name')} />
            <IconButton type="button" sx={{ p: 1 }} >
              <SearchIcon />
            </IconButton>
        </Box>
        
          </Box>
          <Box>
           
          </Box>
    
          {/* ICONS */}
          <Box display="flex"
          width={'150px'}
            backgroundColor={colors.primary[800]}
            borderRadius="3px">
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
           
            <IconButton> <Link>
              <NotificationsOutlinedIcon />
            </Link>  </IconButton>
          
            
            <IconButton>
            <Link >
              <SettingsOutlinedIcon />
              </Link>
           
            </IconButton>
            <IconButton  sx={{color:'white'}} >
            <Link  to='/contacts'>
              <EmailIcon justifycontent='center' />
              </Link>
            </IconButton>
          <FormControl sx={{width:'35px',marginLeft:'0px'}}>
          <InputLabel id="my-select-label">Select an option</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={language}
        onChange={handleChange}
        IconComponent={LanguageIcon}
        className='select'
      > 
        {languages.map((item) => (
          <MenuItem key={item.country_code} 
           onClick={()=>i18next.changeLanguage(item.code)}>
         {item.name}
          </MenuItem>
        ))}
     
      </Select>
    </FormControl> 
    </Box>   
         </Box>
      );
}


export default AppBarNav;