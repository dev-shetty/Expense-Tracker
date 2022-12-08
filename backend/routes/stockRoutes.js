const express = require("express")
const router = express.Router()

const { addStocks, getStocks } = require("../controllers/stockController")

router.post("/", addStocks).get("/", getStocks)

module.exports = router
