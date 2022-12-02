const express = require("express")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 5000
const connectDB = require("./config/db")

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/expense", require("./routes/expenseRoutes"))

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})
