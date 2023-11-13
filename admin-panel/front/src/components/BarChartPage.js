import { Box, colors } from "@mui/material";
import BarChart from "./BarChart.js";
import AppBarNav from "./AppBar";
import DrawerComponent from "./DrawerComponent";
import { Typography } from "@mui/material";


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

const BarChartPage = () => {

  const {t}=useTranslation();
  


  return (
    <Box >
<AppBarNav/>
<DrawerComponent/>
  <Typography variant="h2" sx={{textAlign:'center',marginTop:'-50px'}}>{t("bar-chart-header")}</Typography>
  <Typography variant="h5" sx={{textAlign:'center',marginBottom:'10px'}}>{t("bar-chart-header-sub")}</Typography>
      <Box height="75vh" width="88vw" margin={'10px 10px 20px 90px'} sx={{border:`2px solid ${colors.grey[700]}`}}>


      <BarChart/>
      </Box>
    </Box>
  );
};

export default BarChartPage;