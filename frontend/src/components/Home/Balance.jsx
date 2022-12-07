function Balance({ balance }) {
  return (
    <div className="container flex flex-col border-2 justify-center items-center p-6 my-4 w-2/4 mx-auto rounded-xl  bg-gray-200 shadow-inner shadow-gray-400">
      <h2 className="text-2xl font-bold">Balance</h2>
      <div>
        <p className="text-2xl font-bold">&#8377; {balance}</p>
      </div>
    </div>
  )
}

export default Balance
