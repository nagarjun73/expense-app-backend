const mongoose = require('mongoose')

const configureDB = async function () {
  const name = process.env.DB_NAME || 'expenses-app-fullstack'
  const url = process.env.DB_URL || 'mongodb://127.0.0.1:27017'
  try {
    mongoose.connect(`${url}/${name}`)
    console.log('connected to DB', name);
  } catch (e) {
    console.log("Error connecting to DB", e.message);
  }
}

module.exports = configureDB