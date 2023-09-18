const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
  name: {
    type: String,
  },
  color: {
    type: String,
  }
})
const Category = model("Category", categorySchema)

module.exports = Category