import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {  Stack, Button,FormControl,TextField,Box} from '@mui/material'
import AppBarNav from "../../components/AppBar";


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


function CustoomersCreate(){

    const[name,setName]=useState('');
    const[lastName,setLastName]=useState('');
    const[number,setNumber]=useState();
    const navigate=useNavigate();
    const headers = {
        'Content-Type': 'application/json', 
      };

      const {t}=useTranslation();



function submit(e){
e.preventDefault();
axios.post('http://localhost:3001/createCustomers',{name,lastName, number},{ headers })
.then(result=>{console.log(result)
navigate('/customers')
})
.catch(err=>console.log(err))
}


  

    return(
        <>
         <AppBarNav/>
        <Box
        sx={{
            width: '100vw',
            height: '100vh',
          }}
        >
                    <Stack  
                    sx={{
                        position: 'absolute',
                        top:' 50%',
                        left:' 50%',
                        transform: 'translate(-50%, -50%)',
                        
                    }}
                    >
                    <form onSubmit={submit}  className="form" >

                    <FormControl className='control'>
                    <TextField
                    label={t('name-label')}
                    variant="outlined"
                    autoComplete="none"
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    sx={{backgroundColor:'primary.veryLight', marginBottom:'20px'}}
                    fullWidth 
                    name='input1'

                    />
                    </FormControl>
                    <FormControl className='control'>
                    <TextField
                    label={t('lastname-label')}
                    variant="outlined"
                    fullWidth 
                    name='input3'

                    autoComplete="none"
                    onChange={(e)=>setLastName(e.target.value)}
                    value={lastName}
                    sx={{backgroundColor:'primary.veryLight', marginBottom:'20px'}}
                    />
                    </FormControl>
                   
                    <FormControl className='control'>
                    <TextField
                    label={t('number')}
                    type="text"
                    variant="outlined"
                    fullWidth 
                    name='input4'
                    autoComplete="new-password"
                    onChange={(e)=>setNumber(e.target.value)}
                    value={number}
                    sx={{backgroundColor:'primary.veryLight'}}
                    />
                    </FormControl>
                    
                    <Button type="submit" variant="contained" color="primary" sx={{marginTop:'10px'}}>
                    {t('add-label')}
                    </Button>


                    </form>

                </Stack>

               
        </Box>
        
        </>
       
        
               
    )
}

export default CustoomersCreate;


