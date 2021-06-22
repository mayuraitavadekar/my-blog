import React, { useState, useEffect } from "react";
import "./assets/css/base.css";
import { Container, Row, Col } from "react-bootstrap";
import DarkModeToggle from "react-dark-mode-toggle";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const About = () => {
  const [darkmode, setDarkmode] = useState(false);

  const handleChange = (event) => {
    if (darkmode === false) {
      setDarkmode(true);
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      localStorage.setItem("darkmode", true);
    } else if (darkmode === true) {
      setDarkmode(false);
      document.body.style.background = "white";
      document.body.style.color = "black";
      localStorage.setItem("darkmode", false);
    }
  };

  const preload = () => {
    if (localStorage.getItem("darkmode")) {
      if (
        localStorage.getItem("darkmode").includes("true") === true ||
        document.body.style.background === "black"
      )
        return true;
      else if (
        localStorage.getItem("darkmode").includes("false") === true ||
        document.body.style.background === "white"
      )
        return false;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("darkmode")) {
      if (
        localStorage.getItem("darkmode").includes("true") === true ||
        document.body.style.background === "black"
      ) {
        setDarkmode(true);
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      } else if (
        localStorage.getItem("darkmode").includes("false") === true ||
        document.body.style.background === "white"
      ) {
        setDarkmode(false);
        document.body.style.background = "white";
        document.body.style.color = "black";
      }
    } else {
      setDarkmode(false);
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  }, []);

  return (
    <div>
      <Container className="main-container">
        <Container className="main-header">
          <Row>
            <Col className="text-left" xs={10} md={10} lg={10}>
              <Link to="/" style={{ textDecoration: "none", color: "#f5b3d3" }}>
                <h1 className="blog-heading">About me</h1>
              </Link>
            </Col>
            <Col className="text-right my-auto" xs={2} md={2} lg={2}>
              <DarkModeToggle
                onChange={handleChange}
                checked={preload() ? true : false}
                size={50}
              />
            </Col>
          </Row>
        </Container>
        <hr />
        <Container className="short-intro">
          <Row style={{textAlign: "justify"}}>
            <Col>
              <span className="font-weight-bold">TLDR:</span>
              <br />
              Hello 👋 Myself Mayur. I'm 23 YO 👨‍💼. I use Linux 🐧 on my PC 🖥️. I
              love to watch ⚽ and I'm huge fan of Liverpool FC 🔴. I play
              harmonium & piano 🎹. I'm deeply interested in history 📜, space.
            </Col>
          </Row>
        </Container>
        <p className="dots">&#9679; &#9679; &#9679;</p>
        <Container className="long-intro">
          <Row style={{textAlign: "justify"}}>
            <Col>
              <p>
                I started doing programming at 18. I learned C, C++, Java, Python, JavaScript, and Dart(a little bit). 
                I currently write everything in Go/JavaScript/Java.
                <br />
                <br />
                I read. I'm deeply intrigued by areas such as Indian mythology, history, space. 
                So I try to read about all of these as much as possible.
                <br />
                <br />
                I started watching football since college days. If you are Liverpool Fan, we're friends. 
                This club has given me a lot of beautiful memories. Nothing can be as unique as singing 'You will never walk alone' before the match.
                <br />
                <br />
                I worked at InnoWise LLC as Associate Software Engineer in the product team. 
                In addition, I contributed to their InnoMeet software. Currently, I work full-time on Educulture as a Backend Engineer.
                <br />
                <br />
                Though I built this blog from scratch, this blog's design is inspired by many websites, 
                and some of them are worth mentioning here - overreacted.io by Dan Abramov, taniarascia.com by Tania Rascia, and seanhalpin.io.
                <br />
                <br />
                I mostly write about my experiences in CS areas. But I can write on Music, Football, and History when time permits. 
                I look forward to sharing more musings periodically.
                <br/>
                <br/>
                <i>30th May 2021: last updated.</i>
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>
    </div>
  );
};

export default About;
