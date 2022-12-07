const express = require("express")
const router = express.Router()

const {
  setExpense,
  getBalance,
  getAllHistory,
} = require("../controllers/expenseController")

router.post("/", setExpense).get("/", getBalance)
router.get("/history", getAllHistory)

module.exports = router
