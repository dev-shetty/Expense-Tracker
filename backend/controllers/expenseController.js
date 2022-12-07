const asyncHandler = require("express-async-handler")
const Expense = require("../models/expenseModel")

// @desc set the new expense or earning
// @router POST /api/expense
// @access Public
const setExpense = asyncHandler(async (req, res) => {
  const { source, expense, earning } = req.body
  let balance = earning - expense

  const prevBalance =
    (await Expense.count()) &&
    (await Expense.find().limit(1).sort({ $natural: -1 }))

  const response = await Expense.create({
    source: source ? source : "Unknown",
    expense: expense ? expense : 0,
    earning: earning ? earning : 0,
    balance: prevBalance ? prevBalance[0].balance + balance : balance,
  })

  const history = await Expense.find().limit(3).sort({ $natural: -1 })
  if (response) {
    res.status(200).json({
      id: response.id,
      message:
        (response.expense && `${response.expense} deducted from balance`) ||
        (response.earning && `${response.earning} added to balance`),
      balance: response.balance,
      history,
    })
  } else {
    res.status(400)
    throw new Error("Something went wrong")
  }
})

// @desc get balance and previous source of earning / expense
// @router GET /api/expense
// @access Public

const getBalance = asyncHandler(async (req, res) => {
  const balance = await Expense.findOne().sort({ $natural: -1 })
  const history = await Expense.find().limit(3).sort({ $natural: -1 })
  res.status(200).json({ balance: balance.balance, history })
})

const getAllHistory = asyncHandler(async (req, res) => {
  const history = await Expense.find().sort({ $natural: -1 })
  res.status(200).json({ history })
})

module.exports = {
  setExpense,
  getBalance,
  getAllHistory,
}
