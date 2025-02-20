import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home/Home";
import Jobs from "./jobs/Jobs";
import Header from "./components/Header";

function App() {
  const navigation = [
    { to: "/", label: "Home" },
    { to: "/jobs", label: "Jobs" },
  ];

  return (
    <Router>
      <Header navigation={navigation} />
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
