// App.jsx
import React, { useState, useEffect } from "react";
import ImageToPdf from "./ImageToPdf";
import "./App.css";

function App( {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <button className="toggle-dark-mode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <ImageToPdf />
    </div>
  );
}

export default App;
