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
          <Row>
            <Col>
              <span className="font-weight-bold">TLDR:</span>
              <br />
              Hello 👋 Myself Mayur. I'm 23 YO 👨‍💼. I use Linux 🐧 on my PC 🖥️. I
              love to watch ⚽ and I'm huge fan of Liverpool FC 🔴. I'm musician
              🎼. I learned to play harmonium & piano 🎹. I'm deeply interested
              in Indian mythology, history 📜, space.
            </Col>
          </Row>
        </Container>
        <p className="dots">&#9679; &#9679; &#9679;</p>
        <Container className="long-intro">
          <Row>
            <Col>
              <p>
                I started doing programming at 18. The first language I learned
                was 'C' and it was a terrible experience. Eventually, I learned
                C, C++, Java, Python, and JavaScript, and Dart(a little bit).
                But I have to admit that my two most languages are C++ and
                JavaScript.
                <br />
                <br />
                I have been trying my best to understand how 'structured
                computer organisation' works. But I like to work on software. I
                develop websites, apps. Hot topics such machine learning, and
                artificial intelligence fascinates me but I have not taken deep
                dive into them. UI before AI that's what I am currently
                following.
                <br />
                <br />
                I read. I'm deeply intrigued by areas such as Indian mythology,
                history, space. I believe that, we can learn most important life
                lessons from Indian mythology.
                <br />
                <br />
                Football is something I started to love since my college days.
                If you are Liverpool Fan, we're friends. This club has given me
                a lot of beautiful memories. Nothing can be as special as
                singing 'You will never walk alone' before the match.
                <br />
                <br />
                I work at InnoWise LLC as Associate Softwtare Engineer in
                product team.
                <br />
                <br />
                Though I built this blog from scratch, the design of this blog
                is inspired by lot of websites and some them are worth
                mentioning here -{" "}
                <a href="https://overreacted.io/">overreacted.io</a> by Dan
                Abromov,{" "}
                <a href="https://www.taniarascia.com/">taniarascia.com</a> by
                Tania Rascia and{" "}
                <a href="http://seanhalpin.io/">seanhalpin.io</a>.
                <br />
                <br />
                Lastly, If you want to get connected with me, find me on{" "}
                <a href="https://www.instagram.com/mayuradz/">
                  Instagram
                </a> and{" "}
                <a href="https://www.linkedin.com/in/mayur-aitavadekar/">
                  LinkedIn
                </a>{" "}
                or simply drop a mail. Check out my{" "}
                <a href="https://medium.com/@mayur_aitavadekar"> Medium</a> to
                read my tech articles. You can also visit
                <a href="https://github.com/mayuraitavadekar">github</a>.
                <br />
                <br />
                <br />
                Mayur ❤️
                <br />
                15 June, 2020.
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
