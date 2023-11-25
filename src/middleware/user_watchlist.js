const { Op, sequelize, DataTypes } = require('sequelize')
const db = require("../models")
const UserWatchList = db.user_watchlists


async function getUserWatchlist(uid){
    try{
        const watchlists = await UserWatchList.findAll({
            where:{
                user_id:uid,
            }
        })
        return watchlists
    }catch(e){
        console.log(`Cant find watchlist for user ${uid}`,e.message)
    }
}

async function checkUserWatchlist(uid, shortname){
    try{
        const exist = await UserWatchList.findOne({
            where:{
                user_id:uid,
                long_name:shortname
            }
        })
        return exist;
    }catch(e){
        console.log(`Unable to find user with watchlist ${uid} ${shortname}`,e.message)
    }
}
async function deleteWatchlist(short_name, uid){
    try{    
        const delUser = await UserWatchList.destroy({
            where:{
                long_name: short_name,
                user_id: uid,
            }
        })
        return delUser;
    }catch(e){
        console.log(`Error Deleting the error : ${e.message}`)
    }
} 


async function Create(data){
    try{
        const userWatchlist = await UserWatchList.create({...data})
        db.sequelize.sync()
        return userWatchlist
    }catch(e){
        console.log("Sequelize Error creating watchlist",e.message)
    }
}

module.exports = {
    getUserWatchlist,
    checkUserWatchlist,
    Create,
    deleteWatchlist,
}