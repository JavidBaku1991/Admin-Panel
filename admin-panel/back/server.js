const express=require('express')
const mongoose =require('mongoose')

require('dotenv').config()
const cors =require('cors')
const app=express()
const UserSchema= require('./users/UserModels')
const EmployeeModel = require('./users/EmployeeModel')
const CustomerSchema= require('./users/CustomerModel')
const ProductsSchema= require('./users/ProductModel')
require('dotenv').config();
const cookieParser =require ('cookie-parser')
const bcrypt = require('bcrypt')
const dateModel = require('./users/dateModel')

app.use(express.json())
app.use(cookieParser())
app.use(cors())

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true,
}).then(()=>console.log("MONGODB connected")).catch((err)=>console.log(err))


// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
  
//     const user = await UserSchema.findOne({ where: { username: username } });
  
//     if (!user) res.status(400).json({ error: "User Doesn't Exist" });
  
//     const dbPassword = user.password;
//     bcrypt.compare(password, dbPassword).then((match) => {
//       if (!match) {
//         res
//           .status(400)
//           .json({ error: "Wrong Username and Password Combination!" });
//       } else {
//         const accessToken = createTokens(user);
  
//         res.cookie("access-token", accessToken, {
//           maxAge: 60 * 60 * 24 * 30 * 1000,
//           httpOnly: true,
//         });
  
//         res.json("Success");
//       }
//     });
//   });

app.post('/login', (req,res)=>{
    const{username,password}=req.body;
  
    
    UserSchema.findOne({username:username})
    .then(user=>{
      if(user){
          if(user.password===password, user.isactive==='Aktivdir'){
  
              res.json('Success')
  
             }else{
              res.json('Istifadeci aktiv deyil')
              
          }
      }else{
          res.json('Bele bir istifadeci yoxdur')
      }}
  
  
    )
})

app.post("/createUser", (req, res) => {
    const { username,lastName ,email,password,isactive,isadmin} = req.body;
    bcrypt.hash(password, 10).then((hash) => {
      UserSchema.create({
        username: username,
        lastName: lastName,
        email:email,
        password: hash,
         isactive:isactive,
        isadmin:isadmin
       
      })
        .then(() => {
          res.json("USER REGISTERED");
        })
        .catch((err) => {
          if (err) {
            res.status(400).json({ error: err });
          }
        });
    });
  });
  
  app.get('/users', (req,res)=>{
    UserSchema.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    UserSchema.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})



app.get('/employees', (req,res)=>{
    EmployeeModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.post('/createEmployee',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.delete('/deleteEmployee/:id',(req,res)=>{
    const id=req.params.id;
    EmployeeModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})



app.get('/customers', (req,res)=>{
    CustomerSchema.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.post('/createCustomers',(req,res)=>{
    CustomerSchema.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.delete('/deleteCustomer/:id',(req,res)=>{
    const id=req.params.id;
    CustomerSchema.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})

app.get('/products', (req,res)=>{
    ProductsSchema.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.post('/createProduct',(req,res)=>{
    ProductsSchema.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.delete('/deleteProduct/:id',(req,res)=>{
    const id=req.params.id;
    ProductsSchema.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})


app.post('/createDate',(req,res)=>{
    dateModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})


// app.put('/updateUser/:id',(req,res)=>{
//     const id=req.params.id;
//     UserSchema.findByIdAndUpdate({_id:id},
//         {name:req.body.name,
//         email:req.body.email,
//         age:req.body.age}
//         ).then(users=>res.json(users))
//         .catch(err=>res.json(err))
// })
// app.get('/getUser/:id',(req,res)=>{
//     const id=req.params.id;
//     UserSchema.findById({_id:id})
//     .then(users=>res.json(users))
//     .catch(err=>res.json(err))
// })
// app.get('/read/:id',(req,res)=>{
//     const id=req.params.id;
//     UserSchema.findById({_id:id})
//     .then(users=>res.json(users))
//     .catch(err=>res.json(err))
// })



// app.delete('/deleteIstifadeci/:id',(req,res)=>{
//     const id=req.params.id;
//     IstifadeciSchema.findByIdAndDelete({_id:id})
//     .then(res=>res.json(res))
//     .catch(err=>res.json(err))
// })




app.listen(3001,console.log(`listening at port 3001 `))

// })
