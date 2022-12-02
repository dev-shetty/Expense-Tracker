const express = require("express")
const router = express.Router()

const { setExpense } = require("../controllers/expenseController")

router.post("/", setExpense)

module.exports = router
