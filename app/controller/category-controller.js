const Category = require('../model/category-model')
const catController = {}

catController.getCats = async function (req, res) {
  try {
    const cats = await Category.find()
    res.json(cats)
  } catch (e) {
    res.json(e)
  }
}

catController.addCats = async function (req, res) {
  try {
    const body = req.body
    const cat1 = new Category()
    cat1.name = body.name
    await cat1.save()
    res.json(cat1)
  } catch (e) {
    res.json(e)
  }
}

catController.editCat = async function (req, res) {
  try {
    const id = req.params.id
    const body = req.body
    const cat = await Category.findByIdAndUpdate(id, body, { runValidators: true, new: true })
    res.json(cat)
  } catch (e) {
    res.json(e)
  }
}

catController.deleteCat = async function (req, res) {

  try {
    const id = req.params.id
    const cat = await Category.findByIdAndDelete(id)
    res.json(cat)
  } catch (e) {
    res.json(e)
  }
}

module.exports = catController
