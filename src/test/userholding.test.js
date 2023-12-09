const app = require("../server")
const supertest = require("supertest")
const db = require('../models')



it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  })

  describe('Testing User Holdings API Module',  ()=>{


/**
 * Testing Adding funds API
 */
let user_id = 1;
 test("POST Add funds /api/users/:uid/modify-funds", async()=>{
    const testdata = {
        username:"jest1332",
        password:"jest2331@123",
        email:"jest12333@othao.com",
        phone:"abc",
        DoB:"2020-10-21"
}
const user =  await db.user.create(testdata);

if(user)
console.log(user)
user_id=user.id

    const data = {
        amount:10000
}

return await supertest(app).post(`/api/users/${user.id}/modify-funds`).
send(data)
.expect(200)
.then(async (response)=>{
    //Check the response logged in
    await expect(response.body.id).toBeTruthy();
    await expect(response.body.email).toBe(testdata.email)
   await expect(response.body.funds_available).toBe(data.amount)
})
})

    /**
 * Testing Add holdings Api
 */
test("POST Add Holdings api-holdings/holdings/:uid", async()=>{
const holding = {
        stock_name:"AAPL",
        buy_price:"0",
        quantity:"10"
}
console.log("iii",user_id)
await supertest(app).post(`/api-holdings/holdings/${user_id}`).
send(holding)
.expect(200)
.then(async (response)=>{
    //Check the response
    await expect(response.body.created.id).toBeTruthy();
    await expect(Number(response.body.created.user_id)).toBe(user_id)
    await expect(response.body.created.stock_name).toBe(holding.stock_name)
    await expect(response.body.created.buy_price).toBe(holding.buy_price)
    await expect(response.body.created.quantity).toBe(holding.quantity)

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