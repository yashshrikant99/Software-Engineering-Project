const app = require("../server")
const supertest = require("supertest")
const db = require('../models')



beforeAll(async ()=>{
    await db.sequelize.sync({force:true})
    
})

it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  })



describe('Testing User API Module',()=>{
    /**
 * Testing Registration Api
 */
test("POST SIGNUP /api/users", async()=>{
    const data = {
        username:"test1",
        password:"test@123",
        email:"yexaf4658112@othao.com",
        phone:"abc",
        DoB:"2020-10-21"
}

await supertest(app).post("/api/users").
send(data)
.expect(200)
.then(async (response)=>{
    //Check the response
    await expect(response.body.id).toBeTruthy();
    await expect(response.body.username).toBe(data.username)
    await expect(response.body.email).toBe(data.email)

    //Check if created in database
    const user = await db.user.findOne({where:{username:response.body.username, email:response.body.email}})
    await expect(user).toBeTruthy();
    await expect(user.username).toBe(data.username)
    await expect(user.email).toBe(data.email)
})
})


/**
 * Testing SIGNIN API
 */
test("POST SIGNIN /api/users/login", async()=>{
    const data = {
        password:"test@123",
        email:"yexaf4658112@othao.com",
}

await supertest(app).post("/api/users/login").
send(data)
.expect(200)
.then(async (response)=>{
    //Check the response logged in
    await expect(response.body.id).toBeTruthy();
    await expect(response.body.email).toBe(data.email)
    await expect(response.body.allowLogin).toBeTruthy()
})
})

/**
 * Testing API to fetch user details
 */
test("GET USER /api/users/:uid", async ()=>{
    const user = await db.user.create({
        username:"test123",
        password:"test@123",
        email:"test123@othao.com",
        phone:"abc",
        DoB:"2020-10-21"
    })
    console.log(user)
    await supertest(app).get(`/api/users/${user.id}`)
    .expect(200)
    .then(async (response) => {
        await expect(response.body.id).toBeTruthy()
        await expect(response.body.username).toBe(user.username)
        await expect(response.body.email).toBe(user.email)
    })
})
})