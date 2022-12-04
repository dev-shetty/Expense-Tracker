import { useState } from "react"
import Balance from "../components/Home/Balance"
import ExpenseInput from "../components/Home/ExpenseInput"
import History from "../components/Home/History"
import PrimaryBtn from "../components/UIComponents/Buttons/PrimaryBtn"
import useFetch from "../hooks/useFetch"

function HomePage() {
  const [source, setSource] = useState("")
  const [expense, setExpense] = useState(0)
  const [earning, setEarning] = useState(0)

  const { response, error, loading, fetchData } = useFetch()

  const onClick = () => {
    const data = {
      source,
      expense,
      earning,
    }
    fetchData("/api/expense", "POST", data)
    console.log({
      loading,
      response,
      error,
    })
  }

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
      <Balance />
      <History />
      <PrimaryBtn text="Update" onClick={onClick} />
    </div>
  )
}

export default HomePage
