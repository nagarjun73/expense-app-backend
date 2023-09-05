const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = 3077

const app = express()

app.use(express.json())
app.use(cors())

//Connect to mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/expenses-app-fullstack')
  .then(()=>{
    console.log('Connected to DB');
  })
  .catch((e)=>{
    console.log('error connecting to db', e);
  })

const {Schema, model} = mongoose

const categorySchema = new Schema({
  name:{
    type:String,
    required:true
  }
})

const Category = model("Category", categorySchema)

const expenseSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
  },
  amount:{
    type:Number,
    required:true
  },
  expenseDate:{
    type:Date,
    default:new Date()
  },
  categoryId:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'Category'
  }
})

const Expense = model('expense', expenseSchema)


//CATEGORIES REQ
app.get('/api/categories', (req, res)=>{
  Category.find()
    .then((categories)=>{
      res.json(categories)
    })
    .catch((err)=>{
      res.json(err)
    })
})

app.post('/api/categories', (req, res)=>{
  const body = req.body
  const cat1 = new Category()
  cat1.name = body.name
  cat1.save()
    .then((cat)=>{
      res.json(cat)
    })
    .catch((err)=>{
      res.json(err)
    })
})

app.put('/api/categories/:id',(req, res)=>{
  const id = req.params.id
  const body = req.body

  Category.findByIdAndUpdate(id, body, {runValidators:true, new:true})
  .then((cat)=>{
    res.json(cat)
  })
  .catch((err)=>{
    res.json(err)
  })
})

app.delete('/api/categories/:id', (req, res)=>{
  const id = req.params.id
  Category.findByIdAndDelete(id)
    .then((cat)=>{
      res.json(cat)
    })
    .catch((err)=>{
      res.json(err)
    })
})

// EXPENSES REQ

app.listen(port, ()=>{
  console.log('server running on port', port);
})