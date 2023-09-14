const catValidationSchema = {
  name: {
    notEmpty: {
      errorMessage: "category name is empty"
    },
    isLength: {
      options: { min: 3 },
      errorMessage: "category should be min 3 characters "
    }
  }
}

module.exports = catValidationSchema