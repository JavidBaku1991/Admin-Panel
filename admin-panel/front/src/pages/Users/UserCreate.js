import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {  Stack, Button,FormControl,TextField,Box,Checkbox,FormControlLabel,FormGroup} from '@mui/material'
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


function UserCreate(){

    const[username,setName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[isactive,setIsActive]=useState('Aktiv deyil');
    const[isadmin,setIsAdmin]=useState('Admin deyil');
    const navigate=useNavigate();

    const {t}=useTranslation();
    // const headers = {
    //     'Content-Type': 'application/json', 
    //   };


       const headers = {
   'Authorization': `Bearer TOKEN`

    };



 



function submit(e){
e.preventDefault();
axios.post('http://localhost:3001/createUser',{username,lastName, email,password,isactive,isadmin},{ headers })
.then(result=>{console.log(result)
navigate('/users')
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

                    <FormControl class='control'>
                    <TextField
                    label={t('name-label')}
                    variant="outlined"
                    autoComplete="none"
                    onChange={(e)=>setName(e.target.value)}
                    value={username}
                    sx={{backgroundColor:'primary.veryLight'}}
                    fullWidth 
                    name='input1'
                    />
                    </FormControl>
                    <FormControl class='control'>
                    <TextField
                    label={t('lastname-label')}
                    variant="outlined"
                    fullWidth 
                    name='input3'
                    autoComplete="none"
                    onChange={(e)=>setLastName(e.target.value)}
                    value={lastName}
                    sx={{backgroundColor:'primary.veryLight'}}
                    />
                    </FormControl>
                    <FormControl class='control'>
                    <TextField
                    label={t('email-label')}
                    type="email"
                    variant="outlined"
                    fullWidth 
                    name='input3'

                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    sx={{backgroundColor:'primary.veryLight'}}
                    />
                    </FormControl>
                    <FormControl class='control'>
                    <TextField
                    label={t('password')}
                    type="password"
                    variant="outlined"
                    fullWidth 
                    name='input4'
                    autoComplete="new-password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    sx={{backgroundColor:'primary.veryLight'}}
                    />
                    </FormControl>
                    <FormGroup sx={{position:'relative',marginLeft:'-330px'}}>
                            <FormControlLabel  
                                name='input6'
                            value={isactive} onClick={() => setIsActive('Aktivdir')} control={<Checkbox  />} label={t('active-label')} sx={{color:'primary'}}/>
                            <FormControlLabel  
                                name='input5'
                            value={isadmin} onClick={() => setIsAdmin('Admindir')} control={<Checkbox />} label={t('admin-label')} sx={{color:'primary'}}/>
                          
                </FormGroup>
                    <Button type="submit" variant="contained" color="primary" sx={{marginTop:'10px'}}>
                    {t('add-label')}
                    </Button>


                    </form>

                </Stack>

               
        </Box>
        
        </>
       
        
               
    )
}

export default UserCreate;


