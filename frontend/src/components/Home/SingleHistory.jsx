function SingleHistory({ singleHistory }) {
  const { expense, earning, source, balance } = singleHistory
  return (
    <div className="flex justify-between items-center px-4 border-b-2 pb-2 last:border-b-0">
      <div className="px-4 py-2">
        <p>{source}</p>
        <div className="flex items-center">
          <p>{expense > earning ? "-" : "+"}</p>
          <p className="pl-0.5 font-semibold">
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
