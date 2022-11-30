function FloatingBtn({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 md:right-12 md:bottom-8 p-2 border-2 rounded-full"
    >
      {text}
    </button>
  )
}

export default FloatingBtn
