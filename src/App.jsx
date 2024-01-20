import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <Navigation />
      <Hero />
      <Toaster />
      <Analytics />
    </div>
  );
}

export default App;
