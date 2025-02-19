import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home/Home";
import Jobs from "./jobs/jobs";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-blue-600 text-white">
        <ul className="flex gap-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/jobs" className="hover:underline">Jobs</Link></li>
        </ul>
      </nav>
      <div className="h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;