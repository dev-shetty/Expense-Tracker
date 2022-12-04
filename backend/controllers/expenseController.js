const asyncHandler = require("express-async-handler")
const Expense = require("../models/expenseModel")

// @desc set the new expense or earning
// @router POST /api/expense
// @access Public
const setExpense = asyncHandler(async (req, res) => {
  const { source, expense, earning } = req.body
  let balance = earning - expense

  const prevBalance = await Expense.find().limit(1).sort({ $natural: -1 })

  const response = await Expense.create({
    source: source ? source : "Unknown",
    expense: expense ? expense : 0,
    earning: earning ? earning : 0,
    balance: prevBalance[0].balance
      ? prevBalance[0].balance + balance
      : balance,
  })

  if (response) {
    res.status(200).json({ id: response.id, message: "Transaction Added" })
  } else {
    res.status(400)
    throw new Error("Something went wrong")
  }
})

module.exports = {
  setExpense,
}
