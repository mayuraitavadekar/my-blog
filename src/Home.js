import React, { useState, useEffect } from "react";
import "./assets/css/base.css";
import { Container, Row, Col } from "react-bootstrap";
import DarkModeToggle from "react-dark-mode-toggle";
import Footer from "./Footer";
import Bio from "./Bio";
import HomeArticles from "./HomeArticles";
import { Link } from "react-router-dom";

export default function Home() {
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
    if (
      localStorage.getItem("darkmode").includes("true") ||
      document.body.style.background === "black"
    )
      return true;
    else if (
      localStorage.getItem("darkmode").includes("false") === false ||
      document.body.style.background === "white"
    )
      return false;
  };

  useEffect(() => {
    if (
      localStorage.getItem("darkmode").includes("true") ||
      document.body.style.background === "black"
    ) {
      setDarkmode(true);
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else if (
      localStorage.getItem("darkmode").includes("false") === false ||
      document.body.style.background === "white"
    ) {
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
        <Container fluid className="mt-4">
          <Bio />
        </Container>
        <HomeArticles />
        {/*<div className="mdx">
          <ReactMarkdown className="mk" source={state} sou skipHtml={true} />
        </div>
        */}
        <Footer />
      </Container>
    </div>
  );
}
