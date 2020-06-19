import React, { useState, useEffect } from "react";
import "./assets/css/base.css";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import DarkModeToggle from "react-dark-mode-toggle";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Projects = () => {
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
      <Container fluid className="main-container">
        <Container fluid className="main-header">
          <Row>
            <Col className="text-left" xs={10} md={10} lg={10}>
              <Link to="/" style={{ textDecoration: "none", color: "#f5b3d3" }}>
                <h1 className="blog-heading">Mayur Aitavadekar</h1>
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

        <Container fluid className="skillset">
          <h4 className="post-heading font-weight-bold">
            <span aria-label="" role="img">
              🤹🏻
            </span>{" "}
            Skills
          </h4>

          <h5 className="text-left ml-auto mt-4">
            <span className="hashtag">#</span> Full Stack Web Dev{" "}
            <span aria-label="" role="img">
              🔥
            </span>{" "}
          </h5>

          <Row className="mt-4">
            <Col>&bull; C++ & Data Structures Algorithms</Col>
            <Col>
              <ProgressBar
                className="mt-1 progressbar text-left"
                animated
                now={70}
                label={`7/10`}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>&bull; JavaScript ES6/NodeJs</Col>
            <Col>
              <ProgressBar
                className="mt-1 progressbar"
                animated
                now={80}
                label={`8/10`}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>&bull; Express Framework</Col>
            <Col>
              <ProgressBar
                className="mt-1 progressbar"
                animated
                now={80}
                label={`8/10`}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>&bull; React</Col>
            <Col>
              <ProgressBar
                className="mt-1 progressbar"
                animated
                now={90}
                label={`9/10`}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>&bull; Databases (Mongo, MySQL)</Col>
            <Col>
              <ProgressBar
                className="mt-1 progressbar"
                animated
                now={70}
                label={`7/10`}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              &bull; Software Engineering <br />
              (software architecture, use Cases & User Stories, CI/CD,
              production best pratices, MVC)
            </Col>
            <Col>
              <ProgressBar
                className="mt-1 progressbar"
                animated
                now={70}
                label={`7/10`}
              />
            </Col>
          </Row>

          <h5 className="text-left ml-auto mt-4">
            <span className="hashtag">#</span> App Dev{" "}
            <span aria-label="" role="img">
              📲
            </span>{" "}
          </h5>

          <Row className="mt-4">
            <Col>&bull; React Native (learning)</Col>
            <Col>
              <ProgressBar
                variant="success"
                className="mt-1 progressbar"
                animated
                now={70}
                label={`7/10`}
              />
            </Col>
          </Row>

          <h5 className="text-left ml-auto mt-4">
            <span className="hashtag">#</span> Devops Integration{" "}
            <span aria-label="" role="img">
              🌐
            </span>{" "}
          </h5>

          <Row className="mt-4">
            <Col>&bull; AWS (S3, EC2, CloudFront)</Col>
            <Col>
              <ProgressBar
                variant="warning"
                className="mt-1 progressbar"
                animated
                now={60}
                label={`6/10`}
              />
            </Col>
          </Row>
        </Container>

        <Container fluid className="projectlist">
          <h4 className="post-heading font-weight-bold">
            <span aria-label="" role="img">
              🤖
            </span>{" "}
            Projects
          </h4>
          <p className="mt-4">
            Here is list of projects I've developed and some are currently under
            heavy development.
          </p>
          <Row className="mt-4">
            <Col>
              &bull; <a href="https://colorise.js.org/">ColoriseJS</a>
            </Col>
            <Col>
              A small JavaScript Library for RGB/HEX color manipulation.
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              &bull;{" "}
              <a href="https://github.com/mayuraitavadekar/essay-writer">
                Essay Writer
              </a>
            </Col>
            <Col>
              A minimal text essay editor built using express and NodeJs for
              writing timed essays.
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              &bull;{" "}
              <a href="https://github.com/mayuraitavadekar/conways-game-of-life">
                Conway's Game of Life
              </a>
            </Col>
            <Col>
              A cellular automata implementation built using HTML5 & NodeJs.
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              &bull;{" "}
              <a href="https://github.com/mayuraitavadekar/data-structures-and-algorithms">
                Data Structures & Algorithms
              </a>
            </Col>
            <Col>C++/Java/JavaScript implementations.</Col>
          </Row>
          <Row className="mt-4">
            <Col>
              &bull;{" "}
              <a href="https://github.com/mayuraitavadekar/react-native-dice-app">
                React Native Dice App
              </a>
            </Col>
            <Col>A simple Dice App.</Col>
          </Row>
          <Row className="mt-4">
            <Col>
              &bull;{" "}
              <a href="https://github.com/mayuraitavadekar/uml-seq-test-case-generator">
                UML test case generator
              </a>
            </Col>
            <Col>
              Web app for parameter values extraction and test generation from
              UML sequence diagram. Built using React and Express.
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              &bull;{" "}
              <a href="https://github.com/mayuraitavadekar/react-native-currency-converter">
                Full stack E-commerce Website
              </a>
            </Col>
            <Col>Super simple Currency Convertor App.</Col>
          </Row>
          <Row className="mt-4">
            <Col>
              &bull;{" "}
              <a href="https://github.com/mayuraitavadekar/react-native-currency-converter">
                React Native Currency App
              </a>
            </Col>
            <Col>Super simple Currency Convertor App.</Col>
          </Row>
          <Row className="mt-4">
            <Col>
              &bull;{" "}
              <a href="https://github.com/mayuraitavadekar/full-stack-ecommerce-website">
                Full stack E-commerce Website
              </a>
            </Col>
            <Col>Currently under dev. Built using React, Express, MongoDB.</Col>
          </Row>
        </Container>

        <Footer />
      </Container>
    </div>
  );
};

export default Projects;
