const express = require ('express');
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;

const userSchema = require('../models/SignUpModels');
const { request, response } = require('express');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')


router.post("/signup", async (request, response) => {
   const salt = await bcrypt.genSaltSync(10)
   const pass = await bcrypt.hashSync(request.body.password, salt);
   //const pass = request.body.password;
 
 // check if the user already created
    const {email} = request.body;
    let user = await userSchema.findOne({email})
    if(user){
        console.log("There is already user with this email id")
        return response.status(401).json({ msg: "There is already user with this email id"})
    }

    const signedUpUser = new userSchema({
        email:request.body.email,
        username:request.body.username,
        address: request.body.address,
        role: request.body.role,
        password: pass,
        phone: request.body.phone
    })
   
    await signedUpUser.save();

    const payload = {
        user: {
            id : signedUpUser.id
        }
    }

//* TODO : have to understand jwt-token
    jwt.sign(
        payload,
        config.get('jwtSecret'),
        (err, token) => {
            if(err) throw err
            response.json({token});
            r
        }
    )
    return response.status(200).json({ msg: "Account created successfully!"})

})


router.post("/deleteuser", async(request, response) => {
    const {_id} = request.body;
    let user = await userSchema.findOne({_id});
   
    if(!user){
        console.log("There is no valid user with this  id")
        return response.status(401).json({ msg: "user not valid"})
    }
    
    userSchema.deleteOne({"_id":ObjectId(request.body._id)}, function(err, result) {
        if (err) {
            response.send(err);
        } else {
            response.status(200).json({ msg: "Data deleted successfully!"})
        }
      });
    
})

router.post("/edituser", async (request, response) => {

  // check if the user already created
  const salt = await bcrypt.genSaltSync(10)
  let pass
 
   const {email} = request.body;
   let user = await userSchema.findOne({email})

   if(request.body.password){
        pass = await bcrypt.hashSync(request.body.password, salt);
   }else{
       pass = user.password
   }

     if(!user){
         console.log("There is no valid user with this email id")
         return response.status(401).json({ msg: "user not valid"})
     }


     var item = {
         email:request.body.email,
         username:request.body.username,
         address: request.body.address,
         role: request.body.role,
         password: pass,
         phone: request.body.phone
     }


    userSchema.updateOne({"_id":ObjectId(request.body.id)}, item, 
        function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
                response.status(200).json({ msg: "Data updated successfully!"})
            }
    });
 
 })

router.post("/login", 
    async (req, res) => {
        
            const {email, password} = req.body;
            let user = await userSchema.findOne({email})
            if(!user) {
                return res.status(401).json({msg: "There is no user with this email"});
            }
            

           bcrypt.compare(password, user.password).then(isMatch => {
                if(isMatch){
                    const payload = {
                        user: {
                            id : user.id
                        }
                    }
            
                    jwt.sign(
                        payload,
                        config.get('jwtSecret'),
                        (err, token) => {
                            if(err) throw err
                            res.json({token});
                        }
                    )
                    return res.status(200).json({msg: "Password matched!", role: user.role});
                }
                else{
                    return res.status(401).json({msg: "Password does not match!"});
                }
            })
          
  })


router.get('/users', async (req, res) => {
    let userList = await userSchema.find()
    res.json(userList)
})

router.get('/users/:username', async (req, res) => {
   let userDetails = await userSchema.findOne(req.param.username)
    res.json(userDetails)
})

module.exports = router;