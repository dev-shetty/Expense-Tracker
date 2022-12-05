const mongoose = require("mongoose")

const expenseSchema = mongoose.Schema(
  {
    source: {
      type: String,
      required: [true, "Please add a source"],
    },
    expense: {
      type: Number,
    },
    earning: {
      type: Number,
    },
    balance: {
      type: Number,
    },
    history: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Expense", expenseSchema)
