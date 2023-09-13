require('dotenv').config()
const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 3077
const configureDB = require('./config/db')
const catController = require('./app/controller/category-controller')
const expController = require('./app/controller/expenses-controller')
const app = express()

app.use(express.json())
app.use(cors())

//Connect to mongoDB
configureDB()

//CATEGORIES REQ
app.get('/api/categories', catController.getCats)
app.post('/api/categories', catController.addCats)
app.put('/api/categories/:id', catController.editCat)
app.delete('/api/categories/:id', catController.deleteCat)

// EXPENSES REQ
app.get('/api/expenses', expController.getExp)
app.post('/api/expenses', expController.addExp)
app.put('/api/expenses/:id', expController.editExp)
app.delete('/api/expenses/:id', expController.deleteExp)

app.listen(port, () => {
  console.log('server running on port', port);
})