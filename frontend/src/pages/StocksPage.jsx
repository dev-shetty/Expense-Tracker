import { GrAdd } from "react-icons/gr"
import Holdings from "../components/Stocks/Holdings"
import Stock from "../components/Stocks/Stock"
import FloatingBtn from "../components/UIComponents/Buttons/FloatingBtn"

function StocksPage() {
  return (
    <div className="container px-3">
      <h1 className="text-center mt-2 font-bold text-2xl">Stock Holdings</h1>
      <Holdings />
      <div className="flex flex-col gap-2">
        <Stock />
        <Stock />
        <Stock />
        <Stock />
      </div>
      <FloatingBtn text={<GrAdd />} />
    </div>
  )
}

export default StocksPage
