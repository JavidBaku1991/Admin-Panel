import React, {useState,useEffect } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import AppBarNav from "../components/AppBar";
import { FormControl,TextField, Box,Stack,Button} from "@mui/material";



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



function ProductsCreate(){
    const [name, setName] = useState();
    const[date,setDate]=useState();
    const[totalSale,setTotalSale]=useState();
    const[description,setDescription]=useState();
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState('');
    const navigate=useNavigate();

    const {t}=useTranslation();

    useEffect(() => {
        axios.get('http://localhost:3001/customers')
          .then(response => {
            setCustomers(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);

      const handleSelectChange = (event) => {
        setCustomer(event.target.value);
      };



function submit(e){
e.preventDefault();
axios.post('http://localhost:3001/createProduct',{customer, name, date,totalSale,description})
.then(result=>{console.log(result)
navigate('/products')
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
                // variant="outlined"
                autoComplete="none"
                onChange={(e)=>setName(e.target.value)}
                value={name}
                fullWidth 
                name='input1'

                />
                </FormControl>
                <FormControl class='control'>
                <TextField
                label={t("total-sale")}
                // variant="outlined"
                fullWidth 
                autoComplete="none"
                onChange={(e)=>setTotalSale(e.target.value)}
                value={totalSale}
                // sx={{backgroundColor:'primary.veryLight'}}
                />    
                 </FormControl>  
 
             

                <FormControl class='control'>
                <TextField
                type={t("date")}
                // variant="outlined"
                fullWidth 
                name='input4'
                autoComplete="new-password"
                onChange={(e)=>setDate(e.target.value)}
                value={date}
                typeof="date"
                // sx={{backgroundColor:'primary.veryLight'}}
                >
                </TextField>
                </FormControl> 
                <FormControl class='control'>
                <TextField
                label={t("details")}
                type="text"
                // variant="outlined"
                fullWidth 
                name='input4'
                autoComplete="new-password"
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
                // sx={{backgroundColor:'primary.veryLight'}}
                />
                </FormControl>
                <select  
                value={customer}  onChange={handleSelectChange}  className="select">
                    <option class='option' value={t("choose")}></option>
                    {customers.map(customer=>(
                       <option   key={customer._id} value={customer.value}  >{customer.name}</option> 
                    )

                    )}
                </select>
           

          

                
                <Button type="submit" variant="contained" color="primary" sx={{marginTop:'10px'}}>
               YENİ MƏHSUL ƏLAVƏ EDİN
                </Button>


                </form>

            </Stack>

           
    </Box>
    
    </>
   
    
           
)
}

export default ProductsCreate;


