import React, { useState, useEffect } from "react";
import "./assets/css/base.css";
import { Container, Row, Col } from "react-bootstrap";
import DarkModeToggle from "react-dark-mode-toggle";
import Footer from "./Footer";
import Bio from "./Bio";
import HomeArticles from "./HomeArticles";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta
          name="description"
          content="A personal blog by Mayur Aitavadekar. A software engineer. I also make music."
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://www.mayuraitavadekar.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mayur Aitavadekar - A personal blog."
        />
        <meta
          property="og:description"
          content="A personal blog by Mayur Aitavadekar. A software developer. I also make music."
        />
        <meta property="og:url" content="https://www.mayuraitavadekar.com" />
        <meta property="og:site_name" content="Mayur Aitavadekar" />
        <meta property="og:image" content="yourimage.jpg" />
        <meta
          property="og:image:secure_url"
          content="./assets/images/dp.jpeg"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
      </Helmet>

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
