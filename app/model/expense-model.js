const { Schema, model } = require('mongoose')

const expenseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  amount: {
    type: Number,
    required: true
  },
  expenseDate: {
    type: Date,
    default: new Date()
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category'
  }
})

const Expense = model('expense', expenseSchema)

module.exports = Expense