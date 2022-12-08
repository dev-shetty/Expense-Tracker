import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import StocksPage from "./pages/StocksPage"
import Navbar from "./components/UIComponents/Navbar/Navbar"

function App() {
  return (
    <div className="md:absolute md:top-2/4 md:left-2/4 md:-translate-x-2/4 md:-translate-y-2/4 container md:w-3/4 lg:w-2/4 md:mx-auto bg-gray-300 md:rounded-xl shadow-slate-500 shadow-lg">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stocks" element={<StocksPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
