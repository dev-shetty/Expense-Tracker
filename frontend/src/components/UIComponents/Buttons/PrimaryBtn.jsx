function PrimaryBtn({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-2 my-4 px-4 py-1 w-3/4 max-w-sm mx-auto rounded-xl text-lg font-semibold  bg-gray-400 shadow-md shadow-gray-700"
    >
      {text}
    </button>
  )
}

export default PrimaryBtn
