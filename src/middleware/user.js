const {Op, sequelize, DataTypes} = require('sequelize');
const User = require('../models/user')(sequelize, DataTypes);

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