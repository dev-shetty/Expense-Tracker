function SingleHistory() {
  return (
    <div className="flex justify-between items-center px-4 border-b-2 pb-2 last:border-b-0">
      <div className="px-4 py-2">
        <p>Source</p>
        <div className="flex items-center">
          <p>+</p>
          <p className="pl-0.5 font-semibold">&#8377;200</p>
        </div>
      </div>
      <div className="px-4 py-2">
        <p className="text-xl font-semibold">&#8377; 1800</p>
      </div>
    </div>
  )
}

export default SingleHistory
