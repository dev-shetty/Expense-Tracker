import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav className="py-1 px-3 text-md mb-2 bg-gray-400 rounded-t-xl">
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="font-semibold">
            Expense
          </Link>
        </li>
        <li>
          <Link to="/stocks" className="font-semibold">
            Stocks
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
