import ThemeSelector from "./components/ThemeSelector";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import MyHome from "./components/BentoGrid";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<MyHome />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
