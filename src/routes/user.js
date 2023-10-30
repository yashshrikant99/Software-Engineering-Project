const express = require("express")
const router = new express.Router();
const User = require('../middleware/user');


//Signup API 
router.post("/users", async(req,res)=>{
    try{
        const user = {...req.body}
        const newUser = {
            username,
            password,
             email,
            phone,
            DoB,
        }
        await User.Create(newUser);
        res.send('Created User')
    }catch(e){
        console.log("Creation error",e.message)
        res.status(400).send(e.message)
    }
})

module.exports = router;