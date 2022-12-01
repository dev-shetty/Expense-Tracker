import { useState } from "react"
import { GrAdd } from "react-icons/gr"
import Holdings from "../components/Stocks/Holdings"
import NewStockModal from "../components/Stocks/NewStockModal"
import Stock from "../components/Stocks/Stock"
import Wrapper from "../components/UIComponents/Wrappers/Wrapper"
import FloatingBtn from "../components/UIComponents/Buttons/FloatingBtn"

function StocksPage() {
  const [modal, setModal] = useState(false)
  return (
    <div className="container px-3">
      <h1 className="text-center mt-2 font-bold text-2xl">Stock Holdings</h1>
      <Holdings />
      <div className="flex flex-col gap-2">
        <Wrapper setModal={setModal}>
          <Stock />
          <Stock />
          <Stock />
          <Stock />
        </Wrapper>
      </div>
      <FloatingBtn text={<GrAdd />} onClick={() => setModal(true)} />
      {modal && <NewStockModal setModal={setModal} />}
    </div>
  )
}

export default StocksPage
