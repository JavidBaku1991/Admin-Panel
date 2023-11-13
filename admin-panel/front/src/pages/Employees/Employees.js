import React, { Fragment } from 'react'
import AppBarNav from '../../components/AppBar';
import EmployeesTable from './EmployeesTable.js';
import  DrawerComponent  from '../../components/DrawerComponent.js';
import { Typography } from '@mui/material';


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



 const Employees = () => {

  const {t}=useTranslation();

  return( <>
   

    <AppBarNav />
     <div className='employeesTabelContainer' >
         <DrawerComponent/>    
          <Typography variant="h3" textAlign='center'  >{t("employees-name")}</Typography>
      
       
                  <EmployeesTable/> 
    </div>
    
     </>)
                  
  
}

export default Employees;
