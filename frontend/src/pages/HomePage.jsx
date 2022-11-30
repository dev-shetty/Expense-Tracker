import Balance from "../components/Home/Balance"
import ExpenseInput from "../components/Home/ExpenseInput"
import History from "../components/Home/History"
import PrimaryBtn from "../components/UIComponents/Buttons/PrimaryBtn"

function HomePage() {
  return (
    <div className="container flex flex-col">
      <h1 className="text-center mb-2 font-bold text-2xl">Expense Tracker</h1>
      <ExpenseInput />
      <Balance />
      <History />
      <PrimaryBtn text="Update" />
    </div>
  )
}

export default HomePage
