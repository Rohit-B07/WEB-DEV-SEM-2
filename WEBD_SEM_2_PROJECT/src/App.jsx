import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ChatBot from "./components/ChatBot";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : "light"}>

      <Navbar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />

      <Features />

      <ChatBot />

      <FAQ />

      <Footer />

    </div>
  );
}

export default App;
