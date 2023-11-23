const { Op, sequelize, DataTypes } = require('sequelize')
const db = require('../models')
const User = db.user
const bcrypt = require('bcryptjs')

async function Create (data) {
  try {
    const user = await User.create({ ...data })
    return user
  } catch (e) {
    console.log('Sequelize Error', e.message)
  }
}

async function findEmail (email) {
  try {
    const user = await User.findOne({ where: { email } })
    console.log(user)
    if (!user) console.log('Email not found', user)
    return user
  } catch (err) {
    console.log('Error finding email', err.message)
  }
}

async function findUserCredential (email, password) {
  try {
    let isMatch = false
    const user = await findEmail(email)
    if (user) {
      isMatch = await bcrypt.compare(password, user.password)
      return { isMatch, user }
    }
    return { isMatch, user }
  } catch (err) {
    console.log('Error checking credentials', err.message)
  }
}

async function checkUserExist (username, email) {
  try {
    const exist = await User.findOne({ where: { email } })
    return exist
  } catch (err) {
    console.log('Cant Find User Existence', err.message)
  }
}

// to fetch the user details given only the user-id (int)
async function getUserDetails (id) {
  try {
    const exist = await User.findOne({ where: { id } })
    return exist
  } catch (err) {
    console.log('Cant Find User Existence', err.message)
  }
}

async function modifyFunds (id, amount) {
  try {
    const user = await User.findOne({ where: { id } })
    if (user) {
      // logic to take care of withdrawal when amount to be withdrawn > available funds
      if (amount < 0 && Math.abs(amount) > user['funds_available']) return
      user['funds_available'] += amount
      await user.save()
      return user
    }
  } catch (err) {
    console.log('Cant Find User Existence', err.message)
  }
}

module.exports = {
  Create,
  findUserCredential,
  checkUserExist,
  getUserDetails,
  modifyFunds
}
