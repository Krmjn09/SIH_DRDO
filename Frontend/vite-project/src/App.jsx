import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Dashboard" // Ensure Home is correctly imported
import CandidateApplication from "./Pages/CandidateApplication"
import Interviewer from "./Pages/Interviewer"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Candidate" element={<CandidateApplication />} />
        <Route path="/Interviewer" element={<Interviewer />} />
      </Routes>
    </Router>
  )
}

export default App
