import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Dashboard" // Ensure Home is correctly imported
import CandidateApplication from "./Pages/CandidateApplication"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Candidate" element={<CandidateApplication />} />
      </Routes>
    </Router>
  )
}

export default App
