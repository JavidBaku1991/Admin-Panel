import React from 'react'
import AppBarNav from '../components/AppBar';
import ProductsTable from './ProductsTable';
import  DrawerComponent  from '../components/DrawerComponent.js';
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


 const Products = () => {

  const {t}=useTranslation();
  return (
    <>
    
    <AppBarNav />
    <DrawerComponent/>
    <Typography variant="h3" textAlign='center'  >{t("products-name")}</Typography>

    <ProductsTable />
    </>
    
    )
}

export default Products;
