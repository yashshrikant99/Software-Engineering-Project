const app = require("../server")
const supertest = require("supertest")
const db = require('../models')

it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  })
  let user_id = 1;
  describe('Testing User Watchlist API Module',  ()=>{

    
        /**
     * Testing Add watchlist Api
     */
    test("POST Add Holdings api-watchlists/add_watchlist/:uid", async()=>{
        const testdata = {
            username:"sahil1",
            password:"sahil1@123",
            email:"sahil2@othao.com",
            phone:"abc",
            DoB:"2020-10-21"
    }
    const user =  await db.user.create(testdata);
    if(user)
    user_id=user.id
    const watchlist = {
        short_name:"Apple1",
        close:22.44
    }
    await supertest(app).post(`/api-watchlists/add_watchlist/${user.id}`).
    send(watchlist)
    .expect(200)
    .then(async (response)=>{
        //Check the response
        await expect(response.body.created.id).toBeTruthy();
        await expect(Number(response.body.created.user_id)).toBe(user.id)
        await expect(response.body.created.long_name).toBe(watchlist.short_name)
        await expect(response.body.created.price).toBe(watchlist.close)
        
        // //Check if created in database
        // const user = await db.user.findOne({where:{username:response.body.username, email:response.body.email}})
        // await expect(user).toBeTruthy();
        // await expect(user.username).toBe(data.username)
        // await expect(user.email).toBe(data.email)
    })
    })
    
    
    
    
    /**
     * Testing API to fetch user details
     */
    test("GET USER /api-holdings/holdings/:uid/formatted", async ()=>{
        await supertest(app).get(`/api-holdings/holdings/${user_id}/formatted`)
        .expect(200)
        .then(async (response) => {
            await expect(response.body).toBeTruthy()
        })
    })
    })