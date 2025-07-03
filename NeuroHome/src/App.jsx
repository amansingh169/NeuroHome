import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyHome from "./pages/Home";
import LivingRoom from "./pages/livingroom";
import KidsRoom from "./pages/Kids_room";
import Kitchen from "./pages/Kitchen";
import Office from "./pages/Office";
import Bathroom from "./pages/Bathroom";
import Bedroom from "./pages/Bedroom";

function App() {
  return (
    <Router>
      <div className="app-background">
        {/* your routes or layout */}

        <div className="min-h-screen flex flex-col bg text-white">
          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<MyHome />} />
              <Route path="/living-room" element={<LivingRoom />} />
              <Route path="/kids-room" element={<KidsRoom />} />
              <Route path="/kitchen" element={<Kitchen />} />
              <Route path="/office" element={<Office />} />
              <Route path="/bathroom" element={<Bathroom />} />
              <Route path="/bedroom" element={<Bedroom />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
