const express = require("express")
const router = express.Router()

const { setExpense, getBalance } = require("../controllers/expenseController")

router.post("/", setExpense).get("/", getBalance)

module.exports = router
