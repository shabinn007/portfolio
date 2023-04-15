/** @format */
import React, { useState } from "react";
import Palliative from "../assets/palliative.png";
import palliative2 from "../assets/pallaitive2.png";
import resso from "../assets/resso.png";
import edison from "../assets/edison.png";
import edison2 from "../assets/edison2.png";
import resso2 from "../assets/resso2.png";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, IconName } from "react-icons/bs";
import { motion } from "framer-motion";
import "animate.css/animate.min.css";
import native from "../assets/reactnative-unscreen.gif";
import { saveAs } from "file-saver";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";

function downloadCV() {
  const fileUrl = "/React js Developer.pdf";
  const fileName = "React js Developer.pdf";

  saveAs(fileUrl, fileName);
}

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(handleClick);
    navigate("/link");
  };
  const [isHoveredresso, setIsHoveredresso] = useState(false);
  const [isHoveredpalliative, setIsHoveredpalliative] = useState(false);
  const [isHoveredxplor, setIsHoveredxplor] = useState(false);
  const [isHoverededison, setIsHoverededison] = useState(false);
  return (
    <div>
      <div className="pt-5">
        {/* .........................................intro........................................... */}
        <motion.section className="intro mt-5 pt-5" style={{ height: "100vh" }}>
          <div
            className="pt-5 mt-5 animate__animated animate__fadeInUp"
            style={{
              fontSize: "6.375em",
              fontWeight: "450",
              lineHeight: "1.1",
              letterSpacing: "-.02rem",
            }}
          >
            <img
              className="animate__animated animate__fadeInUp"
              src={native}
              style={{ width: "25%", float: "right" }}
            />
            Digital Designer & <br />
            Front-end Developer
          </div>
          <p
            className="animate__animated animate__fadeInUp"
            style={{ fontSize: "24px" }}
          >
            I'm Shabin, a digital designer and a web developer
            <br />
            Pushing the boundaries of web design and
            <br />
            development with React.
          </p>
        </motion.section>
        <div
          style={{ width: "129  0px", height: "1px", backgroundColor: "black" }}
        ></div>

        {/* ........f/........................................projects........................................... */}

        <motion.section className="projects animate__animated animate__fadeInUp">
          <div className="projectHeading">Projects</div>
          <div className="gridProjects">
            <div className="wrapper">
              <img
                src={isHoveredpalliative ? palliative2 : Palliative}
                onMouseOver={() => setIsHoveredpalliative(true)}
                onMouseOut={() => setIsHoveredpalliative(false)}
                alt=""
                style={{
                  height: "85%",
                  width: "100%",
                  border: "1px solid black",
                }}
              />
              <div className="sub">
                <p>Pain and Palliative</p>
                <p style={{ color: "grey" }}>design & development</p>
              </div>
            </div>
            <div className="wrapper">
              <img
                src={isHoveredresso ? resso2 : resso}
                onMouseOver={() => setIsHoveredresso(true)}
                onMouseOut={() => setIsHoveredresso(false)}
                // className="image"
                className={isHoveredresso ? "hovered" : ""}
                alt=""
                style={{
                  height: "85%",
                  width: "100%",
                  border: "1px solid black",
                }}
              />
              <div className="sub">
                <p>Kairali Resso</p>
                <p style={{ color: "grey" }}>development</p>
              </div>
            </div>
            <div className="wrapper">
              <a href="https://edison-valley-new.vercel.app/">
                <img
                  src={isHoverededison ? edison2 : edison}
                  onMouseOver={() => setIsHoverededison(true)}
                  onMouseOut={() => setIsHoverededison(false)}
                  alt=""
                  style={{
                    height: "85%",
                    width: "100%",
                    border: "1px solid black",
                  }}
                />
              </a>
              <div className="sub">
                <p>Edison Valley</p>
                <p style={{ color: "grey" }}>development</p>
              </div>
            </div>
            <div className="wrapper">
              <img
                alt=""
                style={{
                  height: "85%",
                  width: "100%",
                  border: "1px solid black",
                }}
              />
              <div className="sub">
                <p>XPLOR</p>
                <p style={{ color: "grey" }}>design & development</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ...................................Socials..................................................... */}

        <motion.section className="animate__animated animate__fadeInUp">
          <div className="socials">
            <Button
              variant="outline-success"
              style={{ position: "sticky" }}
              onClick={downloadCV}
            >
              Download CV
            </Button>
            <div>
              <a href="https://github.com/shabinn007">
                <AiOutlineGithub className="icon text-dark" />
              </a>
            </div>
            <div className="circle ">
              <a href="https://www.linkedin.com/in/mohammed-shabin007/">
                <FaLinkedinIn className="icon2" type="danger" />
              </a>
            </div>
            <div className="circle ">
              <a href="https://www.instagram.com/__shabin.sha/">
                <BsInstagram className="icon3 text-danger" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* ...........................................footer...................................................................... */}
        <div className="container">
          <section style={{ paddingTop: "30px" }}>
            <div>
              <div className="qstn">Looking for a Developer?</div>
              {/* <Link to="/path/to/link" className="getin">
          <Button className="cursor-pointer">Get in touch</Button>
        </Link> */}
              <div className="getin">
                <motion.button
                  onClick={handleClick}
                  className="intouch"
                  whileHover={{ backgroundColor: "#111", color: "white" }}
                >
                  GET IN TOUCH
                </motion.button>
              </div>
            </div>
            <h1 className="ftr">HIRE ME</h1>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
