import axios from "axios"
import { useState } from "react"
import { FaHistory } from "react-icons/fa"
import SingleHistory from "./SingleHistory"

function History({ history }) {
  const [modal, setModal] = useState(false)
  const [allHistory, setAllHistory] = useState("")

  const getHistory = async () => {
    try {
      const response = await axios.get("/api/expense/history")
      setAllHistory(response.data.history)
      if (response.data) setModal(true)
    } catch (error) {
      console.log(error)
    }
  }

  const historyElement = history.map((item) => (
    <SingleHistory key={item._id} singleHistory={item} />
  ))

  return (
    <>
      <div
        className="absolute right-2 scale-125 cursor-pointer"
        onClick={getHistory}
      >
        <FaHistory />
      </div>
      <div className=" px-4 py-4 mx-2 rounded-lg cursor-pointer ">
        {historyElement}
      </div>
      {modal && (
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-gray-100 min-h-[4rem] min-w-[15rem] max-h-[30rem] overflow-y-auto px-8 py-2 rounded-lg  shadow-gray-600 shadow-xl">
          {allHistory.map((item) => (
            <SingleHistory key={item._id} singleHistory={item} />
          ))}
          <div
            className="absolute w-6 h-6 bg-red-500 top-0 right-0 cursor-pointer flex justify-center items-center text-white rounded-bl-md"
            onClick={() => setModal(false)}
          >
            X
          </div>
        </div>
      )}
    </>
  )
}

export default History
