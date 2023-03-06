import { useState } from "react"
import { GrAdd } from "react-icons/gr"
import Holdings from "../components/Stocks/Holdings"
import NewStockModal from "../components/Stocks/NewStockModal"
import Stock from "../components/Stocks/Stock"
import FloatingBtn from "../components/UIComponents/Buttons/FloatingBtn"
import { useEffect } from "react"
import axios from "axios"
import Navbar from "../components/UIComponents/Navbar/Navbar"
import { useNavigate } from "react-router-dom"

function StocksPage() {
  const [modal, setModal] = useState(false)
  const [holding, setHolding] = useState(0)
  const [allStocks, setAllStocks] = useState([])
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("expense-tracker-user"))
  )

  const navigate = useNavigate()

  const initialState = {
    companyName: "",
    shares: 0,
    amount: 0,
  }
  const [data, setData] = useState(initialState)

  useEffect(() => {
    const getHoldings = async () => {
      const response = await axios.get("/api/stocks/")
      setHolding(response.data.totalHoldings.totalHolding)
      setAllStocks(response.data.allStocks)
    }
    getHoldings()
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
      <div className="container px-3">
        <h1 className="text-center mt-2 font-bold text-2xl">Stock Holdings</h1>
        <Holdings holding={holding} />
        <div className="flex flex-col gap-2 py-4">
          <div>
            {allStocks.map((item) => (
              <Stock key={item._id} stock={item} setModal={setModal} />
            ))}
          </div>
        </div>
        <FloatingBtn text={<GrAdd />} onClick={() => setModal(true)} />
        {modal && (
          <NewStockModal
            setModal={setModal}
            setData={setData}
            setAllStocks={setAllStocks}
            setHolding={setHolding}
            data={data}
            initialState={initialState}
          />
        )}
      </div>
    </>
  )
}

export default StocksPage
