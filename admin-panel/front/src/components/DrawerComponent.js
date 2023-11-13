import {Typography,Drawer,IconButton,Box,ListItemButton ,List,ListItemText,useTheme, Divider} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from '@mui/material/Link';
import React,{useState} from 'react'
import { tokens } from "./theme";

import GroupIcon from '@mui/icons-material/Group';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import BadgeIcon from '@mui/icons-material/Badge';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import BarChartIcon from '@mui/icons-material/BarChart';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import TimelineIcon from '@mui/icons-material/Timeline';
import PublicIcon from '@mui/icons-material/Public';


import i18next from 'i18next'
import {useTranslation, initReactI18next } from 'react-i18next';
import  LanguageDetector  from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'
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


 export default function DrawerComponent  ()  {
    const [isDraerOpen,setIsDrawerOpen]=useState(false)
   const theme = useTheme();
    const colors = tokens(theme.palette.mode);

 const {t}=useTranslation();



  return (
    <>
      <Box
      sx={{
        position: 'sticky'
      }}
    >
     <IconButton
size='large'
edge='end'
color='inherit'
aria-label='logo'
onClick={()=>{setIsDrawerOpen(true)}}
>
    <MenuIcon />
</IconButton>
</Box>
<Drawer anchor='left' open={isDraerOpen} onClose={()=>{setIsDrawerOpen(false)}}>
    <Box p={2} width='240px' textAlign='center' justifyContent='center' role='presentation' >
    <img
                  alt="profile-user"
                  width="100px"
                  height="100px"y
                  src={'../../images/1.jpg'}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />

                <Typography variant='h4' >{t('admin-name')}</Typography>
                <Typography variant='h6' >{t("programmer")}</Typography>
                <Divider
                style={{ backgroundColor:colors.primary[100], height: '2px' }}
                />
            <Typography variant='h5' component='div' marginTop='20px' >
                    {t('panel-menu')}
            </Typography>
            <List 
          sx={{ width: '100%', maxWidth: 360,color:'primary'}}
            >
                    <ListItemButton  component={Link} to="/users" sx={{ textAlign: 'center' ,backgroundColor:'primary.lighter',marginTop:'3px'  ,  '&:hover': {
          backgroundColor: colors.redAccent[400], 
        }}}>
                        <GroupIcon />
                        <ListItemText primary={t('users-name')} textAlign='center' > </ListItemText>
                    </ListItemButton>
                    <Divider   style={{ backgroundColor:colors.greenAccent[700], height: '1px' }}/>

                    <ListItemButton component={Link} to="/customers" sx={{ textAlign: 'center',backgroundColor:'primary.lighter',marginTop:'3px' ,  '&:hover': {
          backgroundColor: colors.redAccent[400],
        }}}>  
                      <LocalGroceryStoreIcon/>
                        <ListItemText primary={t('customers-name')} textAlign='center' ></ListItemText>
                    </ListItemButton>
                    <Divider   style={{ backgroundColor:colors.greenAccent[700], height: '1px' }}/>




                    <ListItemButton  component={Link} to="/employees"sx={{ textAlign: 'center' ,marginTop:'3px' ,  '&:hover': {
          backgroundColor: colors.redAccent[400],
        }}}>
                        <BadgeIcon />
                        <ListItemText primary={t('employees-name')} textAlign='center' >
                      </ListItemText>
                    </ListItemButton>
                    <Divider   style={{ backgroundColor:colors.greenAccent[700], height: '1px' }}/>



            <Typography variant='h5' component='div'  margin='30px 0px' >
            {t('works-name')}
                        </Typography>


                    <ListItemButton  component={Link} to="/products"sx={{ textAlign: 'center',backgroundColor:'primary.lighter',marginBottom:'3px'  ,  '&:hover': {
          backgroundColor: colors.redAccent[400],
        }}}>
                        <QrCode2Icon />
                        <ListItemText primary={t('products-name')} textAlign='center' >
                      </ListItemText>
                    </ListItemButton>
                    <Divider   style={{ backgroundColor:colors.greenAccent[700], height: '1px' }}/>

                  
                    <ListItemButton  component={Link} to="/sales"sx={{ textAlign: 'center' ,backgroundColor:'primary.lighter',marginTop:'3px' ,  '&:hover': {
          backgroundColor: colors.redAccent[400],
        }}}>
                      <PointOfSaleIcon/>
                        <ListItemText primary={t('sales-name')} textAlign='center' >
                      </ListItemText>
                    </ListItemButton>
              
                    <Divider   style={{ backgroundColor:colors.greenAccent[700], height: '1px' }}/>

                    <ListItemButton component={Link} to="/calendar" sx={{ textAlign: 'center',backgroundColor:'primary.lighter',marginTop:'3px'  ,  '&:hover': {
          backgroundColor: colors.redAccent[400],
        }}}>   <CalendarMonthIcon/>
                        <ListItemText primary={t('calendar-name')} textAlign='center' > </ListItemText>
                    </ListItemButton>
                    <Divider   style={{ backgroundColor:colors.greenAccent[700], height: '1px' }}/>

                  
              
                    <ListItemButton component={Link} to="/faqs" sx={{ textAlign: 'center',backgroundColor:'primary.lighter',marginTop:'3px'  ,  '&:hover': {
          backgroundColor: colors.redAccent[400],
        }}}>   <LiveHelpIcon/>
                        <ListItemText primary={t('faqs-name')} textAlign='center' > </ListItemText>
                    </ListItemButton>
                    <Divider   style={{ backgroundColor:colors.greenAccent[700], height: '1px' }}/>



                    <Typography variant='h5' component='div'   margin='30px 0px' >
{t('charts')}
            </Typography>

              
                    <ListItemButton component={Link} to="/barchart" sx={{ textAlign: 'center',backgroundColor:'primary.lighter',marginTop:'3px'  ,  '&:hover': {
          backgroundColor: colors.redAccent[400],
        }}}>  <BarChartIcon />
                        <ListItemText primary={t("bar-chart")} textAlign='center' > </ListItemText>
                    </ListItemButton>
                    <Divider   style={{ backgroundColor:colors.greenAccent[700], height: '1px' }}/>


                    <ListItemButton component={Link} to="/piechart" sx={{ textAlign: 'center',backgroundColor:'primary.lighter',marginTop:'3px'  ,  '&:hover': {
          backgroundColor: colors.redAccent[400],
        }}}>  <DonutSmallIcon />
                        <ListItemText primary={t("pie-chart")} textAlign='center' > </ListItemText>
                    </ListItemButton>
                    <Divider   style={{ backgroundColor:colors.greenAccent[700], height: '1px' }}/>


                    <ListItemButton component={Link} to="/linechart" sx={{ textAlign: 'center',backgroundColor:'primary.lighter',marginTop:'3px'  ,  '&:hover': {
          backgroundColor: colors.redAccent[400],
        }}}>  <TimelineIcon />
                        <ListItemText primary={t("line-chart")} textAlign='center' > </ListItemText>
                    </ListItemButton>
                    <Divider   style={{ backgroundColor:colors.greenAccent[700], height: '1px' }}/>

                  
                    <ListItemButton component={Link} to="/geochart" sx={{ textAlign: 'center',backgroundColor:'primary.lighter',marginTop:'3px'  ,  '&:hover': {
          backgroundColor: colors.redAccent[400],
        }}}>  <PublicIcon />
                        <ListItemText primary={t("geo-chart")} textAlign='center' > </ListItemText>
                    </ListItemButton>
                    <Divider   style={{ backgroundColor:colors.greenAccent[700], height: '1px' }}/>

                  

            </List>

            {/*  */}

    </Box>
</Drawer>
    </>
   
  )
}


