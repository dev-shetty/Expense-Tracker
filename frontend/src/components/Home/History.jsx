import axios from "axios"
import { useState } from "react"
import SingleHistory from "./SingleHistory"

function History({ history }) {
  const [modal, setModal] = useState(false)
  const [allHistory, setAllHistory] = useState("")

  const getHistory = async () => {
    try {
      const response = await axios.get("/api/expense/history")
      console.log(response.data.history)
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
        className="border-2 px-4 py-4 mx-2 rounded-lg cursor-pointer bg-gray-200 shadow-inner shadow-gray-400"
        onClick={getHistory}
      >
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
