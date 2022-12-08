function SingleHistory({ singleHistory }) {
  const { expense, earning, source, balance } = singleHistory
  return (
    <div className="flex justify-between items-center px-4 border-2 pb-2 my-2 rounded-lg bg-gray-200 shadow-inner shadow-gray-400">
      <div className="px-4 py-2">
        <p>{source}</p>
        <div className="flex items-center">
          <p
            className={`${
              expense > earning ? "text-red-500" : "text-green-500"
            }`}
          >
            {expense > earning ? "-" : "+"}
          </p>
          <p
            className={`pl-0.5 font-semibold ${
              expense > earning ? "text-red-500" : "text-green-500"
            }`}
          >
            &#8377;{Math.abs(expense - earning)}
          </p>
        </div>
      </div>
      <div className="px-4 py-2">
        <p className="text-xl font-semibold">&#8377;{balance}</p>
      </div>
    </div>
  )
}

export default SingleHistory
