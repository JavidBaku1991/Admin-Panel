import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {  Stack, Button,FormControl,TextField,Box} from '@mui/material'
import AppBarNav from "../../components/AppBar";


function EmployeesCreate(){

    const[name,setName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');
    const[address,setAddress]=useState('');
    const[number,setNumber]=useState('');

    const navigate=useNavigate();

    const headers = {
        'Content-Type': 'application/json', 
      };


function submit(e){
e.preventDefault();
axios.post('http://localhost:3001/createEmployee',{name,lastName, email,address,number},{ headers })
.then(result=>{console.log(result)
navigate('/employees')
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
                    label="Ad"
                    variant="outlined"
                    autoComplete="none"
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    sx={{backgroundColor:'primary.veryLight'}}
                    fullWidth 
                    name='input1'

                    />
                    </FormControl>
                    <FormControl class='control'>
                    <TextField
                    label="Soyad"
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
                    label="Email"
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
                    label="Adres"
                    type="text"
                    variant="outlined"
                    fullWidth 
                    name='input4'
                    autoComplete="new-password"
                    onChange={(e)=>setAddress(e.target.value)}
                    value={address}
                    sx={{backgroundColor:'primary.veryLight'}}
                    />
                    </FormControl>
                    <FormControl class='control'>
                    <TextField
                    label="Əlaqə"
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
                    Əlavə et
                    </Button>


                    </form>

                </Stack>

               
        </Box>
        
        </>
       
        
               
    )
}

export default EmployeesCreate;


