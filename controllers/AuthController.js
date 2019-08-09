// const jwt = require('jsonwebtoken');
// // const connection = require('../conn');
// // const response = require('../res');
// // const bcrypt = require('bcrypt');
// const validator = require('validator');
// const models = require('../models');

// exports.signUp = function(req,res){
//     const {name,username,email,password} = req.body;

//     if(validator.isEmpty(name) || validator.isEmpty(username) || validator.isEmpty(email) || validator.isEmpty(password)){
//         res.status(401).json({ message:"tidak boleh kosong"})
//     }
//     else if(!validator.isEmail(email)){
//         res.status(401).json({ message:"maaf harus email"})
//     }
//     else{
//         bcrypt.hash(password,10, async (err,hash) =>{
//                 if(err){
//                     console.log(err);
//                 } 
//                 else{
//                   try{
//                     const user = await models.user.create({
//                         name,username,email,
//                         password:hash
//                     })
  
//                     if(user){
//                       res.status(200).send({message:'Success Sing Up', user:{name,username,email}})
//                     }
//                   }
//                   catch(e){
//                       console.log(e);
//                   }

//                 }
//             });
//     }
// }

// exports.sigIn = async function(req,res){
//     const {email,password} = req.body;

//     try{
//         const user = await models.user.findOne({ where:{email: email} });

//         if(user){
//             const id = user.id;
//             const username = user.username;
//             const email = user.email;

//             const checkLogin = bcrypt.compareSync(password,user.password);
//             if(checkLogin){
//                 var token = jwt.sign({ id,username,email }, 'sshhsshh');
//                 if(token){
//                     res.status(200).json({
//                         message: "Success Sign In",
//                         token: token
//                     });
//                 }
//             }
//             else{
//                 res.status(200).json({
//                     message: "Failed Sign in"
//                 })
//             }
//         }
//     }
//     catch(e){
//         console.log(e);
//     }

// }
