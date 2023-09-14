const expValidationSchema = {
  title: {
    notEmpty: {
      errorMessage: "title should not be empty"
    },
    isLength: {
      options: { min: 3 },
      errorMessage: "title should be minimum 3 characters"
    }
  },
  description: {
    notEmpty: {
      errorMessage: "description should not be empty"
    }
  },
  amount: {
    isNumeric: {
      errorMessage: "amount should be number and should not have symbols"
    },
    notEmpty: {
      errorMessage: "amount should not be empty"
    }
  },
  expenseDate: {
    notEmpty: {
      errorMessage: "Date should not be empty"
    },
    isDate: {
      options:{delimiters:['/', '-'}
      errorMessage: "Date should be in correct format"
    }
  },
  categoryId: {
    notEmpty: {
      errorMessage: "category should not be empty"
    }
  }
}

module.exports = expValidationSchema
