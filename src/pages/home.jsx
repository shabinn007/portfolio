/** @format */
import React from "react";
import dp from "../assets/dp.jpg";
import wall from "../assets/wall.jpg";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, IconName } from "react-icons/bs";
import { motion } from "framer-motion";
import "animate.css/animate.min.css";
// import react1 from "../assets/react1.png";
// import node1 from "../assets/node1.png";
// import expres1 from "../assets/exp1.png";
// import react from "../assets/rrr.png";
// import node from "../assets/noddd.png";
// import expres from "../assets/exp2.png";
import native from "../assets/reactnative-unscreen.gif";
import { saveAs } from "file-saver";

// import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
// import { navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  return (
    <div>
      {/* <div className="hoverimages">
        <img src={react1} className="react1" />
        <img src={node1} className="node1" />
        <img src={expres1} className="express1" />
        <img
          src={react}
          alt=""
          style={{ marginTop: "-20px", marginLeft: "38px" }}
          className="react2"
        />
        <img
          src={node}
          alt=""
          style={{ width: "88%", marginLeft: "25px" }}
          className="nodejs2"
        />
        <img
          src={expres}
          alt=""
          style={{ width: "72%", marginLeft: "38px" }}
          className="express2"
        />
      </div> */}
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
            <img src={native} style={{ width: "25%", float: "right" }} />
            Digital Designer & <br />
            Front-end Developer
          </div>
          <p
            className="animate__animated animate__fadeInUp"
            style={{ fontSize: "24px" }}
          >
            qhfwbwksbbuiniusnnk <br />
            ndsvkjkdjvnsksfk sjv vskj kskf vksjv <br />
            ugbfnkdjdfnbjkfdnbkjdnbjndn
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
              <img src={dp} alt="" style={{ height: "85%", width: "100%" }} />
              <div className="sub">
                <p>Pain and Palliative</p>
                <p style={{ color: "grey" }}>design & development</p>
              </div>
            </div>
            <div className="wrapper">
              <img src={wall} alt="" style={{ height: "85%", width: "100%" }} />
              <div className="sub">
                <p>Kairali Resso</p>
                <p style={{ color: "grey" }}>development</p>
              </div>
            </div>
            <div className="wrapper">
              <img src={dp} alt="" style={{ height: "85%", width: "100%" }} />
              <div className="sub">
                <p>Edison Valley</p>
                <p style={{ color: "grey" }}>development</p>
              </div>
            </div>
            <div className="wrapper">
              <img src={wall} alt="" style={{ height: "85%", width: "100%" }} />
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
