import ThemeSelector from "./components/ThemeSelector";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import MyHome from "./pages/Home";
import Living_Room from "./pages/livingroom";
import Kids_room from "./pages/Kids_room";
import Kitchen from "./pages/Kitchen";
import Office from "./pages/Office";
import Bathroom from "./pages/Bathroom";
import Bedroom from "./pages/Bedroom";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<MyHome />} />
            <Route path="/living-room" element={<Living_Room />} />
            <Route path="/kids-room" element={<Kids_room />} />
            <Route path="/kitchen" element={<Kitchen />} /> 
            <Route path="/office" element={<Office />} />
            <Route path="/bathroom" element={<Bathroom />} />
            <Route path="/bedroom" element={<Bedroom />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
