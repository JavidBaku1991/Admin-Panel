import {  Stack, Button,FormControl,TextField, Typography, Divider} from '@mui/material'
import emailjs from 'emailjs-com'
import AppBarNav from '../components/AppBar'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { tokens } from "../components/theme.js";
import { colors, useTheme } from "@mui/material";
import LeafletMap, { Map } from '../components/LeafletMap.js'
import DrawerComponent from '../components/DrawerComponent.js'




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

function Contacts(){

 
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate=useNavigate();
  const {t}=useTranslation();


  
  const sendEmail =(e)=>{

      e.preventDefault()
      emailjs.sendForm('service_ysyc8i5','template_euythy7',e.target,'i3sxReahkPichYdF9').then(res=>{
        console.log(res);
      }).catch(err=>console.log(err))
      navigate('/')
  }
  


    return(
        <>
                    <div className='fon'>

                    <AppBarNav/>
                    <DrawerComponent/>
                  
                       
          <Stack   
                    sx={{
                        position: 'absolute',
                        top:' 55%',
                        left:' 50%',
                        transform: 'translate(-50%, -50%)',
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:"space-around",
                        border:'1px solid grey',
                        width:'1300px',
                        height:'85%',

                        
                    }}
                    className='stack'
                    >    
                         <Typography variant='h1' sx={{position:'absolute',marginTop:'30px'}}>{t('contact-us')}
                         <Divider className='divider' />
                         </Typography>
                       
                 
                    <Box class='left-contact'
                    > 
                      

                          <Box className='contacts-field'>
                                
                                <Typography variant='h6' sx={{marginTop:'80px'}}> <span className='contacts-span'>{t("number")}:</span> +994709209747 </Typography>
                    
                                <Typography variant='h6' sx={{marginTop:'10px'}} > <span className='contacts-span'>{t('email-label')}:</span>  cavid-de-baku91@mail.ru </Typography>
                     
                                <Typography variant='h6' sx={{margin:'10px 0px 20px 0px'}} > <span className='contacts-span'>{t('address')}:</span>  Baku, N.Nerimanov district, <br></br> F.Yusifov street 30A, ap.3 </Typography>
                                <Divider/>
                           
                              </Box>
                              <Box className='map'>
                               <LeafletMap />
                              </Box>
                      </Box>             
                   
                       <Box class='right-contact'
                       sx={{
                        position:'relative',
                        top:'50px',
                        right:'-700px',
                        border:'1px solid green'

                       }}
                       >                

                    <form  className="form-contacts"  onSubmit={sendEmail}>
                        <Typography></Typography>
                      <FormControl class='control'>
                    <TextField
                    type='text'
                    label="Ad"
                    name='name'
                    variant="outlined"
                    autoComplete="none"
                    sx={{backgroundColor:'primary.veryLight'}}
                    fullWidth 
                    required
                   
                    />
                    </FormControl>
                   
                    
                    <FormControl class='control'>
                    <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth 
                    sx={{backgroundColor:'primary.veryLight'}}
                    name='email'
                    required
                    />
                    </FormControl>
                    
                    <FormControl class='control'>
                    <TextField
                    label="Əlaqə"
                    type="number"
                    variant="outlined"
                    fullWidth 
                    autoComplete="new-password"
                    sx={{backgroundColor:'primary.veryLight'}}
                    name='number'
                    required
                    />
                    </FormControl>
                    <FormControl  className='control'>
                                    <TextField
                    id="my-textarea"
                    label="Mesaj"
                    multiline
                    rows={4} // Number of visible rows
                    variant="outlined"
                    name='message'
                    sx={{backgroundColor:'primary.veryLight'}}
                    required
                    />
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" sx={{marginTop:'10px'}}
                   >
                    {t('send')}
                    </Button>


                     
                    

                    </form>
 </Box>
                </Stack>


                
                   
               
                    </div>

               
        
        </>
       
        
               
    )
}

export default Contacts;


// npm install --legacy-peer-deps --save typescript packagename 
