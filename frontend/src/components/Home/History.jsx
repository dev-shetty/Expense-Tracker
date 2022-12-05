import SingleHistory from "./SingleHistory"

function History({ history }) {
  const historyElement = history.map((item) => (
    <SingleHistory key={item._id} singleHistory={item} />
  ))
  return (
    <div className="border-2 px-4 py-4 mx-2 rounded-lg">{historyElement}</div>
  )
}

export default History
