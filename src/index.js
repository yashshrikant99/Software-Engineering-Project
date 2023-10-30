const express = require('express')
var request = require('request')
const sequelize = require('sequelize');
require('dotenv').config()
const app = express()
const userRouter = require('./routes/user');

 sequelize.authenticate();


const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json());


app.use(userRouter);
app.listen(port, () => console.log(`Server listening at port ${port}`))

app.get('/', (req, res) => {
  res.send('Welcome to Stock Trainer backend')
})

app.get('/stocks', (req, res) => {
  res.send('About route')
})
