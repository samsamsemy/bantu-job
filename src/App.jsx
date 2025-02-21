import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Jobs from "./jobs/Jobs";
import Header from "./components/Header";

function App() {
  // Definisi menu navigasi secara dinamis
  const navigation = [
    { to: "/", label: "Home" },
    { to: "/jobs", label: "Find Jobs" }, // Nama label bisa disesuaikan
    { to: "/recruiters", label: "For Recruiters" },
    { to: "/blog", label: "Blog" },
    { to: "/career-tips", label: "Career Tips" },
  ];

  return (
    <Router>
      <Header navigation={navigation} />
      <div className="h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          {/* Rute tambahan */}
          <Route path="/recruiters" element={<div>For Recruiters Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
          <Route path="/career-tips" element={<div>Career Tips Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
