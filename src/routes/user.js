const express = require("express")
const router = new express.Router();
const User = require('../middleware/user');



//Signup API 

router.post("/users", async(req,res)=>{
    try{
        const user = {...req.body}
        const newUser = {
            username:user.username,
            password:user.password,
            email:user.email,
            phone:user.phone,
            DoB:user.DoB,
        }
        const userCreated = await User.Create(newUser);
        if(userCreated)
        res.send('Created User')
    }catch(e){
        console.log("Creation error",e.message)
        res.status(400).send(e.message)
    }
})

module.exports = router;