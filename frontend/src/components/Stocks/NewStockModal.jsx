import { GrAdd } from "react-icons/gr"

function NewStockModal({ setModal }) {
  return (
    <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-gray-200 p-4 mx-2 w-3/4 flex flex-col gap-4 rounded-lg md:w-2/4 shadow-2xl">
      <div className="flex flex-col items-center gap-2">
        <label htmlFor="companyName">Company</label>
        <input type="text" name="companyName" id="companyName" />
      </div>
      <div className="flex gap-2 justify-center">
        <div className="flex flex-col items-center">
          <label htmlFor="shares">Shares</label>
          <input type="text" name="shares" id="shares" />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="amount">Amount</label>
          <input type="text" name="amount" id="amount" />
        </div>
      </div>
      <div className="flex items-center justify-center absolute w-6 aspect-square bg-red-500 top-0 right-0 rounded-tr-lg cursor-pointer">
        <GrAdd className="rotate-45" onClick={() => setModal(false)} />
      </div>
    </div>
  )
}

export default NewStockModal
