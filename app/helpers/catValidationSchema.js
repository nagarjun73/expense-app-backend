const catValidationSchema = {
  name: {
    isLength: {
      options: { min: 3 },
      errorMessage: "category should be min 3 characters "
    }
  },
  color: {
    isLength: {
      options: { min: 3 },
      errorMessage: "you should pick color"
    }
  }
}

module.exports = catValidationSchema
