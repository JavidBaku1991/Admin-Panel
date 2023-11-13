import { Box, colors } from "@mui/material";
import GeoChart from "./GeoChart.js";
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
<Typography variant="h2" sx={{textAlign:'center',marginTop:'-50px'}}>{t("geo-chart-header")}</Typography>
  <Typography variant="h5" sx={{textAlign:'center',marginBottom:'10px'}}>{t("geo-chart-header-sub")}</Typography>
      <Box height="65vh" margin={'30px 10px 20px 140px'} sx={{ width:'1200px',border:`1px solid ${colors.grey[100]}`}}>
  
      <GeoChart/>
      </Box>
    </Box>
  );
};

export default BarChartPage;