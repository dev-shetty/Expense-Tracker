const { response } = require("express")
const asyncHandler = require("express-async-handler")
const Stocks = require("../models/stockModel")

// @desc post the stock details
// @router POST /api/stocks
// @access Public
const addStocks = asyncHandler(async (req, res) => {
  const { companyName, shares, amount } = req.body
  if (!companyName || !shares || !amount) {
    res.status(400)
    throw new Error("Enter all the fields")
  }

  const prevHolding =
    (await Stocks.count()) &&
    (await Stocks.find().limit(1).sort({ $natural: -1 }))

  const newStock = await Stocks.create({
    companyName,
    shares,
    amount,
    totalHolding: prevHolding
      ? prevHolding[0].totalHolding + parseFloat(amount)
      : parseFloat(amount),
  })

  if (newStock) {
    const allStocks = await Stocks.find().sort({ $natural: -1 })
    res.status(200).json({
      id: newStock.id,
      message: `${shares} shares of ${companyName} worth Rs.${amount} added`,
      allStocks,
      totalHolding: newStock.totalHolding,
    })
  } else {
    res.status(400)
    throw new Error("Stock not Added... Something went wrong")
  }
})

// @desc get the balance and all stocks
// @router GET /api/stocks
// @access Public
const getStocks = asyncHandler(async (req, res) => {
  const totalHoldings = await Stocks.findOne().sort({ $natural: -1 })
  const allStocks = await Stocks.find().sort({ $natural: -1 })

  res.status(200).json({
    totalHoldings: totalHoldings ? totalHoldings : 0,
    allStocks: allStocks ? allStocks : [],
  })
})

module.exports = {
  addStocks,
  getStocks,
}
