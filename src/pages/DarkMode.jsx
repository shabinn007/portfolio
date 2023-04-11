/** @format */

import { useState, useEffect } from "react";
import "./DarkMode.css";
import { BsMoonStars, BsSun } from "react-icons/bs";
import "animate.css/animate.min.css";

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

function DarkMode({ children }) {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div
      className="animate__animated animate__fadeInRight"
      {...(darkMode ? "dark-theme" : "")}
      style={{ float: "right", marginRight: "15px", marginBottom: "20px" }}
    >
      {/* <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button> */}

      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={() => setDarkMode(!darkMode)}
      />
      <label className="dark_mode_label" for="darkmode-toggle">
        <BsSun className="sun" />
        <BsMoonStars className="moon" />
      </label>
      {children}
    </div>
  );
}

export default DarkMode;
