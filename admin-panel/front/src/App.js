import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home.js'
import Users from './pages/Users/Users.js'
import  Customers  from '../src/pages/Customers/Customers.js';
import  Employees  from './pages/Employees/Employees.js';

import UserCreate from './pages/Users/UserCreate.js'
import {  ThemeProvider  } from '@mui/material/styles';
import EmployeesCreate from './pages/Employees/EmployeesCreate'
import CustomersCreate from './pages/Customers/CustomersCreate';
import  Contacts  from './pages/Contacts.js';
import Products from '../src/Products/Products';
import ProductsCreate from '../src/Products/ProductsCreate';
import Login from './pages/login/Login.js'
import { CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "./components/theme";import Calendar from './pages/calendar/calendar.js';
import Faqs from './pages/Faqs.js'
import Bar from './components/BarChartPage.js';
import PieChartPage from './components/PieChartPage.js';
import LineChartPage from './components/LineChartPage.js';
import GeoChartPage from './components/GeoChartPage.js';
function App() {



//   const theme = createTheme({
//     palette: {
//       primary: {
//         main: '#3e2723', 
//         light:'#5d4037',
//         lighter:'#795548',
//         veryLight:'#a1887f'
//       },
//       secondary: {
//         main: '#4e342e', // Set your secondary color here
//       },
      
//     },
    
// });

const [theme, colorMode] = useMode();


  return (<div>
     <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />

       <BrowserRouter>
      <Routes>
             <Route path='/login'  element={<Login/>}></Route>
               <Route element={<Home />} path='/'  exact/>

              <Route path='/users'  element={<Users/>}></Route>
              <Route path='/createUser'  element={<UserCreate/>}></Route>

              <Route path='/customers'  element={<Customers/>}></Route>
              <Route path='/createCustomers'  element={<CustomersCreate/>}></Route>


              <Route path='/employees'  element={<Employees/>}></Route>
              <Route path='/createEmployee'  element={<EmployeesCreate/>}></Route>

              <Route path='/calendar'  element={<Calendar/>}></Route>
              <Route path='/products'  element={<Products/>}></Route>


              <Route path='/faqs'  element={<Faqs/>}></Route>

              <Route path='/products'  element={<Products/>}></Route>
              <Route path='/createProduct'  element={<ProductsCreate/>}></Route>
              
              
              <Route path='/contacts'  element={<Contacts/>}></Route>


              <Route path='/barchart'  element={<Bar/>}></Route>
              <Route path='/piechart'  element={<PieChartPage/>}></Route>
              <Route path='/linechart'  element={<LineChartPage/>}></Route>
              <Route path='/geochart'  element={<GeoChartPage/>}></Route>


      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </ColorModeContext.Provider>
   
  </div>
    
  );
}

export default App;
