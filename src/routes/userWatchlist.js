const express = require("express")
const router = new express.Router()
const UserWatchList = require("../middleware/user_watchlist")

router.get("/user_watchlist/:uid", async (req,res)=>{
    try{
        const uid = req.params["uid"];
        const WatchLists = await UserWatchList.getUserWatchlist(uid);
        if(WatchLists)
        res.send(WatchLists)
        else
        res.status(404).send("Watchlists not found")
    }catch(e){
        res.status(400).send(e.message);
    }
})


router.delete("/rem_watchlist/:uid",async (req,res)=>{
    try{
        console.log("Requested")
        const {uid} = req["params"];
        const {short_name} = req.body
        const userDeleted = await UserWatchList.deleteWatchlist(short_name, uid)
        res.send({userDeleted})
    }catch(e){
        res.status(400).send(e.message)
    }
})


router.post("/add_watchlist/:uid",async(req,res)=>{
    try{
        const uid = req.params["uid"];

        const watchlist = {...req.body}

        const insertData = {
            user_id: uid,
            long_name: watchlist.short_name,
            price: watchlist.close,
        }
        console.log(insertData)
        const exist = await UserWatchList.checkUserWatchlist(uid, watchlist.short_name);
        if(!exist){
        const created = await UserWatchList.Create(insertData)
        if(created)
        res.send({created})
        else
        res.status(400).send("Watchlist Not Created")
    }

    }catch(e){
        res.status(400).send(`Error adding watchlist ${e.message}`)
    }
})

module.exports = router