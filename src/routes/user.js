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
    const exist = await User.checkUserExist(newUser.username, newUser.email)
    console.log('user exists:', exist)
    if (!exist) {
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
      //   if (passwordhash) newUser.password = passwordhash
      //   await transporter.sendMail(mailOptions)
      const userCreated = await User.Create(newUser)
      console.log('sent')
      if (userCreated) res.send('Created User')
    } else {
      res.send('User already Exist')
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
    const user = await User.findUserCredential(email, password)
    if (user) res.send({ allowLogin: user })
    else res.send('Wrong Credentials')
  } catch (err) {
    console.log('Cant login', err)
    res.status(400).send(e.message)
  }
})

router.post('/users/holdings', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findUserCredential(email, password)
    if (user) res.send({ allowLogin: user })
    else res.send('Wrong Credentials')
  } catch (err) {
    console.log('Cant login', err)
    res.status(400).send(e.message)
  }
})

module.exports = router
