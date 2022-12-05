import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Balance from "../components/Home/Balance"
import ExpenseInput from "../components/Home/ExpenseInput"
import History from "../components/Home/History"
import PrimaryBtn from "../components/UIComponents/Buttons/PrimaryBtn"

function HomePage() {
  const [source, setSource] = useState("")
  const [expense, setExpense] = useState(0)
  const [earning, setEarning] = useState(0)

  const [balance, setBalance] = useState(0)
  const [history, setHistory] = useState([])

  // TODO: To make the api request here only since the current one is one step behind

  const onClick = async () => {
    const data = {
      source,
      expense,
      earning,
    }
    setSource("")
    setEarning(0)
    setExpense(0)
    try {
      const response = await axios.post("/api/expense", data)
      setBalance(response.data.balance)
      setHistory(response.data.history)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getBalance = async () => {
      const response = await axios.get("/api/expense/balance")
      setBalance(response.data.balance)
      setHistory(response.data.history)
    }

    getBalance()
  }, [])

  return (
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
  )
}

export default HomePage
