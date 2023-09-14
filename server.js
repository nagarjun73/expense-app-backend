require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { checkSchema } = require('express-validator')

const port = process.env.PORT || 3077
const configureDB = require('./config/db')
const catController = require('./app/controller/category-controller')
const expController = require('./app/controller/expenses-controller')
const catValidationSchema = require('./app/helpers/catValidationSchema')
const expValidationSchema = require('./app/helpers/expValidationSchema')
const app = express()

app.use(express.json())
app.use(cors())

//Connect to mongoDB
configureDB()

//CATEGORIES REQ
app.get('/api/categories', catController.getCats)
app.post('/api/categories', checkSchema(catValidationSchema), catController.addCats)
app.put('/api/categories/:id', checkSchema(catValidationSchema), catController.editCat)
app.delete('/api/categories/:id', catController.deleteCat)

// EXPENSES REQ
app.get('/api/expenses', expController.getExp)
app.post('/api/expenses', checkSchema(expValidationSchema), expController.addExp)
app.put('/api/expenses/:id', checkSchema(expValidationSchema), expController.editExp)
app.delete('/api/expenses/:id', expController.deleteExp)

app.listen(port, () => {
  console.log('server running on port', port);
})