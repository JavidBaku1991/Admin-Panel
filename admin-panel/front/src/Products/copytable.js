import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography,Button, Stack} from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';






export default function CustomersTable() {


  const[rows,setRows]=useState([]);
  useEffect(()=>{
        axios.get('http://localhost:3001/products')
        .then(result=>setRows(result.data))
        .catch(err=>console.log(err))
        },[])


        const handleDelete=(id)=>{
          const confirm =window.confirm('Are you sure?');
          if(confirm){
              axios.delete('http://localhost:3001/deleteProduct/'+id)
          .then(res=>{console.log(res)
          window.location.reload() })
          .catch(err=>console.log(err))
          }
        }



  return (
    <>
    <Paper component={Paper} sx={{marginTop:'16px'}}>

    <div className='button-container'>

    <Link to="/createProducts" >
                <Fab variant="extended" sx={{ textAlign: 'right',width:'300px', borderRadius:'20px' ,   backgroundColor:'primary.lighter', padding:'0px', margin:'10px', alignItems:'right'}}>
          <NavigationIcon sx={{ mr: 1 }} />
          YENİ MƏHSUL ƏLAVƏ ET
               </Fab>
            </Link>
    </div>

        <TableContainer className='table-container' >
      <Typography variant="h5"  sx={{color:'primary', textAlign:'center'}}>Müştərilər</Typography>
      <Table  sx={{margin:'16px 32px', width:'90%',marginX:'auto'}} className='userTable'>

        <TableHead  >
          <TableRow className='userTableRow' >
            <TableCell  >İD</TableCell>
            <TableCell  >Ad</TableCell>
            <TableCell align="left">Tarix</TableCell>
            <TableCell align="left">Ümumi məbləğ</TableCell>
            <TableCell align="left">Məlumat</TableCell>
            <TableCell align="left">Alıcı</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id} sx={{
              '&:hover': {
                backgroundColor: 'primary.veryLight', 
              }
            }} >
              <TableCell component="th" scope="row"> {row._id} </TableCell>            
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.totalSale}</TableCell>            
              <TableCell align="left">{row.description}</TableCell>            
              <TableCell align="left">{row.customer}</TableCell>            
              <TableCell>
                    <Button  onClick={(e)=>handleDelete(row._id)} variant="contained">Sil</Button>
              </TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Stack justify="center" alignItems="center">
    
    </Stack>

    </Paper>
  

    </>
    
  );
}