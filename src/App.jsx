import ThemeSelector from "./components/ThemeSelector";
import Home from "./pages/Home";
import BentoGrid from "./components/BentoGrid";

function App() {
  return (
    <div className="home-wrapper d-flex justify-content-center align-items-center p-4">
      <Home />
      <ThemeSelector />
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-4xl text-center pt-10 font-bold">Home Grid</h1>
      <BentoGrid />
    </div>
    </div>
  );
}

export default App;
