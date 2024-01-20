import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <Navigation />
      <Hero />
      <Toaster />
    </div>
  );
}

export default App;
