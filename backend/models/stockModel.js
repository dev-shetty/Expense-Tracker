const mongoose = require("mongoose")

const stocksSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "Please enter stock company"],
    },
    shares: {
      type: Number,
      required: [true, "Please enter total no. of shares"],
    },
    amount: {
      type: Number,
      required: [true, "Please enter total amount you are holding"],
    },
    totalHolding: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Stocks", stocksSchema)
