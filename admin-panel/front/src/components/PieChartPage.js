import { Box } from "@mui/material";
import PieChart from "./PieChart.js";
import AppBarNav from "./AppBar";
import DrawerComponent from "./DrawerComponent";
import { Typography,colors } from "@mui/material";


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
    <Box >
<AppBarNav/>
<DrawerComponent/>

  <Box height="70vh" width="85vw" margin={'40px 10px 20px 90px'} sx={{border:`2px solid ${colors.grey[700]}`,backgroundColor:colors.grey[400],border:`1px solid ${colors.grey[100]}`}}>
  <Typography variant="h2" sx={{textAlign:'center',marginTop:'-70px'}}>{t("pie-chart-header")}</Typography>
  <Typography variant="h5" sx={{textAlign:'center',marginBottom:'-10px'}}>{t("pie-chart-header-sub")}</Typography>   
     <Box height="65vh" margin={'50px 10px 60px 70px'}>
        <PieChart />
      </Box>
      </Box>
    </Box>
  );
};

export default PieChartPage;