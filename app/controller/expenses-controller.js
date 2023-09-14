const { validationResult } = require('express-validator')
const Expense = require('../model/expense-model')
const expController = {}

expController.getExp = async function (req, res) {
  try {
    const exp = await Expense.find()
    res.json(exp)
  } catch (e) {
    res.json(e)
  }
}

expController.addExp = async function (req, res) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() })
    } else {
      const body = req.body
      const exp1 = new Expense(body)
      const exp = await exp1.save()
      res.json(exp)
    }
  } catch (e) {
    res.json(e)
  }
}

expController.editExp = async function (req, res) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() })
    } else {
      const id = req.params.id
      const body = req.body
      const exp = await Expense.findByIdAndUpdate(id, body, { runValidators: true, new: true })
      res.json(exp)
    }
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