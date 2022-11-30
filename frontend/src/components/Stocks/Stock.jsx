function Stock() {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-2 rounded-lg">
      <div>
        <p className="text-lg font-semibold">Company Name</p>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-1 items-center">
          <p>Shares</p>
          <p className="text-lg font-semibold">4</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p>Holding</p>
          <p className="text-lg font-semibold">&#8377; 2000</p>
        </div>
      </div>
    </div>
  )
}

export default Stock
