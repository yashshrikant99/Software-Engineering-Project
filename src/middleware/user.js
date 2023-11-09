const {Op, sequelize, DataTypes} = require('sequelize');
const db = require("../models")
const User = db.user


async function Create(data){
    try{
        const user = await User.create({...data})
        return user;
    }catch(e){
        console.log('Sequelize Error',e.message)
    }
}

module.exports = {
    Create,
}