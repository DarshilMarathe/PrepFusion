const express = require("express")
const {body,validationResult}= require("express-validator")
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


const User = require("../models/User")
const fetchuser = require('../middleware/fetchuser')


const router = express.Router()

// // /auth
// router.post('/createuser',(req,res)=>{
//     console.log(req.body);

//     const user =  User(req.body);
//     user.save();

//     res.send(req.body);
// })


// ROUTE1:  Create user using: POST "/auth/createuser"    Doesnt require AUTH login
router.post('/createuser',[
    body('name').isLength({min : 5}),
    body('email' , 'Enter a valid mail').isEmail(),
    body('password').isLength({min : 5})
], async (req,res)=>{
    let success = false;
    // If there are errors, return bad request & errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) { //error not empty 
      return res.status(400).json({success , errors:errors.array()});
    // return res.send("ERR") -- my code
    }  


    try {
    //Check if user with same email exists    
    let user = await User.findOne({email : req.body.email});
    console.log(user)
    if(user){
        return res.status(400).json({success ,error:"User already exists"});
    } 

    //Hashing password
    const salt = await bcrypt.genSalt(10);
    const secpass = await bcrypt.hash(req.body.password,salt);
    //Create user
    user = await User.create({
        name : req.body.name,
        email : req.body.email,
        password : secpass,
    })
    // .then(user => res.json(user))
    // .catch(err => {console.log(err)
    // res.status(400).json({error:"Please entxer a unique email",message:err.message})})
    

    //Send Auth Token -- can verify by taking back auth token and get data and check if temperred -- read more
    const JWT_SECRET = "shhhh"

    //to be sent in auth token
    const data = {
        user:{
            id:user.id
        }
    }
    const authtoken = jwt.sign(data,JWT_SECRET)
    
    // console.log(authtoken);
    // res.json(user)
    success = true;
    res.json({success ,authtoken});

    }
     catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error Occured");
    }
    // res.send(req.body);//  --> as already sent in res.json
})

// ROUTE2: Authenticate a user: POST "/auth/login"    Doesnt require AUTH login
router.post('/login',[
    body('email' , 'Enter a valid mail').isEmail(),
    body('password','Cannot be blank').exists(),
], async (req,res)=>{
    let success = false;
     // If there are errors, return bad request & errors
     const errors = validationResult(req);
     if (!errors.isEmpty()) { //error not empty 
       return res.status(400).json({errors:errors.array()});
     }  

     //destructring
     const {email,password} = req.body;

     try {

        let user = await User.findOne({email});
        // console.log(user);
        if(!user){
            return res.status(400).json({success,error:"Incorrect Credentials"})
        }

        //comparing password with hashed password
        const passwordcompare = await bcrypt.compare(password,user.password);
        if(!passwordcompare){
            return res.status(400).json({success,error:"Incorrect Crendentials"})
        }
        

        //if valid credentials -- sign and send token
        const payload ={
            user:{
                id:user.id
            }
        }
        
         const JWT_SECRET = "shhhh"

        const authtoken = jwt.sign(payload,JWT_SECRET)
        success=true;
        res.json({success,authtoken});

        
     } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error Occured");
        // console.log("error")
     }

})

// ROUTE3: Get Logged in User Details :  '/auth/getuser' Login required
//     decode auth token -> get user id and pass it
//     Send a header of authentication token wherever auth required
   
router.post('/getuser', fetchuser , async (req,res)=>{
    //gets as user in req due to middleware
    try {

        const userId = req.user.id;
        //except password  everything
        const user = await User.findById(userId).select("-password");
        res.send(user);
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error Occured");
     }

})

module.exports = router