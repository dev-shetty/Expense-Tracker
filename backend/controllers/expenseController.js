const asyncHandler = require("express-async-handler")
const Expense = require("../models/expenseModel")

// @desc set the new expense or earning
// @router POST /api/expense
// @access Public
const setExpense = asyncHandler(async (req, res) => {
  console.log(req.body)
  res.send("Hello")
})

module.exports = {
  setExpense,
}
