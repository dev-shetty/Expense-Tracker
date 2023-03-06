import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Balance from "../components/Home/Balance"
import ExpenseInput from "../components/Home/ExpenseInput"
import History from "../components/Home/History"
import PrimaryBtn from "../components/UIComponents/Buttons/PrimaryBtn"
import Navbar from "../components/UIComponents/Navbar/Navbar"
import { useNavigate } from "react-router-dom"

function HomePage() {
  const [source, setSource] = useState("")
  const [expense, setExpense] = useState(0)
  const [earning, setEarning] = useState(0)

  const [balance, setBalance] = useState(0)
  const [history, setHistory] = useState([])

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("expense-tracker-user"))
  )

  const navigate = useNavigate()

  const onClick = async () => {
    if (!expense && !earning) {
      console.log("Enter valid expense or earning")
      return
    }
    const data = {
      source,
      expense,
      earning,
    }
    setSource("")
    setEarning(0)
    setExpense(0)
    try {
      const response = await axios.post("/api/expense/", data)
      setBalance(response.data.balance)
      setHistory(response.data.history)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getBalance = async () => {
      const response = await axios.get("/api/expense/")
      setBalance(response.data.balance)
      setHistory(response.data.history)
    }

    getBalance()
  }, [])

  useEffect(() => {
    console.log(token)
    if (!token) {
      navigate("/")
    }
  }, [token])

  return (
    <>
      <Navbar />
      <div className="container flex flex-col">
        <h1 className="text-center mb-2 font-bold text-2xl">Expense Tracker</h1>
        <ExpenseInput
          source={source}
          setSource={setSource}
          expense={expense}
          setExpense={setExpense}
          earning={earning}
          setEarning={setEarning}
        />
        <Balance balance={balance} />
        <History history={history} />
        <PrimaryBtn text="Update" onClick={onClick} />
      </div>
    </>
  )
}

export default HomePage
