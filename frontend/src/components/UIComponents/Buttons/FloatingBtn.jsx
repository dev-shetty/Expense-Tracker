function FloatingBtn({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 md:-right-12 md:-bottom-8 p-2 rounded-full bg-gray-400 shadow-lg shadow-gray-600"
    >
      {text}
    </button>
  )
}

export default FloatingBtn
