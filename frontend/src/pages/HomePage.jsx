import Balance from "../components/Home/Balance"
import ExpenseInput from "../components/Home/ExpenseInput"
import History from "../components/Home/History"
import PrimaryBtn from "../components/UIComponents/Buttons/PrimaryBtn"

function HomePage() {
  return (
    <div className="container flex flex-col my-4 md:w-3/4 lg:w-2/4 md:mx-auto">
      <ExpenseInput />
      <Balance />
      <History />
      <PrimaryBtn text="Update" />
    </div>
  )
}

export default HomePage
