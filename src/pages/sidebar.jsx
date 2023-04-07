/** @format */

import React from "react";
import "../App.css";
// import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const sidebar = ({ children }) => {
  return (
    // <div>
    //   <nav>
    //     <img
    //       className="dp"
    //       style={{ height: "20%", width: "50%", borderRadius: "50%" }}
    //       src={dp}
    //       alt=""
    //     />
    //     <ul className="sidebar-content">
    //       {/* <li>
    //         <Link to="/">Home</Link>
    //         Home
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //         About
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact</Link>
    //       </li> */}
    //       <h3 style={{ color: "white", marginBottom: "80px" }}>
    //         Mohammed Shabin
    //       </h3>
    //       <li>Home</li>
    //       <li>About me</li>
    //       <li>Projects</li>
    //       <li>Portfolio</li>
    //       <li>Resume</li>
    //       <li>contact</li>
    //     </ul>
    //   </nav>
    //   <main>{children}</main>
    // </div>

    <motion.nav
      className="navbar d-flex pt-5"
      style={{ justifyContent: "space-between" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <h1>Mohammed Shabin</h1>
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
    </motion.nav>
  );
};

export default sidebar;
