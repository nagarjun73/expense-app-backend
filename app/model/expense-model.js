const { Schema, model } = require('mongoose')

const expenseSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  amount: {
    type: Number,
  },
  expenseDate: {
    type: Date,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
  }
})

const Expense = model('Expense', expenseSchema)

module.exports = Expense