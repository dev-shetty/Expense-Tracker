function Holdings({ holding }) {
  return (
    <div className="flex justify-center border-2 bg-gray-200 shadow-inner shadow-gray-400 w-2/4 mx-auto mt-2 rounded-lg">
      <div className="flex flex-col items-center border-2 my-4 py-2 rounded-lg">
        <p className="font-semibold">Total Holdings</p>
        <p className="font-bold text-xl">&#8377; {holding}</p>
      </div>
    </div>
  )
}

export default Holdings
