import  React ,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ErrorModal from './ErrorModal';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to='/'>
        myadminpanel.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );

}






const defaultTheme = createTheme();

const Login =()=>{
  const[password,setPassword]=useState();
  const[username,setUsername]=useState();
  const [error, setError] = useState(null);
  const navigate=useNavigate();




  function submit(e){
    e.preventDefault();
    axios.post('http://localhost:3001/login',{username, password})
    .then(result=>{console.log(result)
 
console.log(result.token)
  axios.defaults.headers.common['Authorization']=`Bearer ${result['token']}`
    if(result.data==="Success"){
        navigate('/', {replace:true})
    } else{
        setError('An error occurred while fetching data. Please try again later.');
    }
    })
    }
    



  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='fon'
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'brown' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Daxil ol
            </Typography>
            <Box component="form" noValidate onSubmit={submit} sx={{ mt: 1 }}>
            
              <TextField
                margin="normal"
                required
                fullWidth
                label="İstifadəçi adı"
                autoComplete="off"
                autoFocus
                onChange={(e)=>setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Şifrə"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>setPassword(e.target.value)}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,backgroundColor:'brown'}}
              >
               Daxil Ol
              </Button>
               {error &&<ErrorModal />}
            
          
              <Copyright sx={{ mt: 5 }} /> 
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;