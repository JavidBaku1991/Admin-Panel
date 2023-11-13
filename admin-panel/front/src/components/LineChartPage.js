import { Box,colors } from "@mui/material";
import LineChart from "./LineChart.js";
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

const PieChartPage = () => {

  const {t}=useTranslation();


  return (
    <Box>
<AppBarNav/>
<DrawerComponent/>
  <Box height="75vh" width="80vw" margin={'10px 10px 20px 150px'} sx={{backgroundColor:colors.grey[400],border:`2px solid ${colors.grey[700]}`}}>


<Typography variant="h2" sx={{textAlign:'center',marginTop:'-70px'}}>{t("line-chart-header")}</Typography>
  <Typography variant="h5" sx={{textAlign:'center',marginBottom:'10px'}}>{t("line-chart-header-sub")}</Typography>  
      <Box height="68vh" margin={'60px 10px 0px 70px'}>

<LineChart/>

   </Box>
    </Box>
    </Box>
  );
};

export default PieChartPage;