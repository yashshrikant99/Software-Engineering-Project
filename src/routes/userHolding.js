const express = require('express')
const router = new express.Router()
const UserHolding = require('../middleware/userHolding')
const User = require('../middleware/user')

// add a holding given the user id
router.post('/holdings/:uid', async (req, res) => {
  try {
    const uid = req.params['uid']
    const holding = { ...req.body }
    const insertData = {
      user_id: uid,
      stock_name: holding.stock_name,
      buy_price: holding.buy_price,
      quantity: holding.quantity
    }

    const userExists = await User.getUserDetails(uid)
    if (userExists) {
      var [status, data] = await UserHolding.addHoldings(
        uid,
        holding,
        userExists,
        insertData
      )
      res.status(status).send(data)
    } else {
      res.status(400).send(`User with id:${uid} doesnt exist`)
    }
  } catch (e) {
    res.status(400).send(`Error adding holdings ${e.message}`)
  }
})

// display the holdings given the user-id in raw format
router.get('/holdings/:uid/raw', async (req, res) => {
  try {
    const uid = req.params['uid']
    const userExists = await User.getUserDetails(uid)

    if (userExists) {
      const Holdings = await UserHolding.getUserHoldingsRaw(uid)
      if (Holdings) res.send(Holdings)
      else res.status(404).send('Holdings not found')
    } else res.status(400).send(`User with id:${uid} doesnt exist`)
  } catch (e) {
    res.status(400).send(e.message)
  }
})

// display the holdings given the user-id in formatted fashion
router.get('/holdings/:uid/formatted', async (req, res) => {
  try {
    const uid = req.params['uid']
    const userExists = await User.getUserDetails(uid)

    if (userExists) {
      const Holdings = await UserHolding.getUserHoldingsFormatted(uid)
      if (Holdings) res.send(Holdings)
      else res.status(404).send('Holdings not found')
    } else res.status(400).send(`User with id:${uid} doesnt exist`)
  } catch (e) {
    res.status(400).send(e.message)
  }
})

// clear the entire holdings db for the given user => USE ONLY INSTEAD OF DROP TABLE COMMAND
router.delete('/holdings/:uid', async (req, res) => {
  try {
    const uid = req.params['uid']
    var result = await UserHolding.Delete(uid)
    res.send(result)
  } catch (e) {
    console.log(`Error Deleting the error : ${e.message}`)
  }
})

module.exports = router