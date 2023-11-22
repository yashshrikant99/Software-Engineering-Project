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

async function checkUserWatchlist(uid, longname){
    try{
        const exist = await UserWatchList.findOne({
            where:{
                user_id:uid,
                long_name:longname
            }
        })
        return exist;
    }catch(e){
        console.log(`Unable to find user with watchlist ${uid} ${longname}`,e.message)
    }
}
/**async function deleteWatchlist(wid, uid){
    try{    
        const delUser = await UserWatchList.destroy({
            where:{
                id: wid,
                user_id:uid,
            }
        })
        return delUser;
    }catch(e){
        console.log(`Error Deleting the error : ${e.message}`)
    }
} */


async function Create(data){
    try{
        const userWatchlist = await UserWatchList.create({...data})
        return userWatchlist
    }catch(e){
        console.log("Sequelize Error creating watchlist",e.message)
    }
}

module.exports = {
    getUserWatchlist,
    checkUserWatchlist,
    Create,
}