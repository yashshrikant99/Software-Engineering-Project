const express = require('express')
const router = new express.Router()
const User = require('../middleware/user')
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs')

//Signup API
router.post('/users', async (req, res) => {
  try {
    const user = { ...req.body }
    const newUser = {
      username: user.username,
      password: user.password,
      email: user.email,
      phone: user.phone,
      DoB: user.DoB
    }
    const [userNameExist, emailExist] = await User.checkUserExist(
      newUser.username,
      newUser.email
    )
    console.log(userNameExist, emailExist)
    if (!userNameExist && !emailExist) {
      let fromMail = 'noreply@meetingsApp.com'
      let toMail = user.email
      let subject = 'Verify Email'
      let text = `Verify your account by clicking on the following link -: http://${req.headers.host}/verify-email?token=${user.emailToken}`
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'yashshrikant.work@gmail.com',
          pass: process.env.GMAIL_PASS
        }
      })
      let mailOptions = {
        from: fromMail,
        to: toMail,
        subject: subject,
        text: text
      }
      //hashing the password
      const passwordhash = await bcrypt.hash(newUser.password, 10)
      if (passwordhash) newUser.password = passwordhash
      //await transporter.sendMail(mailOptions)
      const userCreated = await User.Create(newUser)
      console.log('sent')
      if (userCreated) res.send(userCreated)
    } else {
      if (userNameExist && emailExist)
        res.send('Username and Email Id already exists')
      else if (userNameExist) res.send('Username already exists')
      else res.send('Email Id already exists')
    }
  } catch (e) {
    console.log('Creation error', e.message)
    res.status(400).send(e.message)
  }
})

//login API
router.post('/users/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const { isMatch: LoggedIn, user } = await User.findUserCredential(
      email,
      password
    )
    if (LoggedIn)
      res.send({
        allowLogin: LoggedIn,
        id: user.dataValues.id,
        email: user.dataValues.email,
        username: user.dataValues.username,
        funds_available: user.dataValues.funds_available
      })
    else res.send('Wrong Credentials')
  } catch (err) {
    console.log('Cant login', err)
    res.status(400).send(e.message)
  }
})

// route to fetch the user details given the id
router.get('/users/:uid', async (req, res) => {
  try {
    const uid = req.params['uid']
    var user = await User.getUserDetails(uid)
    if (user) {
      res.send(user)
    } else {
      res.status(400).send(`User with id ${uid} does not exist`)
    }
  } catch (e) {
    console.log('Creation error', e.message)
    res.status(400).send(e.message)
  }
})

router.post('/users/:uid/modify-funds', async (req, res) => {
  try {
    const uid = req.params['uid']
    var amount = req.body['amount']
    var user = await User.getUserDetails(uid)
    if (user) {
      var details = await User.modifyFunds(uid, amount)
      if (details) res.send(details)
      else
        res
          .status(400)
          .send(`Amount to be withdrawn is more than existing funds`)
    } else {
      res.status(400).send(`User with id ${uid} does not exist`)
    }
  } catch (e) {
    console.log('Creation error', e.message)
    res.status(400).send(e.message)
  }
})

router.patch('/users/:uid/modify-details', async (req, res) => {
  try {
    const uid = req.params['uid']
    const details = req.body
    var user = await User.getUserDetails(uid)
    if (user) {
      // send the user object and details to be modified
      var response = await User.modifyDetails(user, details)
      res.send(response)
    } else {
      res.status(400).send(`User with id ${uid} does not exist`)
    }
  } catch (e) {
    res.status(400).send(e.message)
  }
})

module.exports = router
