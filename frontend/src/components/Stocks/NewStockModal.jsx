import axios from "axios"
import { GrAdd } from "react-icons/gr"
import PrimaryBtn from "../UIComponents/Buttons/PrimaryBtn"

function NewStockModal({
  setModal,
  setData,
  data,
  initialState,
  setAllStocks,
  setHolding,
}) {
  const { companyName, shares, amount } = data
  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }
  const onClick = async () => {
    if (!shares || !amount || !companyName) {
      console.log("Enter all the fields")
      return
    }
    try {
      const response = await axios.post("/api/stocks/", data)
      setAllStocks(response.data.allStocks)
      setHolding(response.data.totalHolding)
      setModal(false)
      setData(initialState)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-gray-200 p-4 mx-2 w-3/4 flex flex-col gap-4 rounded-lg md:w-2/4 shadow-2xl">
      <form onSubmit={onClick}>
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="companyName">Company</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={companyName}
            onChange={onChange}
          />
        </div>
        <div className="flex gap-2 justify-center">
          <div className="flex flex-col items-center">
            <label htmlFor="shares">Shares</label>
            <input
              type="text"
              name="shares"
              id="shares"
              value={shares}
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              name="amount"
              id="amount"
              value={amount}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="flex ">
          <PrimaryBtn text="Add Stock" type="submit" />
        </div>
        <div className="flex items-center justify-center absolute w-6 aspect-square bg-red-500 top-0 right-0 rounded-tr-lg cursor-pointer">
          <GrAdd className="rotate-45" onClick={() => setModal(false)} />
        </div>
      </form>
    </div>
  )
}

export default NewStockModal
