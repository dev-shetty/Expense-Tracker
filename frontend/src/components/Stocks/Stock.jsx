import { FaEdit } from "react-icons/fa"
function Stock({ setModal, stock }) {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-2 rounded-lg my-2 bg-gray-200 shadow-inner shadow-gray-400">
      <div>
        <p className="text-lg font-semibold">{stock.companyName}</p>
      </div>
      <div className="flex gap-4 items-center justify-between w-1/4">
        <div className="flex flex-col gap-1 items-center">
          <p>Shares</p>
          <p className="text-lg font-semibold">{stock.shares}</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p>Holding</p>
          <p className="text-lg font-semibold">&#8377; {stock.amount}</p>
        </div>
      </div>
    </div>
  )
}

export default Stock
