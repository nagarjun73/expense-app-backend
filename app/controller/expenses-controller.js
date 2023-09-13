const Expense = require('../model/expense-model')
const expController = {}

expController.getExp = async function (req, res) {
  try {
    const exp = Expense.find()
    res.json(exp)
  } catch (e) {
    res.json(e)
  }
}

expController.addExp = async function (req, res) {
  try {
    const body = req.body
    const exp1 = new Expense()
    exp1.title = body.title
    exp1.description = body.description
    exp1.amount = body.amount
    exp1.expenseDate = body.expenseDate
    exp1.categoryId = body.categoryId
    const exp = await exp1.save()
    res.json(exp)

  } catch (e) {
    res.json(e)
  }
}

expController.editExp = async function (req, res) {
  try {
    const id = req.params.id
    const body = req.body
    const exp = await Expense.findByIdAndUpdate(id, body, { runValidators: true, new: true })
    res.json(exp)
  } catch (e) {
    res.json(e)
  }
}

expController.deleteExp = async function (req, res) {
  try {
    const id = req.params.id
    const exp = await Expense.findByIdAndDelete(id)
    res.json(exp)
  } catch (e) {
    res.json(e)
  }
}

module.exports = expController