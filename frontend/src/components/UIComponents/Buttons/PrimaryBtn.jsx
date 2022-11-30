function PrimaryBtn({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-2 my-4 px-4 py-1 w-64 mx-auto rounded-xl text-lg font-semibold"
    >
      {text}
    </button>
  )
}

export default PrimaryBtn
