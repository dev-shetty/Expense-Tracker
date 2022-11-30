import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import StocksPage from "./pages/StocksPage"
import Navbar from "./components/UIComponents/Navbar/Navbar"

function App() {
  return (
    <div className="container my-2 md:w-3/4 lg:w-2/4 md:mx-auto">
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
