import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../src/components/theme.js";

import React,{useEffect,useState} from "react";
import axios from "axios";

import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
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



const Team = () => {
  const {t}=useTranslation();


  const[rows,setRows]=useState([]);


  useEffect(()=>{
    axios.get('http://localhost:3001/products')
    .then(result=>setRows(result.data))
    .catch(err=>console.log(err))
    },[])
  

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
  
    {
      field: "name",
      headerName:i18next.t('name-label'),
      flex: 1,
      cellClassName: "name-column--cell",
    },  
    { field: "customer",
      headerName:i18next.t('customer-label'),
      flex: 1,
      cellClassName: "name-column--cell",
    },
  
    {
      field: "date",
      headerName:i18next.t('date-label'),
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "totalSale",
      headerName:i18next.t('total-sale'),
      flex: 1,
      cellClassName: "name-column--cell",
    },
  
   
    {
      field: "description",
      headerName:i18next.t('description-label'),
      flex: 1,
      
    },
    
     { field: '_id', headerName: i18next.t('actions-label'), width: 100 , renderCell: RenderActionsButton },
  ];


    
  const handleDelete=(id)=>{
    const confirm =window.confirm('Are you sure?');
    if(confirm){
        axios.delete('http://localhost:3001/deleteProduct/'+id)
    .then(res=>{console.log(res)    
          window.location.reload() 

    })
    .catch(err=>console.log(err))
    }}



  function RenderActionsButton(row) {  
     return (
      <Button sx={{ backgroundColor: colors.redAccent[300]}} color="warning" onClick={()=>handleDelete(row.id)}>
        <Typography sx={{ color: colors.primary[300]}}>Sil</Typography>
      </Button>
    );
    
  
  }




  return (
  
      <Box sx={{justifyContent:'center'}} m="20px" >
      <Box
        m="40px 0 0 0"
        height="62vh"
       padding='12px'
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          alignItems:'center'
        }}
      >
       

        <DataGrid   disableRowSelectionOnClick  disableColumnMenu pagination
  initialState={{
    pagination: {
      paginationModel: {
        pageSize: 5,
        // pageSizeOptions:[10,15,20]
      },
    },
  }} rows={rows}   getRowId={(row) => row._id} columns={columns} />

         
 </Box>  
       <Link to="/createProduct" >
                <Fab variant="extended" sx={{ textAlign: 'center',width:'98%',borderRadius:'20px' ,  backgroundColor: colors.greenAccent[300], padding:'0px', margin:'10px', alignItems:'right'}}>
                <NavigationIcon sx={{ mr: 1 }} />
                {t("add-products-button")}
                    </Fab>
            </Link>
        
    </Box> 

  );
};

export default Team;
