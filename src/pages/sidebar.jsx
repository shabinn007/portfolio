/** @format */

import React from "react";
import "../App.css";
// import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import "animate.css/animate.min.css";
import DarkMode from "./DarkMode";

const sidebar = ({ children }) => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <motion.nav
      className="navbar d-flex pt-5 animate__animated   animate__fadeInDown"
      style={{ justifyContent: "space-between" }}
      // initial={{ opacity: 0, y: -100 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ delay: 1.5, duration: 1 }}
    >
      <h1>Mohammed Shabin</h1>
      <div className="btn" style={{ display: "flex", alignItems: "center" }}>
        <DarkMode />
        <a href="shabinshaw@gmail.com">
          <motion.button
            class="contactbtn"
            whileHover={{
              backgroundColor: "#111",
              color: "white",
              transition: { type: "tween" },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Contact
          </motion.button>
        </a>
      </div>
    </motion.nav>
  );
};

export default sidebar;
